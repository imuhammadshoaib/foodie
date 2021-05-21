import './App.css';
import './key';
import Axios from "axios";
import { useState } from "react";
import Grids from './grids/Grids';
function App() {
  
  const [query, setquery] = useState("");
  const [recipes, setrespies] = useState([]);
  const [healtLabel, sethealtLabel] = useState("alcohol-free");

  const YOUR_APP_ID = "d5ce4d18";
  const YOUR_APP_KEY = "abbacce96c305975a6751e6befbb5fdd";
  
  var endPoint = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=${healtLabel}`;
  
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
        <h1 className="text-center p-5" >Foodie App 🍔</h1>

        <form onSubmit={submit}>
          <div class="row justify-content-center">
            <div class="col-4">
              <input 
              class="form-control"
              type="text" 
              placeholder="Search" 
              value ={query} 
              onChange={(e) => setquery(e.target.value)}/>
            </div>
            <div class="col-3">
            <select class="form-control">
              <option onClick={() => sethealtLabel("alcohol-free") }>Alcohol Free</option>
            </select>
            </div>
            <div class="col-2">
              <input type="submit" value ="Search"  class="btn btn-primary mb-2"/>
            </div>
          </div>
        </form>
        <div class="row pt-4">
          {recipes.map(
            (recipe) => {
            return <Grids recipe={recipe} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
