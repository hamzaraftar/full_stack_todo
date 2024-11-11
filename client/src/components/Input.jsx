import { useState } from "react";
import axios from "axios";

const Input = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const postData = await axios.post("http://localhost:5000/todo", value);
      const data = await postData.data;
      if (data) {
        setValue({
          title: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[400px] shadow-yellow-500 shadow-lg rounded-xl"
      >
        <input
          value={value.title}
          onChange={(e) => {
            setValue({ ...value, title: e.target.value });
          }}
          type="text"
          className="text-xl outline-none px-4 border-2 border-yellow-500 m-2 rounded-lg p-2"
          placeholder="Title .."
        />
        <input
          value={value.description}
          onChange={(e) => {
            setValue({ ...value, description: e.target.value });
          }}
          type="text"
          className="text-xl outline-none px-4 border-2 border-yellow-500 m-2 rounded-lg p-2 relative"
          placeholder="Description ..."
        />
        <button className="bg-yellow-500 absolute text-white top- px-6 py-2 rounded-lg text-left active:bg-yellow-700 active:text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
