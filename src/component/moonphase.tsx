const Moonphase = (props: { moonphase: number | undefined }) => {
    function getMoonPhase() {
        if (props.moonphase !== undefined) {
            if (props.moonphase === 0) {
                return "🌑";
            } else if (props.moonphase <= 0.25 && props.moonphase > 0) {
                return "🌒";
            } else if (props.moonphase < 0.5 && props.moonphase > 0.25) {
                return "🌔";
            } else if (props.moonphase === 0.5) {
                return "🌕";
            } else if (props.moonphase < 0.75 && props.moonphase > 0.5) {
                return "🌖";
            } else if (props.moonphase < 1 && props.moonphase > 0.75) {
                return "🌘";
            } else if (props.moonphase === 1)
                return "🌕";
            else {
                return "an unexpected error occurred.";
            }
        } else {
            return "";
        }
    }

    return (
        <>
            <h1 className={"text-8xl"}>{getMoonPhase()}</h1>
        </>
    );
}


export default Moonphase;