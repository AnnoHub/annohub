import React from "react";
import "./DescriptionHeader.css";

const DescriptionHeader = () => {
  return (
    <div className="descHead-container">
      <h1 className="descHead-title">
        Data Annotation Platform <br /> for&nbsp;
        <span className="descHead-highlight descHead-company">
          Companies <span className="descHead-tag descHead-org">ORG</span>
        </span>
        <span className="descHead-and">
            and
        </span>
        <span className="descHead-highlight descHead-people">
          People <span className="descHead-tag descHead-per">PER</span>
        </span>
      </h1>
      <p className="descHead-description">
        A data labeling platform available to the public where you can <br />
        annotate data as a freelancer, or publish your dataset either <br />
        publicly or privately for annotation.
      </p>
    </div>
  );
};

export default DescriptionHeader;
