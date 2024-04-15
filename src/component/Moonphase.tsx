const Moonphase = (props: { moonphase: number | undefined }) => {
    function getMoonPhase() {
        if (props.moonphase !== undefined) {
            if (props.moonphase === 0) {
                return "🌑 Neu Mond";
            } else if (props.moonphase <= 0.24 && props.moonphase > 0) {
                return "🌒 Zunehmender Sichelmond";
            } else if (props.moonphase === 0.25) {
                return "🌓 Zunehmender Halbmond";
            } else if (props.moonphase < 0.5 && props.moonphase > 0.25) {
                return "🌔 Zunehmender Dreiviertelmond";
            } else if (props.moonphase === 0.5) {
                return "🌕 Vollmond";
            } else if (props.moonphase < 0.74 && props.moonphase > 0.5) {
                return "🌖 Abnehmender Dreiviertelmond";
            } else if (props.moonphase === 0.75) {
                return "🌗 Abnehmender Halbmond";
            } else if (props.moonphase < 1 && props.moonphase > 0.75) {
                return "🌘 Abnehmender Sichelmond";
            } else if (props.moonphase === 1)
                return "🌑 Neu Mond";
            else {
                return "an unexpected error occurred.";
            }
        } else {
            return "";
        }
    }

    return (
        <>
            <p className={"text-8xl"}>{getMoonPhase()}</p>
        </>
    );
}


export default Moonphase;