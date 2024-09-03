import React from "react";
import "./ImageUpload.css";

const ImageUpload = ({ setImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; /* Pegando arquivo enviado pelo input */
    const reader = new FileReader(); /* classe para ler arquivos */

    reader.readAsDataURL(file); /* reader esta lendo o arquivo em URL  */

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="imageUpload">
      <label className="configLabel">
        Upload Image:
        <input
          type="file"
          accept="image/*"
          className="fileInput"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
