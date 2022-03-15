import React from 'react';
import User from "./components/User/User";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="user-list">
          <User
              name={"Aidar"}
              lastName={"Zhumankulov"}
              old={20}
              email={"aidar@gmail.com"}
              phoneNumber={87771231212}
              gender={"male"}
              birthDate={"13 of March"}
              height={180}
              weight={80}
          />
      </div>
    </div>
  );
}

export default App;
