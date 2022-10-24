import React, { useState } from "react";
import Dropzone from "react-dropzone";

const FormAddImage = (props) => {
  const [maxSize, setMaxSize] = useState(false);

  const handleChange = (file) => {
    const path = file[0].name;
    const fileSize = file[0].size;
    const size = 2 * 1024 * 1024;

    if (fileSize > size) {
      setMaxSize(true);
    } else {
      setMaxSize(false);
      props.onFilePath(path);
    }
  };

  const uploadImage = (file) => {
    const filepath = props.filePath;

    if (filepath !== "") {
      if (file.length === 1) {
        const form = new FormData();
        form.append("img-file", file[0]);

        fetch("/upload", { method: "POST", body: form })
          .then((res) => {
            if (res.status === 200) {
              props.onSetLoading(true);
              props.searchImages();
              props.onFilePath(null);
            } else {
              props.onSetLoading(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        props.onFilePath("Faça upload de 1 arquivo por vez.");
        props.onSetLoading(true);
      }
    }
  };

  return (
    <div className="input-form">
      <Dropzone
        onDrop={(acceptedFile) => {
          handleChange(acceptedFile);
          props.onSetLoading();
          uploadImage(acceptedFile);
        }}
        accept={{
          "image/*": [],
        }}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
          return (
            <section className="input-file">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive && !isDragReject && (
                  <p>Solte o arquivo aqui...</p>
                )}
                {isDragReject && <p>Formato de arquivo não suportado.</p>}
                {!isDragActive && !isDragReject && (
                  <p>Clique aqui ou arraste o arquivo</p>
                )}
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
    </div>
  );
};

export default FormAddImage;
