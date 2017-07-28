'use strict';

const mongoose= require('mongoose');

const contactSchema=new mongoose.Schema({
      id: String,
      name: String,
      email: String,
      avatarURL: String
});

let model=mongoose.model('contact',contactSchema);

module.exports=model;