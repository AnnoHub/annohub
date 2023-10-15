import React from "react";

import "./TextUnit.css";

function TextUnit({ title, paragraph }) {
  return (
    <div className="layout">
      <h className="title">{title}</h>
      <p className="paragraph">{paragraph}</p>
    </div>
  );
}

export default TextUnit;
