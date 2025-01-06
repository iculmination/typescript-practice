class Example {
  static secret = 12345;

  constructor(public name: string, public age: number) {}
}

abstract class AbstractClass {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string; // abstract method
}

class User {
  public name: string;
  private age: number = 20;
  protected nickName: string;
  readonly pass: string = "password";

  static secret = 12345;

  constructor(name: string, age: number, nickName: string, pass: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }

  getPass(): string {
    return `${this.nickName}${this.age}`;
  }
}

class Eugene extends User {
  name: string = "Eugene";

  constructor(age: number, nickName: string, pass: string) {
    super("Eugene", age, nickName, pass);
    // super(name, age, nickName, pass);
  }

  getPass(): string {
    return `${this.nickName}${User.secret}`;
  }
}

//  SHORTER:

// class User {
//   constructor(
//     public name: string,
//     private age: number = 20,
//     protected nickName: string,
//     readonly pass: string = "password"
//   ) {}
// }

console.log(Example.secret);

const Classes = () => {
  const eugene = new User("Eugene", 20, "Nickname", "password");

  const eugene2 = new Eugene(20, "nickname", "1234");

  return <div></div>;
};

export default Classes;
