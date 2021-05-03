var message = ""
for(let i=2, isNumber=true;;)
{
    for(let j=0; j<process.argv[i].length; j++)
    {
        if(process.argv[i][j] == '0'){
            message += "Zero";
        }   else if(process.argv[i][j] == '1'){
            message += "One";
        }   else if(process.argv[i][j] == '2'){
            message += "Two";
        }   else if(process.argv[i][j] == '3'){
            message += "Three";
        }   else if(process.argv[i][j] == '4'){
            message += "Four";
        }   else if(process.argv[i][j] == '5'){
            message += "Five";
        }   else if(process.argv[i][j] == '6'){
            message += "Six";
        }   else if(process.argv[i][j] == '7'){
            message += "Seven";
        }   else if(process.argv[i][j] == '8'){
            message += "Eight";
        }   else if(process.argv[i][j] == '9'){
            message += "Nine";
        }   else {
            message = "Please enter NUMBERS as arguments";
            console.log(i,j);
            console.log(process.argv[i][j]);
            isNumber = false;
            break;
        }    
    }

    if(!isNumber){
        break;
    }

    if(++i < process.argv.length){
        message += ",";
    } else {
        break;
    }
}

if(message == ""){
    console.log("Please enter arguments.");
} else{
    console.log(message)
}

