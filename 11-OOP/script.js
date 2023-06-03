"use strict";
/* Construnctor function and New Operator */
/*
const Person = function (firstName, birthYear) {
  // Properties of the Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Don't want to do this, if you make a 1000 instances each instance will have a copy of this function slowing down the performance of your app or site. Use prototypes
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const james = new Person("James", 1998);
console.log(james);
// 4 things that happen when the "new" keyword is used
// 1. A new empty object is crested right away
// 2. The function is call and the "this" keyword points to the new empty object
// 3. The new empty object is linked to a prototype
// 4. Function automatically returns the new empty object

const joy = new Person("Joy", 2000);
const ray = new Person("Ray", 1980);
console.log(joy, ray);
// To check if the new oblect is an instance of the Person class created about
console.log(james instanceof Person);
*/
///////////////////////////////////////////
/* Prototypes */
/*
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
// All the instances of Person have access to the calcAge function because of prototypal inheritance
james.calcAge();
joy.calcAge();
ray.calcAge();
// Shows you what methods the instance has access to on its prototype
console.log(james.__proto__);
// You can also set properties using Prototypes
Person.prototype.species = "Human";
// The species is not a property of the Person object, its a property of the prototype and you can check like this. You should get true for firstName and false for species because it's a property that you created using the prototype
console.log(james.hasOwnProperty("firstName"));
console.log(james.hasOwnProperty("species"));
*/
///////////////////////////////////////////
/* Prototypal Inheritance on Built In Objects */

// An array is one of those built in objects that has access to all the methods on the Array prototype thrpugh prototypal inheritance.
const array = [2, 3, 5, 6, 7, 7];
// These are those methods
console.log(array.__proto__);
// This how you can check to see that its true
console.log(array.__proto__ === Array.prototype);

///////////////////////////////////////////
/* Code Challenge 1 */
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`The ${this.make} is going ${this.speed} km/hr`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is going ${this.speed} mph`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is going ${this.speed} mph`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
bmw.brake();
mercedes.accelerate();
*/
///////////////////////////////////////////
/* ES6 Classes */
/*
// 1. Classes are not hoisted, meaning you can use them before they're delcared in the code
// 2. Classes are first class  citizens, meaning you can pass them into functions and return them from functions
// 3. Classes are excuted in strict mode

// Class Expression way to make a class
// const PersonCl = class {};
// Class Declaration way to make a class
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // With classes, the methods automatically get added to the prototype
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const mike = new PersonCl("Mike", 2005);
mike.calcAge();
mike.greet();
*/
///////////////////////////////////////////
/* Getters and Setters */
// Not needed but can be helpful
/*
// Getters and Setters are functions that get and set a value. Every object in JS can have them. Sometimes referred to as special properties or assesser properties

const account = {
  owner: "John",
  movements: [100, 300, 450, 700, 1000],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 1750;
console.log(account.movements);

// Classes can have getters and setters as well
class Membership {
  constructor(fullName, yearStarted) {
    this.fullName = fullName;
    this.yearStarted = yearStarted;
  }

  get memLength() {
    return console.log(
      `You have been a member for ${2023 - this.yearStarted} years!`
    );
  }
  // Have to follow this convention if setting a property to an ecisting parameter
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const nick = new Membership("Nick Smith", 2012);
nick.memLength;
const wayne = new Membership("Lil Wayne", 2015);
*/
///////////////////////////////////////////
/* Static Methods */
/*
// They are methods attached to the constructor and not the prototpye

class Membership {
  constructor(fullName, yearStarted) {
    this.fullName = fullName;
    this.yearStarted = yearStarted;
  }

  get memLength() {
    return console.log(
      `You have been a member for ${2023 - this.yearStarted} years!`
    );
  }
  // Not added to the prototype so instnaces won't inherit it
  static hey() {
    console.log("Welcome to the club!");
  }
}

Membership.hey();

const Newborn = function (firstName, birthYear) {
  // Properties of the Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Newborn.hello = function () {
  console.log("Welcome to Earth!");
};

Newborn.hello();
*/
///////////////////////////////////////////
/* Object.create */
/*
// Least used way to create objects
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// It create a new object by passing in the prototype of that object
const niya = Object.create(PersonProto);
console.log(niya);
niya.init("Niya", 1998);
niya.calcAge();
console.log(niya);
*/
///////////////////////////////////////////
/* Code Challenge 2 */
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`You have are now going ${(this.speed += 10)} mph`);
  }
  brake() {
    console.log(`You have slowed down to ${(this.speed -= 5)} mph`);
  }
  get speedUK() {
    return this.speed * 1.6;
  }

  set speedUK(speed) {
    this.speed = speed / 1.6;
  }
}

const ford = new Car("Ford", 75);
console.log(ford.speedUK);
ford.accelerate();
ford.brake();
ford.speedUK = 140;
console.log(ford);
*/
///////////////////////////////////////////
/* Inheritance between Classes: Constructor Functions */
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // The call method allows us to call the Person class and set the "this" keyword.
  // If we didn't do this it would return undefined for the properties we are trying to pass
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Links the Student prototype to the Person prototype so it have access to its morthods
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}!`);
};

const mike = new Student("Mike", 1980, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

const StudentATH = function (firstName, birthYear, course, sport) {
  Student.call(this, firstName, birthYear, course);
  this.sport = sport;
};

StudentATH.prototype = Object.create(Student.prototype);

StudentATH.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName}, studying ${this.course} and I play ${this.sport}`
  );
};

StudentATH.prototype.hey = function () {
  console.log(`Hey there, reigning from the best sport: ${this.sport}!`);
};

const dion = new StudentATH("Dion", 1990, "business", "football");
console.log(dion);
dion.introduce();
dion.calcAge();
dion.hey();

const Dog = function (breed, name, weight) {
  this.breed = breed;
  this.name = name;
  this.weight = weight;
};

Dog.prototype.announce = function () {
  console.log(
    `This is ${this.name}, an ${this.breed} and weighs ${this.weight}lbs`
  );
};

const jaama = new Dog("german shephard/queensland heeler", "Jaama", 100);
console.log(jaama);
jaama.announce();
*/
///////////////////////////////////////////
/* Code Challenge 3 */
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 15;
  console.log(`This ${this.make} is going ${this.speed}mph`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`This ${this.make} slowed down to ${this.speed}mph`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `This ${this.make} is going ${this.speed}mph, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 100, 35);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(100);
console.log(tesla);
*/
///////////////////////////////////////////
/* Inheritance between Classes: ES6 Classes */
/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

class Student extends Person {
  constructor(firstName, birthYear, course) {
    // Always needs to happen first because it creates the "this" keyword in the child class
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${2023 - this.birthYear} years old but feel more like I'm ${
        2023 - this.birthYear + 10
      } with the material I'm studying`
    );
  }
}

const jonathan = new Student("Jonathan", 1996, "Computer Science");
console.log(jonathan);
jonathan.introduce();
jonathan.calcAge();

class Athlete extends Person {
  constructor(firstName, birthYear, sport) {
    super(firstName, birthYear);
    this.sport = sport;
  }

  introduce() {
    console.log(`Hi my name is ${this.firstName} and I play ${this.sport}`);
  }
}

const mark = new Athlete("Mark", 1999, "Football");
console.log(mark);
mark.introduce();
mark.calcAge();

class Member extends Person {
  constructor(firstName, birthYear, lastName, email) {
    super(firstName, birthYear);
    this.lastNAme = lastName;
    this.email = email;
  }

  generation() {
    if (this.birthYear < 2000 && this.birthYear > 1990) {
      console.log("I'm apart of the best generation yet!");
    } else {
      console.log(
        `I'm doing what I can to put on for my generation, being born in ${this.birthYear}`
      );
    }
  }

  introduce() {
    console.log(
      `Hi my name is ${this.firstName} ${this.lastNAme} and I was born in ${this.birthYear}!`
    );
  }
}
const nakato = new Member("Nakato", 1993, "Kaddu", "nk@gmail.com");
console.log(nakato);
nakato.generation();
nakato.introduce();
*/
///////////////////////////////////////////
/* Inheritance between Classes: Object.create */
/*
class Person {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const hakim = Object.create(Person);

const Student = Object.create(Person);
Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mohammed = Object.create(Student);
mohammed.init("Mohammed", 1990, "Business");
*/
/* Another Class Example/ Encapsulation: Protected Properties and Methods */
/*
class Account {
  // Public Field
  locale = navigator.locale;
  // Private Field
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Private Property
    this.#pin = pin;
    // Protected Property, the "_" is an agreed upon convention to protect the property
    // this._movements = [];
    // this.locale = navigator.locale;

    console.log(`Thank for opening up an account, ${this.owner}!`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // Returning the 'this' keyword allows you to chain methods because it points to the current object
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }
  // Private Method
  #approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }
}

const acc1 = new Account("Jay", "USD", 2121);
// Don't want to directly interact with the properties, its better to make methods that do so ie "deposit" and "withdraw"
// acc1.movements.push(1000)
// acc1.movements.push(-100)
acc1.deposit(1000);
acc1.withdraw(100);
acc1.requestLoan(10000);
console.log(acc1);
console.log(acc1.getMovements());
acc1
  .deposit(5000)
  .deposit(15000)
  .withdraw(100)
  .requestLoan(5000)
  .deposit(50000);

console.log(acc1.getMovements());
*/
/* Code Challenge 4 */
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 15;
    console.log(`This ${this.make} is going ${this.speed}mph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`This ${this.make} slowed down to ${this.speed}mph`);
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `This ${this.make} is going ${this.speed}mph, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`This ${this.make} slowed down to ${this.speed}mph`);
    return this;
  }
}

const rivian = new EV("Rivian", 120, 35);
console.log(rivian);
rivian.accelerate().brake().chargeBattery(90);
console.log(rivian);
*/
