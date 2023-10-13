import React from "react";
import "./TextWithVerticalLine.css";

import TextUnit from "../TextUnit/TextUnit";

function TextWithVerticalLine({ title, paragraph }) {
  return (
    <div className="elementWithVerticalLine">
      <TextUnit title={title} paragraph={paragraph}></TextUnit>
    </div>
  );
}

export default TextWithVerticalLine;
