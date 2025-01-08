import { RecoilRoot } from "recoil"
import Home from "./pages/home";
import Selection from "./pages/selection";
import WorkoutPlan from "./pages/workoutPlan";
// import WorkoutPlan from "./pages/final";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Selection />} />
          <Route path="/workoutPlan" element={<WorkoutPlan/>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
