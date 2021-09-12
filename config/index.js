const comsDB = require('../db/coms')

console.log(comsDB.selectSQL('select * from edi_user'));

module.exports = {
    xmlFile: {
        frequency: "* * * * *",
        handler: "handlers/makeFileXml"
    },
    textFile: {
        frequency: "* * * * *",
        handler: "handlers/makeFileText"
    },
    EDIFactFile: {
        frequency: "* * * * *",
        handler: "handlers/makeFileEDIFact"
    }
}