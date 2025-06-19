import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);
  const [Password, setPassword] = useState("");

  const copyBtn = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (chars) str += "@#$!%&?/|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, chars, setPassword]);

  const copyText = useCallback(() => {
    copyBtn.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    passGen();
  }, [length, numbers, chars, passGen]);

  return (
    <div className="bg-black h-screen w-screen flex justify-center">
      <div className="w-full h-fit max-w-3xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center my-3 text-2xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            readOnly
            value={Password}
            placeholder="Password"
            className="bg-white w-full px-5 outline-none py-2 rounded-2xl my-3 text-orange-500 font-bold  "
          />
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-2xl m-3 active:bg-blue-600 "
            onClick={copyText}
          >
            copy
          </button>
        </div>
        <div className="flex  justify-center items-center gap-5">
          <div className="flex gap-3 ">
            <input
              type="range"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
              ref={copyBtn}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => {
                setChars((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
