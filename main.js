var message = ""

// to avoid redundant calculation, variable i is tested in this block
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
            // This is for Test
            console.log(i,j);
            console.log(process.argv[i][j]);
            // --- Test end

            // if argument is not number, 
            message = "Please enter NUMBERS as arguments";
            isNumber = false;
            break;
        }    
    }

    // The case of the arguments are not numbers
    if(!isNumber){
        break;
    }


    // i is tested here
    if(++i < process.argv.length){
        message += ",";
    } else {
        break;
    }
}

// print message
if(message == ""){
    console.log("Please enter arguments.");
} else{
    console.log(message)
}

