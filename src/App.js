import './App.css';
import './key';
import Axios from "axios";
import { useState } from "react";
import Grids from './grids/Grids';
function App() {
  const [query, setquery] = useState("");
  const [recipes, setrespies] = useState([]);


  
  var endPoint = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  
  const getRecipies = async () => {
    var result = await Axios.get(endPoint);
    setrespies(result.data.hits)
    console.log(result.data);
  }


  const submit = (e) => {
    e.preventDefault();
    getRecipies();

  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center p-5" >Foodie</h1>
        
        <form onSubmit={submit}>
          <input 
          type="text" 
          placeholder="Enter Ingredient" 
          value ={query} 
          onChange={(e) => setquery(e.target.value)}/>
          <input type="submit" value ="Search" />
        </form>
       <div>
         {recipes.map(
           (recipe) => {
              return <Grids recipe={recipe} />;
              }
            )
          }</div>
      </div>
    </div>
  );
}

export default App;
