import * as React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  //return <Homepage></Homepage>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="hats" element={<HatsPage></HatsPage>} />
      </Routes>
    </div>
    // <Routes>
    //   <Route>
    //     <Route path="/" element={<Homepage />} />
    //     {/* <Route index path="hats" children={HatsPage} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;
