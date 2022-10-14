import sendRequest from "./send-request";

const BASE_URL = '/api/creator-videos'

export function getNoEditVideos() {
    return sendRequest(`${BASE_URL}/videos`)
}

export function getMyVideos(){
    return sendRequest(`${BASE_URL}/my-videos`)
}

export function getEditorGigs() {
    console.log('going through the API')
    return sendRequest(`${BASE_URL}/videos/in-progress`)
}


export function creatorPostVideo(video) {
    return sendRequest(`${BASE_URL}/videos/creators/new`, 'POST', video)
}

export function assignEditor(video, user) {
    return sendRequest(`${BASE_URL}/videos/editors/assign/${user}`, 'POST', video)
}

export function deleteVideo(video) {
    return sendRequest(`${BASE_URL}/videos/delete`, 'POST', video)
}

export function getMyComments(video) {
    return sendRequest(`${BASE_URL}/portal/comments`)
}

export function addComment(videoId, comment){
    return sendRequest(`${BASE_URL}/portal/new-comment/${videoId}`, 'POST', comment)
}