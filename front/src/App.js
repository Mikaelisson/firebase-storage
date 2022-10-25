import React, { useEffect, useState } from "react";
import FormAddImage from "./components/FormAddImage";
import Images from "./components/Images";
import Loading from "./components/Loading";

function App() {
  const [filePath, setFilePath] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    searchImages();
  }, []);

  const searchImages = () => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  };

  const onFilePath = (path) => {
    setFilePath(path);
  };

  const onSetLoading = (info) => {
    if (info) {
      setLoading(false);
    } else {
      if (loading) setLoading(false);
      else setLoading(true);
    }
  };

  return (
    <div className="app">
      <h1>Upload de imagem</h1>

      <FormAddImage
        filePath={filePath}
        onFilePath={onFilePath}
        onSetLoading={onSetLoading}
        searchImages={searchImages}
      />

      <Images
        images={images}
        onSetLoading={onSetLoading}
        searchImages={searchImages}
      />

      <Loading loading={loading} />
    </div>
  );
}

export default App;
