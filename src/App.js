import React, { useEffect, useState } from "react";
import { marked } from "marked";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const initialState = "# Hello, Markdown!";

  const [text, setText] = useState(initialState);

  useEffect(() => {
    return () => {
      document.getElementById("preview").innerHTML = marked.parse(text);
    };
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-center pb-5">
        <h1>Markdown Preview</h1>
      </header>

      <main className="d-flex justify-content-center">
        <div className="row row-cols-md-2">
          <div className="col">
            <textarea
              id="editor"
              onChange={handleChange}
              value={text}
            ></textarea>
          </div>
          <div className="col">
            <div id="preview"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
