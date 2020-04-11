import React, { useState, useContext } from 'react';
import {videoStore} from '../../Services/data/video/videoContext';

import { MdClose } from 'react-icons/md';

export default function AddVideo() { 
    const [title, setTitle] = useState('');
    const [thumb, setThumb] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [duration, setDuration] = useState('');
    const [type, setType] = useState('');

    const [videoState, videoDispatch] = useContext(videoStore);   

    function add(e){
        e.preventDefault(); 

        const data = { title, thumb, content, link, duration, type };  

        videoDispatch({
            type: 'add',
            value: data,
        }); 

        clenear();
        toogleForm();
    }

    function toogleForm() {
        videoDispatch({
            type: 'toogle'
        })
    }

    function clenear() {
        setTitle('');
        setThumb('');
        setContent('');
        setLink();
        setDuration('');
        setType('');
    }
    
    return ( 
        <>
            <button onClick={toogleForm} className="btn-close btn-danger"><MdClose /></button>
            <form onSubmit={add} className="formAddVideo"> 
                <div className="text-center"> 
                    <h4>Adicionar Video</h4>
                    <p>Insira os dados corretamente</p>
                </div>
                <hr />
                <div className="form-group">
                    <label for="exampleInputEmail1">Titulo</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" /> 
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">thumb</label>
                    <input value={thumb} onChange={(e) => setThumb(e.target.value)} type="text" className="form-control" /> 
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Descrição</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} type="text" className="form-control" /> 
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Video</label>
                    <input value={link} onChange={(e) => setLink(e.target.value)} type="text" className="form-control" /> 
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Duração</label>
                    <input value={duration} onChange={(e) => setDuration(e.target.value)} type="text" className="form-control" /> 
                </div> 
                <div className="form-group">
                    <label for="exampleInputEmail1">Tipo</label>
                    <input value={type} type="text" onChange={(e) => setType(e.target.value)} className="form-control" /> 
                </div> 
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form> 
        </>
    )
}