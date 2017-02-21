var tokenS = localStorage.getItem('token');
var token = JSON.parse(tokenS);
var student = {};
var avatare = [];

function passwordÄndern() {
  $('#content').load('content.html #password-change-body');
}
function profilbildÄndern(){
  $('#content').load('content.html #profilepic-change-body');
}
function profilLöschen(){
  $('#content').load('content.html #delete-profile-body');
}

function getUserInfo(){
    //UserInfo in JSON Modell schreiben
    var getStudentInfo = {
        "async": false,
        "url": "http://46.101.214.215:1337/api/V1/student",
        "method": "GET",
        "headers": {
            "authorization":""}}

    var getAvatarInfo = {
        "async": false,
        "url": "http://46.101.214.215:1337/api/V1/avatar",
        "method": "GET",
        "headers": {
            "authorization":""}}

    getStudentInfo.headers.authorization = token.token;
    getAvatarInfo.headers.authorization = token.token;

    $.ajax(getStudentInfo).done(function (response) {
    student=response;
    });

    $.ajax(getAvatarInfo).done(function (response) {
    avatare=response;
    });
}


$(document).ready(function() {
  getUserInfo();
});
