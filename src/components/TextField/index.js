import './TextField.css'

const TextField = (props) => {

    const placeholderModif = `${props.placeholder}...`;
    
    return (
      <div className="text-field">
        <label>
            { props.label }
          </label>
        <input placeholder={placeholderModif}/>
      </div>
    )
}

export default TextField;