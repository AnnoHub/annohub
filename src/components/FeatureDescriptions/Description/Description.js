import TextWithVerticalLine from "../TextWithVerticalLine/TextWithVerticalLine";
import "./Description.css";

function Description() {
  return (
    <div className="description-container">
      <div className="description-item">
        <TextWithVerticalLine
          title="Privacy is key"
          paragraph="Your data is not shared with any third-parties (including us) except for the labelers."
        ></TextWithVerticalLine>
      </div>
      <div className="description-item">
        <TextWithVerticalLine
          title="Publish your dataset"
          paragraph="Publish your dataset either publicly for freelance annotators or privately for your own labelers."
        ></TextWithVerticalLine>
      </div>
      <div className="description-item">
        <TextWithVerticalLine
          title="Having hard times trusting labelers?"
          paragraph="AnnoHub provides several fraud detection and validation algorithms to verify the integrity of the annotations."
        ></TextWithVerticalLine>
      </div>
      <div className="description-item">
        <TextWithVerticalLine
          title="Prepare tests and tutorials"
          paragraph="AnnoHub lets you train annotators by providing an easy way of preparing tests and tutorials."
        ></TextWithVerticalLine>
      </div>
      <div className="description-item">
        <TextWithVerticalLine
          title="Provide instructions and examples"
          paragraph="Provide annotators with any number of instructions and examples."
        ></TextWithVerticalLine>
      </div>
      <div className="description-item">
        <TextWithVerticalLine
          title="A new side income channel for individuals"
          paragraph="AnnoHub is available for the public and anyone who is found eligible by an organization can label its data and earn money."
        ></TextWithVerticalLine>
      </div>
    </div>
  );
}

export default Description;
