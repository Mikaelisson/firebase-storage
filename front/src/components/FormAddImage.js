import React, { useState } from "react";

const FormAddImage = (props) => {
  const [maxSize, setMaxSize] = useState(false);

  const handleChange = (event) => {
    const path = event.target.files[0].name;
    const fileSize = event.target.files[0].size;
    const maxSize = 2 * 1024 * 1024;

    if (fileSize > maxSize) {
      setMaxSize(true);
    } else {
      setMaxSize(false);
      props.onFilePath(path);
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const filepath = props.filePath;

    if (filepath !== "") {
      props.onSetLoading();
      document.getElementById("formAddImage").submit();
    }
  };

  return (
    <form
      id="formAddImage"
      action="/upload"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="input-file">
        <label htmlFor="file">Clique aqui</label>
        <input
          type="file"
          accept="image/*"
          name="img-file"
          id="file"
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      <div>
        {!maxSize ? (
          <p>{props.filePath}</p>
        ) : (
          <p>Imagem fora do limite máximo de 2 MB</p>
        )}
      </div>
      {!maxSize ? (
        <button
          type="submit"
          onClick={(event) => {
            formSubmit(event);
          }}
        >
          Enviar
        </button>
      ) : (
        <button type="submit" disabled>
          Enviar
        </button>
      )}
    </form>
  );
};

export default FormAddImage;
