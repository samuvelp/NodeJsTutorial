const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const content = require('./content.js')

const command  = process.argv[2]
const argvYarg = yargs.argv

console.log(`command: ${command}`)
console.log("Process: ",process.argv)
console.log("Yarg: ",argvYarg)

if(_.isEqual(command,"add")){
    console.log("Adding new note")
}else if(_.isEqual(command,"read")){
    console.log("Reading all notes")
}else if(_.isEqual(command,"list")){
    console.log("Listing all notes")
}else if(_.isEqual(command,"remove")){
    console.log("Removing note")
}else{
    console.log("Command not recognised")
}