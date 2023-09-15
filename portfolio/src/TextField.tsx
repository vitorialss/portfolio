

type TextFieldTypeProps = {
    label: string;
    type: string;
    value: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;


   }

const TextField = (props:TextFieldTypeProps) => {

    return(
        <div className="formlabel">
            <label>
                {props.label}
            </label>
            <input type={props.type} value={props.value} onChange={(e) => props.setStatus(e.target.value)}/>
        </div>
    )
}

export default TextField;