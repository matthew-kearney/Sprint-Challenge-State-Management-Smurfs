import axios from 'axios';

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const ADDING_SMURF_START = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"
// export const fetchData = () => dispatch => {
//     dispatch({type: FETCHING_DATA});

//     axios
//     .get('http://localhost:3333/smurfs')
//     .then(response => dispatch({type: FETCHING_COMPLETE, payload: response.data}))
//     .catch(error => dispatch({FETCHING_FAIL, payload: error.response}))
// };
// export const fetchData = () => {
//     return dispatch => {
//     dispatch({type: 'FETCH_DATA'});

//     axios 
//         .get ('http://localhost:3333/smurfs')
//         .then(res => {
//             console.log('API_SUCCESS', res.data);
//             dispatch({type:'FETCH_COMPLETE', payload: res.data});
//         })
//         .catch(err => console.log(err.response));
// };

// }

export const fetchData = () => dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data);
        dispatch({ type: FETCHING_COMPLETE, payload: res.data })
      })
      .catch(err => dispatch({ type: FETCHING_FAIL, payload: err }));
  }; 

export const addSmurf = (smurf) => dispatch => {

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            console.log(response)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: response
            })
        })
        .catch(error => console.log(error))
} 