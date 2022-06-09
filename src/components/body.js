const year = new Intl.DateTimeFormat('en-US', { year: 'numeric'}).format(new Date())
const month = new Intl.DateTimeFormat('en-US', { month: 'numeric'}).format(new Date())
const day = new Intl.DateTimeFormat('en-US', { day: 'numeric'}).format(new Date())
const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short'})
    .format(new Date(year, month-1, 1))

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const week = {
    'Mon': 0,
    'Tue': 1,
    'Wed': 2,
    'Thu': 3,
    'Fri': 4,
    'Sat': 5,
    'Sun': 6
}

function THead(props){
    return (
        <tr>
            <th>L</th>
            <th>M</th>
            <th>X</th>
            <th>J</th>
            <th>V</th>
            <th>S</th>
            <th>D</th>
        </tr>
    )
}

function TBody(props){
    let row = []
    for(let i = 0; i < week[weekday]; i++){
        row.push(<td></td>)
    }
    let tbody = []

    for(let col = 1; col <= months[month-1]; col++){
        if(day == col){
            row.push(<td style={{color: 'blue'}}>{col}</td>)
        }else{
            row.push(<td>{col}</td>)
        }

        if(row.length === 7 || col === months[month-1]){
            tbody.push(<tr>{row}</tr>)
            row = []
        }
    }

    return tbody
}

function BodyCalendar(props){
    return (
        <table>
            <THead />
            <TBody />
        </table>
    )
}

export default BodyCalendar
