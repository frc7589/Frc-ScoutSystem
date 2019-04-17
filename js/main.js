var authBtn, logoutBtn
function eleget(){
    authBtn = document.getElementById('auth-btn')
    logoutBtn = document.getElementById('logout-btn')
}
$(document).ready(function(){
    eleget()
    handleClientLoad()
})

var SpreadSheetID = "1mZoZ8FZ9aiTTYrtb7UGbWUmhcIhNBV9Gso8tS6rCROs"

function authBtnHandler(){
    gapi.auth2.getAuthInstance().signIn()
}
function logoutBtnHandler(){
    gapi.auth2.getAuthInstance().signOut()
}
