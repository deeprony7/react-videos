import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

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
        this.setState({ selectedvideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedvideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}/>
            </div>
        )
    }
}