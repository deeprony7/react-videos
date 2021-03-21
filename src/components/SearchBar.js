import React, { Component } from 'react'

export default class SearchBar extends Component {
    state= { term: '' }

    onInputChange(e) {
        this.setState({ term: e.target.value })
        console.log(this.state.term)
    }

    onFormSubmit = e => {
        e.preventDefault()
    }

    render() {
        

        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.onInputChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}
