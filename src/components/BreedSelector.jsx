import React from "react";

// takes in the props from the child component passing back and forth
export function BreedSelector({breeds, selectedBreed, onSelect}){
    
    return (
    <div className="flex gap-3 mb-8">

      {/* loops through the breeds rendering them */}
      {/* when a breed is picked, the breed runs through the on select */}
      {/* the breed becomes the selected breed */}
      {breeds.map((breed) => (
        <button
          key={breed}
          onClick={() => onSelect(breed)}
          className={`px-4 py-2 rounded-lg text-white font-medium transition-all capitalize ${
            selectedBreed === breed
          ? "bg-blue-600 shadow-lg scale-105"
          : "bg-blue-400 hover:bg-blue-500"}`}
        >
          {breed}
        </button>
      ))}
    </div>
  );
}