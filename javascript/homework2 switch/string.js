let input=Number(prompt("Enter your birthday"));
let formula =(year - 4) % 12;
switch(formula){
    case 0:
        alert("Your chinese zodiac sign is: rat");
        break;
    case 1:
        alert("Your chinese zodiac sign is: ox");
        break;
    case 2:
        alert("Your chinese zodiac sign is: tiger");
        break;    
    case 3:
        alert("Your chinese zodiac sign is: rabbit");
        break;  
    case 4:
        alert("Your chinese zodiac sign is: dragon");
        break;  
    case 5:
        alert("Your chinese zodiac sign is: snake");
        break;  
    case 6:
        alert("Your chinese zodiac sign is: horse");
        break;  
    case 7:
        alert("Your chinese zodiac sign is: goat");
        break;  
    case 8:
        alert("Your chinese zodiac sign is: monkey");
        break;  
    case 9:
        alert("Your chinese zodiac sign is: rooster");
        break; 
    case 10:
        alert("Your chinese zodiac sign is: dog");
        break;
    case 11:
        alert("Your chinese zodiac sign is: pig");
        break;    
    default:
        alert("Please enter the valid number!");
        break;

}
