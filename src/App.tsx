import { useEffect, useState } from 'react'
import './App.css'
/* const useImageURL = () =>{
  const [imageURL, setimageURL] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors"})
      .then((response) => {
        if(response.status >= 400){
          throw new Error("Error!!")
        }
        return response.json()
      })
      .then((response) => setimageURL(response[0].url))
      .catch((error) =>setError(error))
      .finally(()=> setLoading(false));
  }, []);

  return {imageURL,error,loading}

};

function App() {
 const {imageURL,error,loading} = useImageURL();
  
  if (loading)return <p>Page loading, please wait!!!</p>
  if (error)return <p> A network error was encountered!!!</p>

  return (
    imageURL && (
      <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  )
}
 */
const App =() => {
  const [heading,setHeading] = useState("Default state");
  const clickHandler =()=>{
    setHeading("New Text !!")
  };
  return(
    <>
    <button type="button" onClick={clickHandler}>Click me!!
     </button>
     <h1>{heading}</h1>
    </>
  )

}
export default App


