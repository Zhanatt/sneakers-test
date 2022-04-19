class Person {
  name;
  age;

  constructor(name, age){
    this.age = age;
    this.name = name;
  }

  func(){
    return this.age;
  }

}

const elibek = new Person('Dastan', );
const zhanat = new Person('Zhanat', 18);

console.log(elibek.age);
console.log(zhanat.name);


