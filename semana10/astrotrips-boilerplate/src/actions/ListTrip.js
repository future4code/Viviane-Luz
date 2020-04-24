import axios from 'axios'

/*constante que recebe todas as viagens de forma assincrona, precisa exportar para pegar todas as viagens que estão na api, pega todas as viagens e traz. */
/*faz a troca de página através do dispatch*/

export const getAllTrips = () => async (dispatch) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/viviane-hamilton/trips')
    dispatch(setAllTrips(response.data.trips))
} 
export const setAllTrips = (allTrips) => ({
    type: 'LIST_TRIPS_PAGE',
    payload: {
        allTrips,
    }
})
export const createTripPage = (form) => async (dispatch) => {
    const formData = {
        name: form.name,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays,
        planet: form.planet,
    }
    const config = { /*é a constante que recebe e usa depois que está na api*/

        headers: {
            'auth': window.localStorage.getItem("token") /*guarda no navegador, a autenticação*/

        }
    }
    try { /*se der certo, entra no config para conferir o token e se os dados estiverem certo cria a viagem */

        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/viviane-hamilton/trips`, form, config)
        window.alert("Sua viagem foi cadastrada com sucesso!")
    } catch(error) {
        window.alert("Erro ao cadastrar viagem.")
    }
}
export const setSelectedTripId = (selectedTripId) => ({
    type: 'SET_SELECTED_TRIP',
    payload: {
        selectedTripId,
    }
})
export const getTripDetailsPage = (tripId) => async (dispatch) => {
    const config = {
        headers:{
            'auth': window.localStorage.getItem("token")
        }
    }
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/marioluz/trip/${tripId}?=`, config)
    dispatch(setTripDetailsPage(response.data.trip))
}
export const setTripDetailsPage = (tripDetailsPage) => ({
    type: 'SET_TRIP_DETAILS',
    payload: {
        tripDetailsPage,
    }
})