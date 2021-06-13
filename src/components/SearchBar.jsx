import React, { Component } from 'react'

export default class SearchBar extends Component {
    state= { term: '' }
    onInputChange(e) {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onTermSubmit(this.state.term)
    }

    render() {
        

        return (
            <div className="search-bar ui segment">
                <form data-testid="search-box-form" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label >Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            aria-label="search-box"
                            data-testid="search-box"
                            onChange={(e) => this.onInputChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}
