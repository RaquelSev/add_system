import Banner from "./components/Banner"
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Name" placeholder="Type your name"/>
      <TextField label="Job" placeholder="Type your position"/>
      <TextField label="Image" placeholder="Type the image address"/>
    </div>
  );
}

export default App;
