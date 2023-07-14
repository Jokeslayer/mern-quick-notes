import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function create(note) {
    const newNote = await sendRequest(BASE_URL, 'POST', note);
    return newNote;
}

export async function deleteNote(note) {
    const trash = await sendRequest(`${BASE_URL}/${note._id}`, 'DELETE', note)
    console.log(trash, 'trash collector')
    return trash;
}
