interface User {
  name?: string;
}

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview2 = Omit<Todo, "description">;

const UtilityTypes = () => {
  const user: Readonly<User> = {
    name: "Eugene",
  };

  const user2: Required<User> = {
    name: "Eugene",
  };

  const x: Record<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "about" },
    contact: { title: "contact" },
  };

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  const todo2: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  return <div>UtilityTypes</div>;
};

export default UtilityTypes;
