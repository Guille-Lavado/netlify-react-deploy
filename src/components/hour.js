import React from 'react'

class Hour extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date(),
            timerID: '',
        }
    }

    componentDidMount(){
        this.setState({ timerID: setInterval(() => this.tick(), 1000) })
    }

    componentWillUnmount(){
        clearInterval(this.state.timerID)
    }

    tick(){
        this.setState({ time: new Date() })
    }

    render(){
        return <h2>{this.state.time.toLocaleTimeString()}</h2>
    }
}

export default  Hour
