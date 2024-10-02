import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import randomcolor from "randomcolor";

const Gradient = () => {
  const [colorOne, setColorOne] = useState(randomcolor());
  const [colorTwo, setColorTwo] = useState(randomcolor());
  const [output, setOutPut] = useState("");

  useEffect(() => {
    const gradient = `linear-gradient(to right, ${colorOne}, ${colorTwo})`;
    document.body.style.background = gradient;
    setOutPut(gradient);
  }, [colorOne, colorTwo]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "color1") {
      setColorOne(value);
    } else if (name === "color2") {
      setColorTwo(value);
    }
  };

  const createRandomColor = () => {
    setColorOne(randomcolor());
    setColorTwo(randomcolor());
  };

  return (
    <div className="gradient">
      <h1>Create your Own Gradient:</h1>
      <div className="colorPicker">
        <input
          type="color"
          name="color1"
          value={colorOne}
          onChange={handleChangeColor}
        />
        <input
          type="color"
          name="color2"
          value={colorTwo}
          onChange={handleChangeColor}
        />
      </div>
      <button className="randomBtn" onClick={createRandomColor}>
        Random Gradient Color
      </button>
      <div className="output">
        <SyntaxHighlighter language="css" style={docco}>
          {output}
        </SyntaxHighlighter>
        <CopyToClipboard text={`background: ${output}`}>
          <FaRegCopy
            style={{ cursor: "pointer", fontSize: "25px", marginLeft: "8px" }}
          />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Gradient;
