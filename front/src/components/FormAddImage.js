import React from "react";

const FormAddImage = (props) => {
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
          name="img-file"
          id="file"
          onChange={(event) => {
            let path = event.target.files[0].name;
            props.onFilePath(path);
          }}
        />
      </div>
      <p>{props.filePath}</p>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const filepath = props.filePath;
          if (filepath !== "") {
            props.onSetLoading();
            document.getElementById("formAddImage").submit();
          }
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default FormAddImage;
