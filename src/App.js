import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

  const teams = [
    {
      name: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      firstColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      firstColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF',
    },

  ]

  const [workers, setWorkers] = useState([]);
  const newWorker = (worker) => {
    console.log(workers, worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)} 
        addWorker={worker => newWorker(worker)}
      />
      {teams.map(team => <Team key={team.name} 
        name={team.name} 
        firstColor={team.firstColor} 
        secondColor={team.secondColor}
        />)}
    </div>
  );
}

export default App;
