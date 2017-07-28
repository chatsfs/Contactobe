'use strict';

const Contact=require('./models/contact');
const config = require('./config')
const contacts= [
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

  contacts.map(contact=>{
      Contact.find({'id':contact.id},(err,contacts)=>{
          if(!err&&!contacts.length){
              Contact.create({id:contact.id,
                name:contact.name,
                email:contact.email,
                avatarURL:contact.avatarURL
              });
          };
      })
  })