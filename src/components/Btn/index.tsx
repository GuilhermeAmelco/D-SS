interface Props {    
    text: String
}

const Btn = function({text}: Props) {

    return (
        <button >{text}</button>
    )
}

export default Btn