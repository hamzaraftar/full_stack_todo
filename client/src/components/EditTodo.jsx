import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

const EditTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const Modal = () => {
    return (
      <>
        <div>
          <form className=" ">
            <input
              type="text"
              required
              placeholder="Edit title"
              className="text-xl outline-none px-4 border-2 border-yellow-500 m-2 rounded-lg p-2"
            />
            <input
              type="text"
              required
              placeholder="Edit description"
              className="text-xl outline-none px-4 border-2 border-yellow-500 m-2 rounded-lg p-2"
            />
            <button className="bg-yellow-500 absolute text-white top- px-6 py-2 rounded-lg text-left active:bg-yellow-700 active:text-white">
              Edit
            </button>
          </form>
        </div>
      </>
    );
  };
  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>
        <CiEdit className="text-3xl" />
      </button>
      {showModal && <Modal />}
    </>
  );
};

export default EditTodo;
