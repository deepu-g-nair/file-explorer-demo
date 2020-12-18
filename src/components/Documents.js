import React from "react";
import Contentfolder from "../images/contentfolder.png";
import Emptyfolder from "../images/emptyfolder.png";
import Pdffolder from "../images/pdfcontentfolder.png";
import Ppt from "../images/powerpointicon.png";
import Pdficon from "../images/pdficon.png";
import Docicon from "../images/docicon.png";
import Wordicon from "../images/wordicon.png";

function Documents() {
  return (
    <div className="folder-section-divider">
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Docs</p>
      </div>
      <div className="infolder">
        <img src={Contentfolder} alt="" />
        <p style={{ fontSize: 12 }}>Revision</p>
      </div>
      <div className="infolder">
        <img src={Emptyfolder} alt="" />
        <p style={{ fontSize: 12 }}>Templates</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Seminar</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 1</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 2</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 3</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 4</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 5</p>
      </div>
      <div className="infolder">
        <img src={Pdffolder} alt="" />
        <p style={{ fontSize: 12 }}>Sem 6</p>
      </div>
      <div className="infolder">
        <img src={Ppt} alt="" />
        <p style={{ fontSize: 12 }}>Presentation</p>
      </div>
      <div className="infolder">
        <img src={Ppt} alt="" />
        <p style={{ fontSize: 12 }}>Project Review</p>
      </div>
      <div className="infolder">
        <img src={Wordicon} alt="" />
        <p style={{ fontSize: 12 }}>Report</p>
      </div>
      <div className="infolder">
        <img src={Pdficon} alt="" />
        <p style={{ fontSize: 12 }}>Pdf 1</p>
      </div>
      <div className="infolder">
        <img src={Pdficon} alt="" />
        <p style={{ fontSize: 12 }}>Pdf 2</p>
      </div>
      <div className="infolder">
        <img src={Docicon} alt="" />
        <p style={{ fontSize: 12 }}>Doc x</p>
      </div>
      <div className="infolder">
        <img src={Docicon} alt="" />
        <p style={{ fontSize: 12 }}>Doc y</p>
      </div>
      <div className="infolder">
        <img src={Docicon} alt="" />
        <p style={{ fontSize: 12 }}>Doc z</p>
      </div>
    </div>
  );
}

export default Documents;
