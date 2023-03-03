interface Props {

    length: number,
    height: number,
    text: String
}

const Btn = function({text, length, height}: Props) {

    return (
        <button style={{width: length, height: height}}>{text}</button>
    )
}

export default Btn