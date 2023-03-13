import './Form.css';
import DropList from '../DropList';
import TextField from '../TextField';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        props.addWorker({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true} 
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    changed={typed => setName(typed)}
                />
                <TextField 
                    mandatory={true} 
                    label="Position" 
                    placeholder="Type your position"
                    value={position}
                    changed={typed => setPosition(typed)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Type the image address"
                    value={image}
                    changed={typed => setImage(typed)} 
                    />
                <DropList  
                    mandatory={true} 
                    label="Team"
                    itens={props.teams} 
                    value={team}
                    changed={value => setTeam(value)}   
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form