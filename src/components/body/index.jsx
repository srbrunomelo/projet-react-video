import React, { useContext } from 'react';

import Player from '../player';
import Video from '../video'; 
import AddVideo from '../addVideo';

import {videoStore} from '../../Services/data/video/videoContext'

export default function Body(props) {  
    const [videoState, videoDispatch] = useContext(videoStore); 
    const video = videoState.selectedVideo; 

    function onClick(video) {
        videoDispatch({
            type: 'select',
            value: video
        })
    }

    return (
        <>
            {videoState.toogleForm ?  <AddVideo /> : ''  }
            
            <Player data={video} />
            <div className="container-fluid mt-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"> 
                        <h3>Videos Cadastrados  {videoState.count}</h3>
                        </div>
                    </div>
                    <div className="row">
                        {videoState.videos.map((list, index) => <Video onClick={onClick}  key={list.id} index={index} video={list} />  )}
                    </div>
                </div>
            </div>
        </>
    )
}