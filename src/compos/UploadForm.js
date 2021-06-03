import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm({email}) {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [mail , setMail]= useState(email);
  const type = ["image/png", "image/jpeg", "image/jpg", "image/svg"];

  const changeHandler = (event) => {
    let selected = event.target.files[0];
    console.log(selected);
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, jpg, jpeg, svg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error ? <div className="error">{error}</div> : ""}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} mail={mail}/>}
      </div>
    </form>
  );
}

export default UploadForm;
