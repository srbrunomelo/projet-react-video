import React, { useContext } from 'react';
import {videoStore} from '../../Services/data/video/videoContext';

import { MdControlPoint } from 'react-icons/md';

export default function Footer() {
    const [videoState, videoDispatch] = useContext(videoStore);  

    function openForm() {
        videoDispatch({
            type: 'toogle'
        }) 
    }
 

    return (
        <> 
            <button onClick={() => videoDispatch({type: 'toogle'})} className="btnAddVideo btn-success"> <MdControlPoint size={30} /> </button>
            <div className="container-fluid bg-primary text-white">
                <div className="row">
                    <div className="col-lg-12 text-center p-2">
                        Todos direitos reservados
                    </div>
                </div>
            </div>
        </>
    )
}