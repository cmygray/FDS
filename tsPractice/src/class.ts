/*
// ES6
class Person {
  constructor(name) {
    // 멤버 변수
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}
*/

class Foo {
  // member(=public)
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Foo('Lee');
console.log(person.walk()); // Lee is walking

class Parent {
  public nationality: string;
  protected familyName: string;
  private isDivorced: boolean;

  constructor(nationality: string, familyName: string, isDivorced: boolean) {
    this.nationality = nationality;
    this.familyName = familyName;
    this.isDivorced = isDivorced;
  }
}

const parents = new Parent('Korean', 'Kim', true);

console.log(parents.nationality);
// console.log(parent.familyName);
// console.log(parent.isDivorced);

class Child extends Parent {
  constructor(isDivorced: boolean) {
    super(nationality, this.familyName, isDivorced);
    this.nationality = super.nationality;
    // this.familyName = super.familyName;
  }
}

const child = new Child();
console.log(child.nationality);
