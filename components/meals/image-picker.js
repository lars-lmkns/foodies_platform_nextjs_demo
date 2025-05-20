"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = function () {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="The image selected by the user"
                fill
              />
            )}
          </div>

          <input
            className={classes.input}
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg"
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button
            type="button"
            className={classes.button}
            onClick={handlePickImage}
          >
            Pick an image
          </button>
        </div>
      </div>
    </>
  );
}
