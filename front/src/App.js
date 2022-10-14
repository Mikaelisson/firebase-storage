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

      <div className="container-images">
        <h1>Imagens</h1>
        <div>
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>

          
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>
          <img src="http://storage.googleapis.com/image-processing-1b28b.appspot.com/images/1665715595705.foto-perfil.png"></img>
        </div>
      </div>

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
    </div>
  );
}

export default App;
