const clone = require('clone')
const config = require('./config')
const Contact = require('./models/contact')

const db = {}


let get = (token, callback) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      return console.log(err);
    }
    data = clone(contacts)
    callback({ contact: data });
  });
}
const add = (token, contact,callback) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }
  Contact.create(contact);
  callback(contact);
}

const remove = (token, id) => {
 Contact.remove({id},err=>{if(err)console.log(err)});
}

module.exports = {
  get,
  add,
  remove
}
