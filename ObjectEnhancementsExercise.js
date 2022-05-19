// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

const createInstructor = (firstName, lastName) => ({ firstName, lastName });
console.log(createInstructor("Albus", "Dumbledore"));

//
// var favoriteNumber = 42;
//
// var instructor = {
//   firstName: "Colt"
// }
//
// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

console.log(instructor[42]);

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

console.log(instructor.sayHi());
console.log(instructor.sayBye());

const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  },
});

const cat = createAnimal("Cat", "meow", "meow");
const dog = createAnimal("Dog", "bark", "Woooof");
const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa");
const cheetah = createAnimal("Big Cat", "Roar", "purrrr");

console.log(cat.meow());
console.log(dog.bark());
console.log(sheep.bleet());
console.log(cheetah.Roar());
