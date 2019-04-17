// Client ID and API key from the Developer Console
var CLIENT_ID = '192441596676-vor99hghennspn7840do2pu1jojm9i04.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBgA9hp_ksdEP9zxlbWMg3giAaIF0VaMNA';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/drive.file";

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
        GAPIRunEvent()
    } else {
        authBtn.style.display = 'inline';
        logoutBtn.style.display = 'none';
        GAPIFailRun()
    }
}

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function (error) {
        alert(JSON.stringify(error, null, 2));
    });
}

function isSignIn(){
    return gapi.auth2.getAuthInstance().isSignedIn
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

var EventList = []
function GAPIEventListener(n) {
    EventList.push(n)
}

function GAPIRunEvent(){
    for(i=0;i<EventList.length;i++){
        if(isFunction(EventList[i]))
            EventList[i]()
    }
}

var FailEventList = []
function GAPIFailListener(n) {
    FailEventList.push(n)
}

function GAPIFailRun(){
    for(i=0;i<EventList.length;i++){
        if(isFunction(FailEventList[i]))
            FailEventList[i]()
    }
}