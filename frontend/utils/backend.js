import axios from 'axios'

export async function getPxls(gameId) {
    const { data } = await axios.get(`/api/pxls/${gameId}`)
    return data
}

export async function postPxl(pxl) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/pxls', pxl, authHeader)
    return data
}
export async function updatePxl(pxl, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/pxls/${id}`, pxl, authHeader)
    return data
}

export async function deletePxl(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/pxls/${id}`, authHeader)
    return data
}

// singin / sign out routes 

export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}

//api calls

export async function getResults(query) {
    const data = await axios.get(`/api/search/${query}`)
    return data
}

export async function getDetails(id) {
    const data = await axios.get(`/api/${id}`)
    return data
}