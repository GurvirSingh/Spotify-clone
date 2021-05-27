export const initialState = {
    user: null, 
    playlists: [], 
    playing: false,
    item: null, 
    token: null
    // token: 'BQBH0OW-rkowFJEPLNRvuFV3_nyqrQUGLLHCeISBkzSoHiN9ci9aM60JxxChVXzsBP0kuvrk7j3za4N69qla52igtysHUoI2AX3ec9ZU7DfTLOBElFaVD9xdY4dG7pW_EaG_Wkm1XLDvJYDrnSdB96tpoVZ55C9MIMf4XN_Uh8eHLZkmN_wXuR7U'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly
            }
        default:
            return state;

    }
};

export default reducer;