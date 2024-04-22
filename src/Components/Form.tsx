interface FormProps {
    type: "text" | "password" | "email" | "number" | "textbox",
    placeholder: string,
    value: string,
    disabled?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    name?: string,
    id?: string,
    className?: string
}

const Form: React.FC<FormProps> = ({ type, placeholder, value, disabled, onChange, required, name, id, className }) => {
    return (
        <input type={type} placeholder={placeholder} value={value} disabled={disabled} onChange={onChange} required={required} name={name} id={id} className={` border-4 border-x-0 border-t-0 transition-all delay-150 border-b-black ${className}`} />
    )
}

export default Form;