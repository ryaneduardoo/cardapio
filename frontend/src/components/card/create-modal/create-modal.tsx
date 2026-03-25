import { useState } from "react";
import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void // Tente esta sintaxe alternativa, ela é mais estável
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input 
                value={value} 
                onChange={event => updateValue(event.target.value)}
            />
        </>
    )
}


export function CreateModal(){
   const [title, setTitle] = useState("");
   const [price, setPrice] = useState(0);
   const [image, setImage] = useState("")

   
    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no Cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue{setTitle}/>
                    <Input label="price" value={price} updateValue{setPrice}/>
                    <Input label="image" value={image} updateValue{setImage}/>
                </form>
            </div>
        </div>
    )
}