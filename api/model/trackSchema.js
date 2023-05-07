const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// #2 User sémadefiníció, minden dokumentumnak, amit a MongoDB-ben tárolni akarunk, kell egy séma definíció
const trackSchema = new mongoose.Schema({
    // a séma legfontosabb elemei az eltárolt dokumentumok adattagjai
  title: {
    type: String,
    /* támogatott típusok: String, Number, Date, Buffer, Boolean, Mixed, ObjectId,
        Array, Decimal128, Map, Schema - az utolsóval valósítható meg az egymásba ágyazás, tehát hogy az egyik dokumentum
        egy másikat tartalmazzon */
    required: true,
    unique : true
  },
  artist: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required:true,

  },
  video_url:{
    type: String,
    required:true
  }
  /* mp3:{
    data:Buffer,
    contentType:String,
    required: true,
    default: false,
  } */
});




const Track = mongoose.model('track', trackSchema);

module.exports = Track;