import sendRequest from "./send-request";

const BASE_URL = '/api/creator-videos'

export function getNoEditVideos() {
    return sendRequest(`${BASE_URL}/videos`)
}

export function getMyVideos(){
    return sendRequest(`${BASE_URL}/my-videos`)
}

export function getEditingVideos() {
    return sendRequest(`${BASE_URL}/videos/in-progress`)
}


export function creatorPostVideo(video) {
    return sendRequest(`${BASE_URL}/videos/creators/new`, 'POST', video)
}

