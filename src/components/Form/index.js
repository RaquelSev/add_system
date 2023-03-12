import './Form.css';
import TextField from '../TextField';


const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Fill the persons data</h2>
            <TextField label="Name" placeholder="Type your name"/>
            <TextField label="Job" placeholder="Type your position"/>
            <TextField label="Image" placeholder="Type the image address"/>
            </form>
        </section>
    )
}

export default Form;