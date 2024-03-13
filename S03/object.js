var info = {
  uname: "Raj Verma",
  city: "delhi",
  id: 101,
};

// read, insert, update and delete
// . and []
//Read or access any Property value from object
// <object-name>.<keyname>

// console.log(info.uname);
// console.log(info.id);

//Insert New Property
// <objectname>.<keyname> = "value"
// console.log(info);
info.email = "raj@gmail.com";
info.phone = 99999999;
console.log(info);

//Update the Property value
// <objectname>.<keyname> = "new value"
info.city = "Mumbai";
info.phone = 8989896767;
console.log(info);

info.id = 150;

info.gender = "male";

//remove or delete property from the object

// delete <objectname>.<keyname>
delete info.id;
delete info.phone;

console.log(info);
