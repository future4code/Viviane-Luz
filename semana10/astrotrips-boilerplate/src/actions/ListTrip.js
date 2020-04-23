import axios from 'axios'



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
    const config = {
        headers: {
            'auth': window.localStorage.getItem("token")
        }
    }
    try {
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/viviane-hamilton/trips`, formData, config)
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