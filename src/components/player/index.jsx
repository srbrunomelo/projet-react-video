import React, { useRef, useEffect, useState } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md'
import YouTube from 'react-youtube';

export default function Player(props) {
    const video = props.data || {};  
    const videoRef = useRef();
    const [isPlaying, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressTimer = useRef();

    useEffect(() => {

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };

        function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        }

        const videoElement = videoRef.current;
        videoElement.addEventListener('play', play);
        videoElement.addEventListener('pause', pause);
        videoElement.addEventListener('seeked', onProgress);
         
        setTime(0); // isso vai fazer o novo video iniciar do zero 
        pause();// isso vai fazer o novo video iniciar pausado

        return () => {
            videoElement.removeEventListener('play', play);
            videoElement.removeEventListener('pause', pause);
            videoElement.removeEventListener('seeked', onProgress);
        }
        
    }, [video])

    useEffect(() => {
        clearInterval(progressTimer.current);
        if (isPlaying) {
            progressTimer.current = setInterval(onProgress, 1000)
        }
         
    }, [isPlaying])

    function play() { 
        videoRef.current.play();
        setPlay(true);
    }

    function pause() { 
        videoRef.current.pause();
        setPlay(false);
    }

    function onProgress() {
        setProgress(videoRef.current.currentTime);
    }

    function onChangeProgress(event) {
        setTime(event.target.value);
    }

    function setTime(time) {
        videoRef.current.currentTime = time;
        onProgress();
    }

    return (
        <div className="container-fluid p-5 bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8"> 
                        <video width="100%" src={video.link} ref={videoRef} />
                        {video.link && (
                            <>
                                <div className="control">
                                    <button onClick={isPlaying ? pause : play}>{isPlaying ? <MdPause /> : <MdPlayArrow /> }</button>   
                                    <span>{Math.round(progress)} / {video.duration}</span>
                                    <input type="range" onChange={onChangeProgress} value={progress} min={0} max={video.duration} step={.1} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="col-lg-4"> 
                        <h1>{video.title}</h1>
                        <p>{video.content}</p>
                        <strong>{video.type}</strong>
                        <p>Duração: {video.duration}</p>
                    </div>
                </div> 
            </div>
        </div>      
    )
}