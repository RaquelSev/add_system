import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";

function App() {

  const [workers, setWorkers] = useState([]);
  const newWorker = (worker) => {
    console.log(workers, worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        addWorker={worker => newWorker(worker)}/>
    </div>
  );
}

export default App;
