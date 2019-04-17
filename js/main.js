var authBtn, logoutBtn
function eleget(){
    authBtn = document.getElementById('auth-btn')
    logoutBtn = document.getElementById('logout-btn')
}
$(document).ready(function(){
    eleget()
    handleClientLoad()
})

var SpreadSheetID = "1fig1Y_Zzvr7VO-Fq-XWJ62lkdDoaAWp5f3H44jPS97s"

function authBtnHandler(){
    gapi.auth2.getAuthInstance().signIn()
}
function logoutBtnHandler(){
    gapi.auth2.getAuthInstance().signOut()
}