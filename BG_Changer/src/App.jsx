import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center fixed top-10 inset-x-0">
        <div className="flex flex-wrap  bg-white justify-center rounded-2xl gap-3 px-2 py-1 ">
          <button
            onClick={() => setcolor("red")}
            className="bg-red-500 text-white px-4  py-2 m-2 rounded-2xl hover:bg-red-700 transition duration-300"
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-blue-700 transition duration-300"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="bg-green-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-green-700 transition duration-300"
          >
            Green
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="bg-yellow-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-yellow-700 transition duration-300"
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("purple")}
            className="bg-purple-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-purple-700 transition duration-300"
          >
            Purple
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="bg-pink-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-pink-700 transition duration-300"
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="bg-orange-500 text-white px-4 py-2 m-2 rounded-2xl hover:bg-orange-700 transition duration-300"
          >
            Orange
          </button>
          <button
            onClick={() => setcolor("black")}
            className="bg-black text-white px-4 py-2 m-2 rounded-2xl hover:bg-gray-700 transition duration-300"
          >
            Black
          </button>
          <button
            onClick={() => setcolor("white")}
            className="bg-gray-100 text-black px-4 py-2 m-2 rounded-2xl hover:bg-gray-200 transition duration-300"
          >
            White
          </button>

          <button
            onClick={() => setcolor("darkgray")}
            className="bg-gray-600 text-white px-4 py-2 m-2 rounded-2xl hover:bg-gray-700 transition duration-300"
          >
            Dark Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
