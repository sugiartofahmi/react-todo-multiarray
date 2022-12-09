import { useState } from "react";

const App = () => {
  const [selectTodo, setSelectTodo] = useState([]);
  const [todo, setInputTodo] = useState({
    id: Date.now(),
    name: "",
  });
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Makan",
    },
    {
      id: 2,
      name: "Minum",
    },
    {
      id: 3,
      name: "Mengoding",
    },
  ]);
  const inputTodo = (todo) => {
    setSelectTodo((prev) => [...prev, todo]);
  };
  const deleteTodo = (index) => {
    setSelectTodo((prev) => [...prev.splice(index, 1), ...prev]);
  };
  return (
    <div className="flex gap-x-5 w-full h-screen justify-center items-center">
      <form>
        <input type="text" placeholder="masukan todo" />
      </form>
      <div className="border-2 border-solid border-gray-500 p-6">
        {todos.map((el, i) => (
          <div>
            <h1 key={i}>
              {i + 1}.{el.name}
            </h1>
            <button
              onClick={() => inputTodo(el)}
              className="bg-green-200 py-2 px-3 rounded-lg"
            >
              Masukan
            </button>
          </div>
        ))}
      </div>
      <div className="border-2 border-solid border-gray-500 p-6">
        <h1>Jumlah To Do {selectTodo.length}</h1>
        {selectTodo.length === 0 ? (
          <h1>Data Tidak Ada</h1>
        ) : (
          selectTodo.map((el, i) => (
            <div>
              <h1 key={i}>
                {i + 1}.{el.name}
              </h1>
              <button
                onClick={() => deleteTodo(i)}
                className="bg-red-200 py-2 px-3 rounded-lg"
              >
                Hapus
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
