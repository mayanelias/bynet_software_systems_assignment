import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ImagesList from "./components/imagesList/ImagesList";
function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [handleButton, setHandleButton] = useState(false);
  const [enterCategory, setEnterCategory] = useState("");
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * query.length)]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage]);
  useEffect(() => {
    const images = async () => {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=27986200-a146bb40ab605a9cb4e467929&q=${query}&per_page=195`
      );
      setImages(data.hits);
    };
    images();
  }, [query]);
  const handleButtonCategory = (category) => {
    setQuery(category);
    setEnterCategory("");
    setHandleButton(true);
  };
  return (
    <div className="App">
      {query ? (
        <h1 className="title">showing {query} collection</h1>
      ) : (
        <h1 className="title">Gallery Collection</h1>
      )}
      <button className="category" onClick={() => handleButtonCategory("food")}>
        FOOD
      </button>

      <button
        className="category"
        onClick={() => handleButtonCategory("music")}
      >
        MUSIC
      </button>

      <button
        className="category"
        onClick={() => handleButtonCategory("sport")}
      >
        SPORT
      </button>
      <br />
      <br />
      <input
        className="enterCategory"
        onChange={(e) => {
          setQuery(e.target.value);
          setEnterCategory(e.target.value);
          setHandleButton(false);
        }}
        value={!enterCategory ? enterCategory : query}
        type="text"
        placeholder="Enter Category..."
      />
      {images.length && (
        <ImagesList images={images} handleButton={handleButton} />
      )}
    </div>
  );
}
export default App;
