import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { DogImage } from "./components/DogImage";
import { BreedSelector } from "./components/BreedSelector";



// get data from an api
// store data in memory (useState)
// Map over data, create a component to display them
// Add filters (use useState to keep track of which filter you're using) 
// [use filter and reduce method if applicable]
// Styling - use tailwind 
// (in the repo there's instructions in the readme for installing and setting up tailwind)
// Use props still from the first class lol 
// don't hard code anything unless it has to be hard coded.



// plan, drop down menu with the dogs name, after select generates 4 pictures of that breed
const dog_breeds = ['pitbull','pug','rottweiler','husky','chow'];


function App() {
  // initialized the empty states or "choices" of the buttons and image array
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  
  // async function runs collecting the selectedBreed's images
  async function getDogImages(breed){
    try {
      const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/4`);
      setImages(data.message);
      
    } catch (error) {
      console.error("Error fetching the dog images", error);
      alert("Error fetching the dog images. Please try again", error.message)
    }
  }

  // useEffect sees the state has changed, and calls the async function to get imageUrls
  useEffect(() => {
    if(selectedBreed){
      getDogImages(selectedBreed);
    }
    else if (!selectedBreed){
      setError("Something went wrong getting the selected breed");
    }
    // [selectedBreed] makes it so the code in this useEffect is run everytime the selectedBreed is changed
  }, [selectedBreed]);

  // useState has a different state so it now rerenders

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
      <h1 className = "text-3xl font-bold text-black mb-6 text-center">
        Select a button for pictures of dogs!
      </h1>


      {/* passes the props to BreedSelector, onSelect is a update function from useState */}
      <div className="flex justify-center mb-8">
      <BreedSelector
        breeds={dog_breeds}
        selectedBreed={selectedBreed}
        onSelect={setSelectedBreed}
        />
      </div>

      <div className="flex justify-center">
        <div className = "grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* DogImages passes the selected breed back and forth to each other */}
          {/* maps each imageURL one by one */}
          {/* react uses key to identify each item in the mapping itself */}
          {/* allows react to only rerendeer what it has to if something is ever changed */}
          {images.map((url,index) => (
            <DogImage key = {url + index} imageURL={url} breed={selectedBreed}/>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App
