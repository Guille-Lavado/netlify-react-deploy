import React from 'react'

class InputLanguage extends React.Component {
    constructor(props){
        super(props)
        this.state = { language: props.language }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({ language: e.target.value })
    }

    handleSubmit(e){
        window.localStorage.setItem('language', this.state.language)
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <select 
                    value={ this.state.language } 
                    onChange={ this.handleChange }
                >
                    <option value='en-US'>English</option>
                    <option value='es-ES'>Spanish</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default InputLanguage
