const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const Track=mongoose.model('track')

//const passport = require('passport');

const multer = require("multer");
//const GridFsStorage = require("multer-gridfs-storage");
//const Grid = require('gridfs-stream');

async function getTrack(req, res, next) {
  try {
    track = await Track.findById(req.params.id);
    if (track == null) {
      return res.status(404).json({ message: 'A zene nem található' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.track = track; // ettől kezdve a response-ban benne van a db-ből lekért user objektum
  next();
}

//uj zene felvetele
router.post('/', async (req, res) => {
  console.log(req.body)
  const track = new Track({
    title: req.body.title,
    artist: req.body.artist,
    image_url:req.body.image_url,
    video_url:req.body.video_url
    /* image:{
      data:req.file.file,
      contentType:'image/png'
    } */
    //mp3_path:mp3_path
    
  });
  console.log('log from tracksRouter.js: '+ track.title)
  console.log('log from tracksRouter.js: '+ track.artist)
  console.log('log from tracksRouter.js: '+ track.image_url)
  console.log('log from tracksRouter.js: '+ track.video_url)
  try {
    const newtrack = await track.save();
    res.status(201).json(newtrack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /tracks - összes zene lekérdezése
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - egy zenelekérdezése az id alapján
router.get('/:id', getTrack, (req, res) => { //ez is egy middleware használati módszer, 
  res.json(res.track); //egyszerűsített válaszküldés, a megadott objektumot json-re konvertálva küldjük el
});

// PATCH /users/:id - egy zene frissítése az id alapján
router.patch('/:id', getTrack, async (req, res) => {
  if (req.body.title != null) {
    res.user.title = req.body.title;
  }
  if (req.body.artist != null) {
    res.user.artist= req.body.artist;
  }
  /* if (req.body.img_path!= null) {
    res.user.img_path= req.body.img_path;
  } */
  if(req.body.image_url!=null){
    res.user.image_url=req.body.image_url;
  }
  /* if (req.body.mp3_path != null) {
    res.user.mp3_path = req.body.mp3_path;
  } */

  try {
    const updatedTrack= await res.track.save();
    res.json(updatedTrack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete 
router.delete('/:id', getTrack, async (req, res) => {
  try {
    await res.track.remove();
    res.json({ message: 'A zene sikeresen törölve!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router