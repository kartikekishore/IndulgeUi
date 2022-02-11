import React, { useEffect} from "react";
import HomeContainer from "../component/homeCont";
const Home =() => {
useEffect(() => {
      document.title = "CDC IIT(ISM) | Home";
    }, []);
    return (
      <div className="Home">
      <HomeContainer/>
      </div>
    );
  }

export default Home;