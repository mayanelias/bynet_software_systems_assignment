import React from "react";
import style from "./imagesList.module.css";
const ImagesList = ({ images,handleButton }) => {
  
  let imagesListGallery = images.map((image, i) => {
    if (i < 15) {
      return (
        <div className={style.galleryImagesContainer} key={image.id}>
          <img src={image.webformatURL} />
        </div>
      );
    }
  });
  let randomImagesListCategory;
  if (handleButton) {
    let randomImagesCategory = [...images];
    randomImagesCategory.sort(() => 0.5 - Math.random());
     randomImagesListCategory = randomImagesCategory.map((image, i) => {
      if (i < 15) {
        return (
          <div className={style.galleryImagesContainer} key={image.id}>
            <img src={image.webformatURL}/>
          </div>
        );
      }
    });
  }

  return (
    <div className={style.imagesList}>
      <div className={style.imagesListDiv}>
        {handleButton ? randomImagesListCategory : imagesListGallery}
      </div>
    </div>
  );
};

export default ImagesList;
