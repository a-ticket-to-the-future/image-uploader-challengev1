import { Button } from "@mui/material";
import React from "react";
import "./ImageUploader.css";

const ImageUploader = () => {
  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUploadeBox">
        <div className="imageLogoAndText">
          
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input className="imageUploadInput" multiple name="imageURL" />
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input className="imageUploadInput" />
      </Button>
    </div>
  );
};

export default ImageUploader;