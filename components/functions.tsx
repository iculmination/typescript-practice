const Functions = () => {
  const greetUser = (): void => {
    console.log("Hello");
  };

  // ERROR
  // const greetUserError: void = () => {
  //   console.log("Hello");
  // };

  const createPassword = (name: string = "Max", age: string | number = 20) =>
    `${name}${age}`;

  const createSkills = (name: string, ...skills: Array<string>) =>
    `My name is ${name}, my skills are: ${skills.join()}`;

  const sum = (a: number, b: number): number => a + b;

  const createError = (message?: string): never => {
    throw new Error(message);
  };

  const infiniteLoop = (): never => {
    while (true) {}
  };

  let newFunc: (firstArgument: string) => void;

  function oldFunc(name: string): void {
    console.log(`Hey, ${name}`);
  }

  // eslint-disable-next-line
  newFunc = oldFunc;

  return <div></div>;
};

export default Functions;
