import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Nav";
import Last from "./components/first";
import MyComponent from "./components/old";
import Parts from "./components/part";
import Descript from "./components/descript";
import Descript2 from "./components/descript2";
import Descript3 from "./components/descript3";
import People from "./components/people";
import End from "./components/end";



function App() {
  return(
    <div>
      <Navbar />
      <MyComponent/>
      <Parts />
      <Descript />
      <Descript2 />
      <Descript3 />
      <People />
      <Last />
      <End/>
      </div>
  )
}

export default App;
  