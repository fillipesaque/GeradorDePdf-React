import React, { useState } from "react";
import "./GeneratePDF.css";
import TextStyleConfig from "../TextStyle/TextStyleConfig";
import ImageUpload from "../ImageUpload/ImageUpload";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const GeneratePDF = () => {
  const [title, setTitle] = useState("");
  const [description, setDescriptions] = useState("");
  const [fontSize, setFontSize] = useState("12");
  const [fontColor, setFontColor] = useState("#000");
  const [isBold, setIsBold] = useState("false");
  const [image, setImage] = useState(null);

  const generatePdf = () => {
    const customStyle = {
      fontSize: parseInt(fontSize),
      color: fontColor,
      bold: isBold,
    };

    const documentDefinition = {
      content: [
        { text: `Titulo: ${title}`, style: "customStyle" },
        { text: `Descriçao ${description}`, style: "customStyle" },
        image ? { image: image, width: 150 } : {},
      ],
      styles: {
        customStyle: customStyle,
      },
    };
    pdfMake.createPdf(documentDefinition).download();
  };

  return (
    <div className="container">
      <label className="label">
        Titulo:
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="label">
        Descriçao:
        <input
          type="text"
          className="input"
          value={description}
          onChange={(e) => setDescriptions(e.target.value)}
        />
      </label>
      <TextStyleConfig
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        isBold={isBold}
        setIsBold={setIsBold}
      />
      <ImageUpload setImage={setImage} />
      <button className="button" onClick={generatePdf}>
        {" "}
        Gerar PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
