import './App.css';
import './key';
import Axios from "axios";
import { useState } from "react";
import Grids from './grids/Grids';
function App() {
  
  const [query, setquery] = useState("");
  const [recipes, setrespies] = useState([]);
  const [healthLabel, sethealtLabel] = useState([]);

  const YOUR_APP_ID = "d5ce4d18";
  const YOUR_APP_KEY = "abbacce96c305975a6751e6befbb5fdd";
  
  var endPoint = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;
  
  const getRecipies = async () => {
    var result = await Axios.get(endPoint);
    setrespies(result.data.hits);
    sethealtLabel(result.data.hits[0].recipe.healthLabels);
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
          <div className="row justify-content-center">
            <div className="col-4">
              <input 
              className="form-control"
              type="text" 
              placeholder="Search" 
              value ={query} 
              onChange={(e) => setquery(e.target.value)}/>
            </div>
            <div className="col-3">
            <select className="form-control">
              {
                healthLabel.map((getLabel ,index) => 
                  <option value ={index}>{getLabel}</option>
                )
              }  
            </select>
            </div>
            <div className="col-2">
              <input type="submit" value ="Search"  className="btn btn-primary mb-2"/>
            </div>
          </div>
        </form>
        <div className="row pt-4">
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
