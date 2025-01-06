type LightProps = {
    toggleLights: () => void
}

const LightToggle = ({toggleLights}: LightProps) => {

    return (
        <div>
            <button onClick={toggleLights}>Switch light</button>
        </div>
    )
}

export default LightToggle