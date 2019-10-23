import axios from 'axios'

const { REACT_APP_API } = process.env

export function setLoading(status) {
    return {
      type: 'SET_LOADING',
      status
    }
}

export function setLang(lang) {
  return {
    type: 'SET_LANG',
    payload: {
      lang
    }
  }
}

export function fetchProds(lang,cat) {
  alert(REACT_APP_API);
  const apiUrl = REACT_APP_API+'product/read.php?';
  return (dispatch, getState) => {
    axios.get(apiUrl).then((resp) => {
        dispatch({
            type: 'SET_PROJECT',
            payload: {
              list: resp.data.records,
              error: resp.data.error,
              loading: false
            }
        });
    }, error => {
      dispatch({
          type: 'SET_PROJECT',
          payload: {
              list: [],
              error: 'error',
              loading: false
          }
      });
    })
  };
}
