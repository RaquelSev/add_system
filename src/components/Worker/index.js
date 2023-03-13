import './Worker.css';

const Worker = ({ name, image, position }) => {
    return (
        <div className='worker'>
            <div className='header'>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'> 
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Worker;