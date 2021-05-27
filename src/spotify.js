// spotify login logic

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-b1476.web.app/";

const clientId = "bdd96d5d43284fbeacf17b9b84fb5930";

// spotify scopes
const scopes = [
    "user-read-currently-playing", 
    "user-read-recently-played", 
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// main url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// get the access token after login
// Example token received: http://localhost:3000/#access_token=BQC7BGmTPVHkBdDRCG80or2Fp8zu2V__DPBu4veAuqyLxFDLX6JDxpTAF9jtP73uAIjoYvGuz7ZAjhV0Z5LAohll0oYj-MxAjeap8SfAxmh56QA0hoMyQXc4V9LF6rMG24Yh4WB7lIYY-Z1vbflUdn2yzni1AdMqwPv0mIGdipvjldKavTWPxriZ&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]); 

        return initial;
    }, {});
};