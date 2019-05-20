const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
    .command('note','add notes',{
        title:{
            describe: 'Title of note',
            demandOption:true,
            type:'string'
        },
        description: {
            describe: 'Note description body',
            demandOption: true,
            type: 'string'
        },
        action: {
            describe: 'Crud Action ',
            demandOption: true,
            type: 'string'
        }
    });

    

var path = 'myfile.txt';

if(yargs.argv.action=='add') {
    
var note = {};
note.title  = yargs.argv.title;
note.description  = yargs.argv.description;
const noteJSON = JSON.stringify(note);

    const data = argv.title;
    fs.writeFile(path, noteJSON, function (err) {
        if (err) {
            return console.log(err); 
        }
        console.log("The file was created and saved...");
        console.log(noteJSON);
    });

}
else if(yargs.argv.action=='read') {
    const data =
    fs.readFileSync(path, "utf8");
    console.log("Reading file...");
    console.log(JSON.parse(data));
}
else if(yargs.argv.action=='update') {
    var note = {};
    note.title  = yargs.argv.title;
    note.description  = yargs.argv.description;
    const noteJSON = JSON.stringify(note);

    const read1 =
    fs.readFile(path, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        ///abdul rauf/g
        //let result = read1.replace("abdulraufarif", 'aaaa');
        const updatedata =
        fs.writeFile(path, noteJSON, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('File updated...');
        });
    });

}
else if(yargs.argv.action=='delete') {
    fs.unlink(path, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted...');
    });

}