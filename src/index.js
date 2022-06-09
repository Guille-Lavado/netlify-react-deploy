import React from 'react'
import ReactDOM from 'react-dom'
import Hour from './components/hour'
import _Date from './components/date'
import InputLanguage from './components/language'
import BodyCalendar from './components/body'

const Calendar = (props) => {
    const language = window.localStorage.getItem('language') || 'en-US'

    return (
        <div>
            <_Date utc={ language } />
            <Hour />
            <InputLanguage language={ language } />
            <BodyCalendar language={ language } />
        </div>
    )
}

ReactDOM.render(<Calendar />, document.querySelector('#root'))
