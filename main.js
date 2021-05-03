var message = ""
let i=0;
while(true)
{
    console.log("argv ", i.toString(), ": ", process.argv[i], "data type is ", typeof process.argv[i]);
    message += process.argv[i];

    if(++i < process.argv.length)
    {
        message += ",";
    }
    else
        break;
}

if(message == ""){
    console.log("Please enter argument.");
} else{
    console.log(message)
}

