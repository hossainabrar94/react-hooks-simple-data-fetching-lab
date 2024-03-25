// create your App component here
import React, {useEffect, useState} from "react";
import DogImage from "./DogImage";

function App (){

    return(
        <div>
            <h1>🐶 Dog Image 🐶</h1>
            <DogImage />
        </div>
    )
}

export default App;