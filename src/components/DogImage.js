import React, {useEffect, useState} from "react";

const apiUrl = "https://dog.ceo/api/breeds/image/random"

function DogImage(){

    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(json => setDogImage(json.message))
    }, [])

    if(!dogImage){
        return <p>"Loading..."</p>
    }

    return(
        <div>
            <img className="img" src={dogImage} alt="A Random Dog"/>
        </div>
    )
}

export default DogImage;