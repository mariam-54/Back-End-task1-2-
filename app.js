/////////// Task1 /////////////////////// 
// class Person {
//   constructor(fname, lname, age, city) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.city = city;
//   }
// }

// let person = new Person("ahmed", "hossam", 20, "alex");

// let json = JSON.stringify(person);

// fs.writeFileSync("person.json", json);

// let data = fs.readFileSync("person.json", "utf8");
// let personObj = JSON.parse(data);
// console.log(personObj);

// personObj.fname = "adel";
// personObj.lname = "ahmed";
// personObj.age = 40;
// personObj.city = "cairo";

// json = JSON.stringify(personObj);

// fs.writeFileSync("person.json", json);

/////////// Task2 /////////////////////// 
const fs = require("fs");

class Person {
  constructor(id, fname, lname, age, city) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.city = city;
  }
}

// Add 7 persons
let persons = [
  new Person(1, "Maryam", "Hassan", 23, "Cairo"),
  new Person(2, "Jane", "Doe", 25, "London"),
  new Person(3, "Mike", "Smith", 40, "Tokyo"),
  new Person(4, "Mary", "Johnson", 35, "Paris"),
  new Person(5, "David", "Miller", 29, "Berlin"),
  new Person(6, "Lisa", "Brown", 28, "Moscow"),
  new Person(7, "Nourhan", "Hassan", 21, "Cairo"),
];

// Convert to JSON and write to file
let json = JSON.stringify(persons);
fs.writeFileSync("persons.json", json);

// Delete persons 4, 5 and 6
persons = persons.filter(
  (person) => person.id !== 4 && person.id !== 5 && person.id !== 6
);

// Convert to JSON and write to file
json = JSON.stringify(persons);
fs.writeFileSync("persons.json", json);

// List fname, lname and city for all
persons.forEach((person) => {
  console.log(person.fname, person.lname, person.city);
});

// Read data for 5th person
let fifthPerson = persons[4];
console.log(fifthPerson);