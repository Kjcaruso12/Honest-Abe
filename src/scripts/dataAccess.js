const state = {
    politicians: [],

}

const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(response => response.json())
        .then(
            (politician) => {
                state.politicians = politician
            }
        )
}

export const getPoliticians = () => {
    return state.politicians.map(politician => ({...politician}))
}