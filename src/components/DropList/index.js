import './DropList.css';

const DropList = (props) => {

    return (
        <div className='drop-list'>
            <label>
                {props.label}
            </label>
            <select required={props.mandatory}>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default DropList;