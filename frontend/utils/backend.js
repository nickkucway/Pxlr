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

 async function getResults(query) {
    const games = await axios.get(`https://www.giantbomb.com/api/games/?api_key=${import.meta.env.VITE_API_KEY}&format=json&filter=name:${query}&limit=50`)
    return games.data
}

async function getDetails(gameId) {
    const game = await axios.get(`https://www.giantbomb.com/api/game/${gameId}/?api_key=${import.meta.env.VITE_API_KEY}&format=json`)
    return game.data
}