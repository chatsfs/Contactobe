'use strict';

const Contact=require('./models/contact');
const config = require('./config')
const defaultData = {
  contacts: [
    {
      id: 'ryan',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: config.origin + '/ryan.jpg'
    },
    {
      id: 'michael',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: config.origin + '/michael.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: config.origin + '/tyler.jpg'
    }
  ]
}