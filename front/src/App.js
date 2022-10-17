import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  const [filePath, setFilePath] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState("");

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  }, []);

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
        <div className="images">
          {images
            ? images.map((element, index) => {
                return (
                  <form key={index} action="" method="">
                    <a href={element.url} target="_blank" rel="noreferrer">
                      <img
                        src={element.url}
                        alt="Imagem de foto-perfil.png"
                      ></img>
                      <div className="buttons-image">
                        <button onClick={(event) => event.preventDefault()}>
                          Ver mais
                        </button>
                        <button type="submit">
                          <FaTrash />
                        </button>
                      </div>
                    </a>
                  </form>
                );
              })
            : null}
          <div></div>
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
