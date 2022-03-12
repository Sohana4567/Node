let index=process.argv.slice(2);
console.log("index",index);
let helper=require('./command/help');
let command = index[0];
let path=index[1];
switch (command) {
    case "tree":
        //call tree function
        console.log("tree function called and executed succesfully on path " + path);
        break;
    case "organize":
        //call organize function
        console.log("organize function called and executed succesfully on path " + path);
        break;
    case "help":
        //call help function
        helper.help();
        console.log("help function called and executed succesfully on path " + path);

        break;
    default:
        console.log("command not recognized :/")
        break;
}