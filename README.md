# Difference between Seal and Freeze methods in JavaScript Objects

In JavaScript objects, the const keyword is used to make an object a constant. A constant means the values inside the object should not be able to update, add or delete. But the constants we create with const keyword are not actual constants. Lets take some example

### const
Here myDetails obejct is a normal const object. If we try to update, add new property or delete some existing property on this object, we can see it is a possible thing. So this is not an actual constant.

![Alt text](/images/normal%20const.PNG?raw=true "Optional Title")

There are some methods we can use to make an object a real constant.Lets see one by one.

### Object.seal
This is a method we can use to seal the object. The seal method make an object more resistance to change. Object.seal(myDetails) is not letting the object to delete it’s property or add new property.

![Alt text](/images/seal%20obj.PNG?raw=true "Optional Title")

So with the seal method adding new property or deleting an existing property is not possible anymore. But still updating an existing property is possible.

### Object.freeze
This method is used to freeze an object. This is the most suitable method to make an object a real constant. The freeze method not allowing to add new property , delete a property or even update an existing property.

![Alt text](/images/freeze.PNG?raw=true "Optional Title")

So with the Object.freeze(myDetails), we can make a real constant. Now it can not add, delete or update properties on the object.

### Conclusion
The const keyword not creating real constants for objects. The seal method and freeze method is used to achieve this in js object constants. Seal method is not allowing to add or delete but it allows to update. Freeze method not allowing any of adding, deleting or updating. So the freeze method is making a real constant.

* Special Notice : This seal and freeze methods will work only on the first level of the object. If you need to go to next level you need to make the next level seal or freez. Ex : Object.freeze(myObj.child)

### Get In Touch
Linkedin -> https://www.linkedin.com/in/tharaka-udayanga-61a424166/