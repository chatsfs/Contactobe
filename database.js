'use strict';

const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/contacts',err=>{
    if(err)console.log('Failed connection');
    else console.log('Successfully connected');
});