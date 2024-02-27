import axios from 'axios'

export async function getPxls(gameId) {
    const { data } = await axios.get(`/api/pxls/${gameId}`)
    return data
}

export async function postPxl(pxl) {
    const { data } = await axios.post('/api/pxls', pxl)
    return data
}
export async function updatePxl(pxl, id) {
    const { data } = await axios.put(`/api/pxls/${id}`, pxl)
    return data
}

export async function deletePxl(id) {
    const { data } = await axios.delete(`/api/pxls/${id}`)
    return data
}