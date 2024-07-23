
class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    bark() {
      return `Woof! My name is ${this.name}`;
    }
  }
  
  const myDog = new Dog('Julie');
  console.log(myDog.bark());
