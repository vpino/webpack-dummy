export default class Person {
  
  constructor (name) {
    this.name = name;
  }

  salute(){
    console.log(`Hey there, my name is ${this.name}`);
  }

}