interface AddFn {
  (a: number, b: number): number;
}

// let add: AddFn;

// add = (n1: number, n2: number) => n1 + n2;

interface Greetable extends Named {
  greet(phrase: string): void;
}

interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }
}

let user1 = new Person("Santi", 29);
