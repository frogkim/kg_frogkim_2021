var message = "Please enter argument."
for(let i=0; i < process.argv.length; i++)
{
    console.log("argv ", i.toString(), ": ", process.argv[i], "data type is ", typeof process.argv[i]);
}
console.log(message);
