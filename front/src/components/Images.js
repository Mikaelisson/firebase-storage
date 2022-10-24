import React from "react";
import { FaTrash } from "react-icons/fa";

const Images = (props) => {
  const deleteImage = async (element) => {
    await fetch("/" + element._id, { method: "delete" }).then((res) => {
      if (res.status === 200) {
        props.searchImages();
        props.onSetLoading(true);
      } else {
        res.json().then((err) => console.log(err));
      }
    });
  };

  return (
    <div className="container-images">
      <h1>Imagens</h1>
      <div className="images">
        {props.images
          ? props.images
              .map((element, index) => {
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
                          id="btnDelete"
                          onClick={(event) => {
                            event.preventDefault();
                            props.onSetLoading();
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
              .reverse()
          : null}
      </div>
    </div>
  );
};

export default Images;
