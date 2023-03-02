interface Props {

    length: number,
    height: number,
    margin?: number,
    text: String
}

const Btn = function({text, length, height, margin}: Props) {

    return (
        <button style={{width: length, height: height, margin: margin}}>{text}</button>
    )
}

export default Btn