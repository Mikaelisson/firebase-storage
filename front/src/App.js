import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import FormAddImage from "./components/FormAddImage";

function App() {
  const [filePath, setFilePath] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState("");

  useEffect(() => {
    searchImages();
  }, []);

  const searchImages = async () => {
    await fetch("/api/images")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  };

  const deleteImage = async (element) => {
    await fetch("/" + element._id, { method: "delete" }).then((res) => {
      if (res.status === 200) {
        searchImages();
        setLoading(false);
      } else {
        res.json().then((err) => console.log(err));
      }
    });
  };

  const onSetLoading = () => {
    if (loading) setLoading(false);
    else setLoading(true);
  };

  const onFilePath = (path) => {
    setFilePath(path);
  };

  return (
    <div className="app">
      <h1>Upload de imagem</h1>
      <FormAddImage
        filePath={filePath}
        onFilePath={onFilePath}
        onSetLoading={onSetLoading}
      />

      <div className="container-images">
        <h1>Imagens</h1>
        <div className="images">
          {images
            ? images.map((element, index) => {
                return (
                  <div key={index}>
                    <a href={element.url} target="_blank" rel="noreferrer">
                      <img
                        src={element.url}
                        alt="Imagem de foto-perfil.png"
                      ></img>
                      <div className="buttons-image">
                        <button type="button">Ver mais</button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setLoading(true);
                            deleteImage(element);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </a>
                  </div>
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
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
