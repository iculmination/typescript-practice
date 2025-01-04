const Arrays = () => {
  const list: number[] = [1, 2, 3];
  const list2: Array<number> = [1, 2, 3]; // Generic type

  //   Tuple Type
  const x: [string, number] = ["hello", 1];
  //   const x: [string, number] = [1, "hello"]; - ERROR

  return <div></div>;
};

export default Arrays;
