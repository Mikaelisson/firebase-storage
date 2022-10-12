import React, { useState } from "react";

function App() {
  const [filePath, setFilePath] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <h1>Upload de imagem</h1>
      <form action="/upload" method="POST" encType="multipart/form-data">
        <div className="input-file">
          <label htmlFor="file">Clique aqui</label>
          <input
            type="file"
            name="img-file"
            id="file"
            onChange={(event) => {
              let path = event.target.files[0].name;
              setFilePath(path);
            }}
          />
        </div>
        <p>{filePath}</p>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (filePath !== "") {
              setLoading(true);
              document.querySelector("form").submit();
            }
          }}
        >
          Enviar
        </button>
      </form>

      {loading ? (
        <div className="loading">
          LOADING
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
      {/* <div className="loading">
        LOADING
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
    </div>
  );
}

export default App;
