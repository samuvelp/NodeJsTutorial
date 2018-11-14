const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const note = require('./note.js')

const argvYarg = yargs.argv
const command  = argvYarg._[0]

if(_.isEqual(command,"add")){
    note.addNote(argvYarg.title,argvYarg.body)
}else if(_.isEqual(command,"list")){
    note.listNote(argvYarg.title)
}else if(_.isEqual(command,"read")){
    note.readNote(argvYarg.title)
}else if(_.isEqual(command,"remove")){
    note.removeNote(argvYarg.title)
}else{
    console.log("Command not recognised")
}