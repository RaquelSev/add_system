import './TextField.css'

const TextField = (props) => {

    const placeholderModif = `${props.placeholder}...`;
    let typeValue = '';

    const whenTyped = (event) => {
      typeValue = event.target.value;
      console.log(typeValue)
    }
    
    return (
      <div className="text-field">
        <label>
            {props.label}
          </label>
        <input
          value={typeValue} 
          onChange={whenTyped}
          required={props.mandatory} 
          placeholder={placeholderModif}/>
      </div>
    )
}

export default TextField;