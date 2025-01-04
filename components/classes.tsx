class User {
  public name: string;
  private age: number = 20;
  protected nickName: string;
  readonly pass: string = "password";

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

//  SHORTER:

// class User {
//   constructor(
//     public name: string,
//     private age: number = 20,
//     protected nickName: string,
//     readonly pass: string = "password"
//   ) {}
// }

const Classes = () => {
  const eugene = new User("Eugene", 20, "Nickname", "password");

  return <div></div>;
};

export default Classes;
