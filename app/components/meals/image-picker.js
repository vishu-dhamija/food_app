"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handleClick() {
    imageInput.current?.click();
  }

  function handleChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked.</p>}
          {pickedImage && <img src={pickedImage} alt="Preview" />}
        </div>

        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name} // Ensures it is part of the form
          ref={imageInput}
          onChange={handleChange}
          className={classes.input}
          required
        />

        <button type="button" onClick={handleClick} className={classes.button}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
