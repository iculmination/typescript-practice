interface User {
  readonly name: string;
  age?: number;
  [propName: string]: any;
}

interface Admin extends User {
  getPass(): string;
}

// You can also create class that implements several interfaces (class Eugene implements User, Person {})
class Eugene implements User {
  name = "Eugene";
  age = 11;

  nickName: string = "sdffsd"; // - not an error, class is valid
}

const Interfaces = () => {
  const eugene: User = {
    name: "Eugene",
    age: 31,
    // nickName: "sdmf", - error without [propName: string]: any;
  };

  const max: User = {
    name: "Max",
  };

  return <div></div>;
};

export default Interfaces;
