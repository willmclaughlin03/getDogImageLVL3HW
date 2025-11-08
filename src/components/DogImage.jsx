import React from "react";

export function DogImage({imageURL, breed}){

  // const capitalizedBreed = breed.charAt(0).toUpperCase() + breed.slice(1);
    return (
      <div className="flex flex-col items-center">
        <div className="w-full h-80 bg-gray-50 flex items-center justify-center overflow-hidden rounded-lg">
        <img 
          src={imageURL} 
          alt={breed} 
          className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500 " 
        />
        </div>
        <p className="text-center text-black font-semibold p-2 capitalize">
          {breed}
        </p>
      </div>
    );
}