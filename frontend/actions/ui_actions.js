export const OPEN_GET_STARTED = "OPEN_GET_STARTED";
export const CLOSE_GET_STARTED = "CLOSE_GET_STARTED";

export const openGetStarted = () => {
    return({
        type: OPEN_GET_STARTED,
    })
}

export const closeGetStarted = () => {
    return({
        type: CLOSE_GET_STARTED,
    })
}