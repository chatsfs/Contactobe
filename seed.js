'use strict';

const Contact=require('./models/contact');
const config = require('./config')
const contacts= [

    {
      id: 'miguel',
      name: 'Miguel Cuadros',
      email: 'tuH4Ck3r+na@upc.pe',
      avatarURL: config.origin + '/migue.jpg'
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