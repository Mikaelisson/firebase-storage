import React, { useState } from "react";
import Dropzone from "react-dropzone";

const FormAddImage = (props) => {
  const [maxSize, setMaxSize] = useState(false);

  const handleChange = (file) => {
    const path = file[0].name;
    const fileSize = file[0].size;
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
      <Dropzone
        onDrop={(acceptedFile) => {
          console.log(acceptedFile);
          handleChange(acceptedFile);
        }}
        accept={{
          "image/*": [".jpeg", ".jpg", ".pjpeg", ".png", ".gif"],
        }}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
          return (
            <section className="input-file">
              <div {...getRootProps()}>
                <input {...getInputProps()} accept="image/*" name="img-file" />
                {isDragActive && !isDragReject && (
                  <p>Solte os arquivos aqui...</p>
                )}
                {isDragReject && <p>Formato de arquivo não suportado.</p>}
                {!isDragActive && !isDragReject && <p>Clique aqui</p>}
              </div>
            </section>
          );
        }}
      </Dropzone>
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
