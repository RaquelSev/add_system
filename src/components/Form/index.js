import './Form.css';
import DropList from '../DropList';
import TextField from '../TextField';
import Button from '../Button';

const Form = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ] 

    const saving = (event) => {
        event.preventDefault();
        console.log("Submited")
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropList  mandatory={true} label="Time "itens={times}></DropList>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form