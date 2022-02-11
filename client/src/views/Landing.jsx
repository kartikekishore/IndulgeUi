import React, { useEffect} from "react";

const Landing =() => {

    useEffect(() => {
      document.title = "Welcome to CDC IIT(ISM)";
    }, []);
    return (
      <div className="Landing">
        Landing
      </div>
    );
  }

export default Landing;