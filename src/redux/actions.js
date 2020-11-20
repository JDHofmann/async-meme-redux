export const fetchMemes = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_MEMES' })
        fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'ADD_MEMES',
            memes: data.data.memes
        }))
    }
}

export const addMemes = () => {
    return {
        type: 'ADD_MEMES'
    }
}