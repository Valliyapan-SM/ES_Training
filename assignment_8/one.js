const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function getToday(){
    return days[new Date().getDay()];
}

module.exports = getToday;