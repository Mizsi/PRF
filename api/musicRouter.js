const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const Music=mongoose.model('Music')

const passport = require('passport');


//uj zene felvetele
router.post('/', async (req, res) => {
  console.log(req.body)
  const music = new Music({
    title: req.body.title,
    artist: req.body.artist,
    img_path: req.body.img_path,
    mp3_path:mp3_path
  });
  try {
    const newMusic = await music.save();
    res.status(201).json(newMusic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /musics - összes zene lekérdezése
router.get('/', async (req, res) => {
  try {
    const musics = await Music.find();
    res.status(200).json(musics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - egy zenelekérdezése az id alapján
router.get('/:id', getMusic, (req, res) => { //ez is egy middleware használati módszer, 
  res.json(res.music); //egyszerűsített válaszküldés, a megadott objektumot json-re konvertálva küldjük el
});

// PATCH /users/:id - egy zene frissítése az id alapján
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.title != null) {
    res.user.title = req.body.title;
  }
  if (req.body.artist != null) {
    res.user.artist= req.body.artist;
  }
  if (req.body.img_path!= null) {
    res.user.img_path= req.body.img_path;
  }
  if (req.body.mp3_path != null) {
    res.user.mp3_path = req.body.mp3_path;
  }

  try {
    const updatedMusic= await res.music.save();
    res.json(updatedMusic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete 
router.delete('/:id', getMusic, async (req, res) => {
  try {
    await res.music.remove();
    res.json({ message: 'A zene sikeresen törölve!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router