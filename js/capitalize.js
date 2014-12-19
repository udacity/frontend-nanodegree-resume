var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName[0].toUpperCase();
    // Your code goes here!

    console.log(typeof finalName);
    var indx=1;
    while(indx < oldName.length)
    {
        if(oldName[indx]==" ")
            break;      //first name done
        console.log(indx);
        finalName+= (oldName[indx].toLowerCase());
        ++indx;
    }
        
    while(indx < oldName.length)
    { //second name
         finalName+= (oldName[indx].toUpperCase());
        ++indx;
    }   
    console.log(indx);
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));