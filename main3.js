//Initial Object
const myDetails = {
    age : 27,
    name : "tharaka"
}

//freeze method
Object.freeze(myDetails);

//updating
myDetails.age = 28;//not possible

//adding
myDetails.job = "UI Engineer";//not possible

//deteting
delete myDetails.name;//not possible

//after update the object will be the same
/*
const myDetails = {
    age : 27,
    name : "tharaka"
} */