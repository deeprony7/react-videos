import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

export default class App extends Component {
    state = { videos: [],
                selectedvideo: null }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        
        this.setState({ videos: response.data.items })
    }

    onVideoSelect = ( video ) => {
        console.log("from the app!!", video)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoList
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}/>
            </div>
        )
    }
}