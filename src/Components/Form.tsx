interface FormProps {
    type: "text" | "password" | "email" | "number" | "textbox",
    placeholder: string,
    disabled?: boolean,
    required?: boolean,
    name?: string,
    id?: string,
    className?: string
}

const Form: React.FC<FormProps> = ({ type, placeholder, disabled = false, required, name, id, className }) => {
    return (
        <input type={type} placeholder={placeholder} required={required} disabled={disabled} name={name} id={id} className={` border-4 border-x-0 border-t-0 transition-all delay-150 border-b-black ${className}`} />
    )
}

export default Form;