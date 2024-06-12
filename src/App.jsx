import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFooddata] = useState([]);
  const [foodIDs, setFoodId] = useState("656329");
  // console.log(process.env);
  const apis = console.log(import.meta.env.VITE_API_KEY);

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFooddata={setFooddata} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails apis foodIDs={foodIDs} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

//
