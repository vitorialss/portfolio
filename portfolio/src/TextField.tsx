

type TextFieldTypeProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const TextField = (props:TextFieldTypeProps) => {

    return(
        <div className="formlabel">
            <label>
                {props.label}
            </label>
            <input type={props.type} name={props.name} value={props.value} onChange={(e) => props.setStatus(e.target.value)}/>
        </div>
    )
}

export default TextField;