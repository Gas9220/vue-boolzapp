
const date = '20/03/2020 16:30:00'

function getMessageTime(date) {
    var DateTime = luxon.DateTime;

    const formattedDate = DateTime.fromFormat(date, 'dd/mm/yyyy hh:mm:ss')
    
    const hours = formattedDate.hour
    const minutes = formattedDate.minute

    return `${hours}:${minutes}`
}

console.log("Test",getMessageTime(date))