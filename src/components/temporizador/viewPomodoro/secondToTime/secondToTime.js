export const secondToTime = (time) => { 
    const minutes = Math.floor(time / 60)
    const minutesFixed = minutes.toFixed(0)
    var minutesFormat = minutesFixed


    if (minutesFixed.length == 1) {
        minutesFormat = "0" + minutesFixed
    }else {
        minutesFormat = minutesFixed
    }


    const seconds = time % 60
    var secondsFormat = ''

    if(seconds < 10) {
        secondsFormat = "0" + seconds
    }else {
        secondsFormat = seconds
    }
    

    return minutesFormat + ":" + secondsFormat
}
