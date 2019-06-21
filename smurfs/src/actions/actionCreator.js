import axios from 'axios';
import { FETCHING_SMURFS, GET_SMURFS_SUCESS, GET_SMURFS_FAILURE, ADDING_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE, UPDATING_SMURFS, UPDATE_SMURFS_SUCCESS, UPDATE_SMURFS_FAILURE, DELETING_SMURFS, DELETE_SMURFS_SUCCESS, DELETE_SMURFS_FAILURE } from '.';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS, payload: true })
    axios.get('http://localhost:3333/smurfs')
    .then( res => {
        
        dispatch({type: GET_SMURFS_SUCESS, payload: res.data})
    })
    .catch(error => {
        
        dispatch({type: GET_SMURFS_FAILURE, payload: error })
    })
    .finally(() => {
        dispatch({ type: FETCHING_SMURFS, payload: false})
    })
}

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADDING_SMURFS, payload: true })
    axios.post('http://localhost:3333/smurfs', smurf) 
    .then(res => {
        dispatch({type: ADD_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: ADD_SMURFS_FAILURE, payload: error})
    })
    .finally(() => {
        dispatch({type: ADDING_SMURFS, payload: false })
    })
}

export const updateSmurf = (id, smurf) => dispatch => {
    dispatch({ type: UPDATING_SMURFS, payload: true })
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf) 
    .then(res => {
        dispatch({type: UPDATE_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: UPDATE_SMURFS_FAILURE, payload: error})
    })
    .finally(() => {
        dispatch({type: UPDATING_SMURFS, payload: false })
    })
}

export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETING_SMURFS, payload: true })
    axios.delete(`http://localhost:3333/smurfs/${id}`) 
    .then(res => {
        console.log('hello')
        dispatch({type: DELETE_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({type: DELETE_SMURFS_FAILURE, payload: error})
    })
    .finally(() => {
        dispatch({type: DELETING_SMURFS, payload: false })
    })
}