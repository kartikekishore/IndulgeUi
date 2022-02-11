import React, { useEffect} from "react";

const Home =() => {
useEffect(() => {
      document.title = "CDC IIT(ISM) | Home";
    }, []);
    return (
      <div className="Home">
        Home
      </div>
    );
  }

export default Home;