import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [imageURL, setimageURL] = useState(null);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors"})
      .then((response) => response.json())
      .then((response) => setimageURL(response[0].url))
      .catch((error) =>console.error(error));

  }, []);
  return (
    imageURL && (
      <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  )
}

export default App


