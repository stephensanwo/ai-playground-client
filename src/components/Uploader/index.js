import React, { Fragment, useState } from "react";
import { CloudUpload } from "@carbon/pictograms-react";
import "./style.scss";

const Uploader = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <Fragment>
      <label
        for="file-uploader"
        class="bx--file-browse-btn"
        role="button"
        tabindex="0"
      >
        <div data-file-drop-container class="bx--file__drop-container">
          <div className="upload-button-content">
            <h4
              style={{
                textAlign: "center",
                color: "#999999",
              }}
            >
              Click to upload or drag an drop here
            </h4>
            <small
              style={{
                marginTop: "0.5rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              * Only .csv and .xlsx files supported
            </small>
            <CloudUpload fill="#039874" />
            <small
              style={{ marginTop: "2rem", color: "#039874" }}
              className="bx--file-filename"
            >
              {fileName}
            </small>
          </div>
          <input
            type="file"
            class="bx--file-input"
            id="file-uploader"
            data-file-uploader
            data-target={fileName}
            onChange={onChange}
            accept={[".xlsx", ".csv"]}
          />
        </div>
      </label>
    </Fragment>
  );
};

export default Uploader;
