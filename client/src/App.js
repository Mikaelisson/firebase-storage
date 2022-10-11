import React, { useState } from "react";

function App() {
  // const [file, setFile] = useState("");

  // const firebaseConfig = {
  //   apiKey: process.env.API_KEY_FIREBASE,
  //   authDomain: "image-processing-1b28b.firebaseapp.com",
  //   projectId: "image-processing-1b28b",
  //   storageBucket: "image-processing-1b28b.appspot.com",
  //   messagingSenderId: "84409895985",
  //   appId: "1:84409895985:web:a5c8ffc57250479e70d910",
  //   measurementId: "G-F67EDB510N",
  // };

  // const app = initializeApp(firebaseConfig);

  // const storage = getStorage(app);

  // const uploadImage = async () => {
  //   const storageRef = ref(storage, `images/${file.name}`);
  //   await uploadBytes(storageRef, file).then((snapshot) => {
  //     // document.querySelector("#formUpload").submit();
  //     console.log(file);
  //     console.log("Success upload!");
  //   });
  // };

  return (
    <div className="app">
      <form
        action="/upload"
        method="POST"
        encType="multipart/form-data"
        id="formUpload"
      >
        <input
          type="file"
          // onChange={(event) => {
          //   let file = event.target.files[0];
          //   setFile(file);
          // }}
          name="img-file"
          id="file"
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            // uploadImage();
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
