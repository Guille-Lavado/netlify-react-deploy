import React from 'react'

class _Date extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date(),
            date: '',
        }
    }

    componentDidMount(){
        this.setState({ date: this.date() })
    }

    date(){
        return {
            dd: new Intl.DateTimeFormat(this.props.utc, { day: 'numeric'}).format(this.state.time),
            mm: new Intl.DateTimeFormat(this.props.utc, { month: 'long'}).format(this.state.time),
            yy: new Intl.DateTimeFormat(this.props.utc, { year: 'numeric'}).format(this.state.time),
        }
    }

    render(){
        return <h1>{this.state.date.yy}/{this.state.date.mm}/{this.state.date.dd}</h1>
    }
}

export default _Date
