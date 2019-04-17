var authBtn, logoutBtn
function eleget(){
    authBtn = document.getElementById('auth-btn')
    logoutBtn = document.getElementById('logout-btn')
}
$(document).ready(function(){
    eleget()
    handleClientLoad()
})

var SpreadSheetID = "1v1pIhviz6s-MLW5zD6ay6PcOBNF9pfg404XmXmXUZ5g"

function authBtnHandler(){
    gapi.auth2.getAuthInstance().signIn()
}
function logoutBtnHandler(){
    gapi.auth2.getAuthInstance().signOut()
}
