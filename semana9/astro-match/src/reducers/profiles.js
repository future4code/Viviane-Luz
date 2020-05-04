const initialState = {
  allProfiles: null
}

const profiles = (state = initialState, action) => {
  switch (action.type){
     case "SET_PROFILE" : 
      return  {...state,allProfiles: action.payload.profile}

    default:
    return state;
  }

}

export default profiles
