/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  this always refers to the object that it is in so if you don't specify an object it will assume you want the window, basically how the browser works

* 2.  Implicit Binding. This refers to the object before the dot. This is the easiest one to think about when you are holding something in your hand and you say look at "this" you are refering to something. 
    That is how I see implicit binding.

* 3.  New Binding. New refers specifically to constructor functions. You have key value pairs that are coded as this.something. You can then write code using those key value pairs

* 4.  Explicit binding. Whenever you use .call or .apply. This also has to do with constructor functions. We can change objects using .call or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// console.log(this);

// code example for Window Binding

// Principle 2

var person = {
    firstName: "Kyle",
    lastName: "Pace",
    school: "Lambda School",
    fullName: function() {
      return this.firstName + " " + this.lastName + " " + this.school;
    }
  };
  console.log(person.fullName())

// code example for Implicit Binding

// Principle 3

// const villain = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 3,
//       height: 4,
//     },
//     healthPoints: 5,
//     name: "Bandit",
//     team: "Outlaw",
//     weapons: [
//       "Sword",
//     ],
//     language: "Common Tongue",
//       })

// code example for New Binding

// Principle 4

    // Humanoid.call(this, villainAttrs);

// code example for Explicit Binding