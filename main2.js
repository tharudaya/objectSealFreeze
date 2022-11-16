//Initial Object
const myDetails = {
    age : 27,
    name : "tharaka"
}

//Seal method
Object.seal(myDetails);

//updating object
myDetails.age = 28;//this is possible

//adding
myDetails.job = "UI Engineer"; //this is not possible

//deleting
delete myDetails.name; //this is not possible

//after update the object will be like bellow
/*
const myDetails = {
    age : 28,
    name : "tharaka"
} 
*/