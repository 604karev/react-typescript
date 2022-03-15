import React, { HTMLProps, useState, ChangeEventHandler, MouseEventHandler } from "react";


export const CustomInput = (props: HTMLProps<HTMLInputElement>) => {


    const [inputState, setInputState] = useState(props.defaultValue)

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(inputState)
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
        setInputState(value)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button onClick={handleClick} className="input-group-text">add</button>
            </div>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Username"
                {...props}
            />
        </div>
    )
} 