import { FETCHING_SMURFS, GET_SMURFS_SUCESS, GET_SMURFS_FAILURE, ADDING_SMURFS, ADD_SMURFS_FAILURE, UPDATING_SMURFS, ADD_SMURFS_SUCCESS, UPDATE_SMURFS_SUCCESS, UPDATE_SMURFS_FAILURE, DELETING_SMURFS, DELETE_SMURFS_SUCCESS, DELETE_SMURFS_FAILURE } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state, fetchingSmurfs: action.payload,
      }
    case GET_SMURFS_SUCESS:
      return {
        ...state, smurfs: action.payload
      }

    case GET_SMURFS_FAILURE:
      return {
        ...state, error: action.payload
      }

      case ADDING_SMURFS: 
      return {
        ...state, addingSmurf: action.payload
      }

      case ADD_SMURFS_SUCCESS: 
      return {
        ...state, smurf: action.payload
      }

      case ADD_SMURFS_FAILURE: 
      return {
        ...state, error: action.payload
      }

      case UPDATING_SMURFS: 
      return {
        ...state, updatingSmurf: action.payload
      }

      case UPDATE_SMURFS_SUCCESS: 
      return {
        ...state, smurf: action.payload
      }

      case UPDATE_SMURFS_FAILURE: 
      return {
        ...state, error: action.payload
      }

      case DELETING_SMURFS: 
      return {
        ...state, deletingSmurf: action.payload
      }

      case DELETE_SMURFS_SUCCESS: 
      return {
        ...state, smurf: action.payload
      }

      case DELETE_SMURFS_FAILURE: 
      return {
        ...state, error: action.payload
      }
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
