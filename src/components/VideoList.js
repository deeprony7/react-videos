import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({ videos }) {
    const renderedList = videos.map(video => {
        return <VideoItem video={video}/>
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}
