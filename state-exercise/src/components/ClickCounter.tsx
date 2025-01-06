type ClickProps = {
    addClick: () => void
}

const ClickCounter = ({addClick}: ClickProps) => {
    return(
        <div>
            <button onClick={addClick}>Click me</button>
        </div>
    )
}

export default ClickCounter