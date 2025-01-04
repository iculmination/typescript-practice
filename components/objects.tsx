type Person = {
  name: string;
  age: number;
};

type User = Person & {
  nickName: string;
};

type Admin = User & { getPassword: () => string };

// OR:

// type Person = {
//   name: number;
//   age: number;
//   nickName?: string;
//   getPassword?: () => string;
// };

const Objects = () => {
  // const user: { name: string; age: number } = { name: "Eugene", age: 30 };

  const person: Person = { name: "Eugene", age: 30 };
  const user: User = { name: "Eugene", age: 30, nickName: "someNickName" };
  const admin: Admin = {
    name: "Eugene",
    age: 30,
    nickName: "someNickName",
    getPassword: function () {
      return `${this.name}${this.age}`;
    },
  };

  return <div></div>;
};

export default Objects;
