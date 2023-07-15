import Todos from "./components/Todos";
import './App.css'

const App = () => {
  return (
    <div>
      <h2>Redux Tutorial</h2>
      <Todos></Todos>
    </div>
  );
};

export default App;

// step1: install packages
//step2: constants defines
// step3: async action creator
// step4: reducer
//step5: create store
//step6: provide store
//step7: use store
//step8: adding css