import React from 'react';

export default function Video(props) { 
    const video = props.video || {};
    const onClick = props.onClick || {};
  
    return (
        <div className="col-lg-3 col-12" onClick={() => onClick(video)}>
            <div className="card">
                <img src={video.thumb} className="card-img-top" alt={video.title} />
                <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="card-text">{video.content}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{video.type}</li>
                    <li className="list-group-item">Duração: {video.duration}</li> 
                </ul>
                <div className="card-body">
                    <button onClick={() => onClick(video)} className="btn btn-sm btn-primary btn-block">Assistir</button>
                </div>
            </div>
        </div>   
    )
}