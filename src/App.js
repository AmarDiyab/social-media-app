import "./App.css"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="Blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="Blur" style={{ top: '36%', left: '-8rem'}}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
