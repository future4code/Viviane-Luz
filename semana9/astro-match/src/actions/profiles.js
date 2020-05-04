import axios from 'axios'


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch" 

export const setProfile = (profile) => {
	return {
		type: 'SET_PROFILE',
		payload: {

			profile:profile
		}
	}
} 

// export const setMatchs = (profile) => {
// 	return {
// 		type: 'SET_MATCHS',
// 		payload: {
// 			match: match
// 		}
// 	}
// }


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}



  
export const getProfile = () => async (dispatch) => {
	const response = await axios.get(`${baseURL}/viviane/person`)
	console.log(response.data.profile)
	dispatch(setProfile(response.data.profile))

} 
export const chooseProfile = (id,choice) => async (dispatch) => {
	const body = {
		id: id,
		choice: choice
	}
	const response = await axios.post(`${baseURL}/viviane/choose-person`,  body)
	dispatch(getProfile())

} 
  