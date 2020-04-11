import { loadLists } from '../../api';

const videos = loadLists();

function random() {
    return videos[Math.floor(Math.random() * loadLists().length)];
}
 
export const videoInitialState = { 
    toogleForm: false,
    selectedVideo: random(),
    videos: videos,
}

export function videoReducer(state, action) {
    switch(action.type) {   
        case 'toogle':  
            return {...state, toogleForm: !state.toogleForm};  
        case 'add':
            const newList = [...state.videos, action.value];
            return {...state, videos: newList};
        case 'select':    
            return {...state, selectedVideo: action.value}
        default: return state;    
    }
}