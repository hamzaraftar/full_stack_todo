import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import EditTodo from "./EditTodo";

const Alltodo = () => {
  const [value, setValue] = useState([]);

  // Fetch all todos
  async function allData() {
    try {
      const allTodo = await axios.get("http://localhost:5000/todo");
      const data = await allTodo.data;
      setValue(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    allData();
  }, [value]);

  //Delete Todo
  async function handleDelete(id) {
    try {
      const deleteTodo = await axios.delete(`http://localhost:5000/todo/${id}`);
      setValue(value.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="mx-auto w-[400px] p-10">
      <div>
        {value.map((todo) => (
          <div key={todo.id}>
            <h1 className="text-xl text-center font-semibold">{todo.title}</h1>
            <EditTodo />
            <MdDeleteOutline
              onClick={() => handleDelete(todo.id)}
              className="text-3xl cursor-pointer hover:text-red-500 hover:bg-slate-300 rounded-full mx-2"
            />
            <p className="font-serif text-center ">{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltodo;
