type TextFieldTypeProps = {
    label: string;
    type: string;
   }

const TextField = (props:TextFieldTypeProps) => {

    return(
        <div>
            <label>
                {props.label}
            </label>
            <input type={props.type}/>
        </div>
    )
}

export default TextField;