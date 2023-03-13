import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Team from "./components/Team";

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
        addWorker={worker => newWorker(worker)}
      />
      <Team name="Programação"/>
      <Team name="Frontend"/>
      <Team name="Data Science"/>
      <Team name="Devops"/>
      <Team name="UX e Design"/>
      <Team name="Mobile"/>
      <Team name="Inovação e Gestão"/>
    </div>
  );
}

export default App;
