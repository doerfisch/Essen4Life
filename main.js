var tokenS = localStorage.getItem('token');
var token = JSON.parse(tokenS);
var student = {};
var avatare = [];


function changePassword() {
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #password-change-body');
}
function changeAvatarPicture(){
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #profilepic-change-body');
  $(document).ready(function() {
    $(document).ready(function() {
         $("#profilePicChang").attr("src",avatare[student.avatarId].avatarBigUrl);
    }); });
}

function deleteProfile(){
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #delete-profile-body');
}

function deleteProfileCall(){

    /*Da Fehlerhafte API, wird das Passwort nicht abgefragt*/
    var deleteCall = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/student",
        "methode": "DELETE",
        "headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGhlbyJ9.rr1Kxlsfd175ZAgBFanS1fS3B_cj6_tqbjntxFRU4dA",
        },
    }
    deleteCall.headers.authorization = token.token;

    $.ajax(deleteCall).then(function successCallback (token) {
        // Hier sollte noch eine Nachricht geworfen werden
        window.document.location.href = "index.html";
        localStorage.clear();
    })
}

function abbrechen(){
  document.body.style.backgroundColor = "white";
  $('#content').load('mainHTML.html #content');
}
function getUserInfo(){
    //UserInfo in JSON Modell schreiben

    var getStudentInfo = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/student",
        "method": "GET",
        "headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGhlbyJ9.rr1Kxlsfd175ZAgBFanS1fS3B_cj6_tqbjntxFRU4dA",
        }
    }

    getStudentInfo.headers.authorization = token.token;

    $.ajax(getStudentInfo).then(function (response) {
        console.log(response);
        student = response;
    });


    var getAvatarInfo = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/avatar",
        "method": "GET",
        "headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGhlbyJ9.rr1Kxlsfd175ZAgBFanS1fS3B_cj6_tqbjntxFRU4dA",
        }
    }

    getAvatarInfo.headers.authorization = token.token;

    $.ajax(getAvatarInfo).then(function (response) {
        console.log(response);
        avatare = response;
    });

}

var currentAvatar=avatare[student.avatarId];
function changeAvatar(newAvatar){
    avatarChange=newAvatar;
    $("#profilePicChange").attr("src",avatare[newAvatar].avatarBigUrl);
}


function saveNewAvatar(){
    var avatarJSON = {
        "async": false,
        "url": "",
        "method": "PUT",
        "headers": {
            "authorization":""}}
    avatarJSON.headers.authorization = token.token;
    avatarJSON.url = "http://46.101.214.215:1337/api/V1/avatar/"+avatarChange;
   (avatarJSON).done(function (response) {
        if(response.message ="Avatar wurde erfolgreich geändert"){
                loginButton();
                $(document).ready(function(){
                    $('#errorText').load('ChangeBody.html #errorText');
                });
        }
    });
};

/*Seite nimmt Hoverfarbe an, wenn man draufklickt*/
function chapter0(){
  document.body.style.backgroundColor = "#8da6d6";
    $('#content').load('content.html #chapter0');
}
function chapter1(){
   document.body.style.backgroundColor = "#a1c153";
    $('#content').load('content.html #chapter1');
}
function chapter2(){
    document.body.style.backgroundColor = "#dbe283";
    $('#content').load('content.html #chapter2');
}
function chapter3(){
    document.body.style.backgroundColor = "#bad151";
    $('#content').load('content.html #chapter3');
}
function chapter4(){
    document.body.style.backgroundColor = "#7cc3a3";
    $('#content').load('content.html #chapter4');
}
function chapter5(){
    document.body.style.backgroundColor = "#ffea64";
    $('#content').load('content.html #chapter5');
}
function chapter6(){
    document.body.style.backgroundColor = "#fff3d8";
    $('#content').load('content.html #chapter6');
}
function chapter7(){
    document.body.style.backgroundColor = "#ffcf53";
    $('#content').load('content.html #chapter7');
}
function chapter8(){
    document.body.style.backgroundColor = "#f5a04c";
    $('#content').load('content.html #chapter8');
}
function chapter9(){
    document.body.style.backgroundColor = "#e35184";
    $('#content').load('content.html #chapter9');
}
function chapter10(){
    document.body.style.backgroundColor = "#ee7ba9";
    $('#content').load('content.html #chapter10');
}
function chapter11(){
    document.body.style.backgroundColor = "#f7bed2";
    $('#content').load('content.html #chapter11');
}
function chapter12(){
    document.body.style.backgroundColor = "#c9427e";
    $('#content').load('content.html #chapter12');
}
function chapter13(){
    document.body.style.backgroundColor = "#4fa8da";
    $('#content').load('content.html #chapter13');
}
function chapter14(){
    document.body.style.backgroundColor = "#94d3e5";
    $('#content').load('content.html #chapter14');
}
function chapter15(){
    document.body.style.backgroundColor = "#005daa";
    $('#content').load('content.html #chapter15');
}
function chapter16(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('content.html #chapter16');
}

$(document).ready(getUserInfo());

function switchChapter(id){
    switch(id){
        case 0:chapter0(); break;
        case 1:chapter1(); break;
        case 2:chapter2(); break;
        case 3:chapter3(); break;
        case 4:chapter4(); break;
        case 5:chapter5(); break;
        case 6:chapter6(); break;
        case 7:chapter7(); break;
        case 8:chapter8(); break;
        case 9:chapter9(); break;
        case 10:chapter10(); break;
        case 11:chapter11(); break;
        case 12:chapter12(); break;
        case 13:chapter13(); break;
        case 14:chapter14(); break;
        case 15:chapter15(); break;
        case 16:chapter16(); break;
    }

    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}

     kompetenzJSON.headers.authorization = token.token;
     kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId="+id;
   var  kompetenz={};
    $.ajax(kompetenzJSON).then(function setKompetenz (response) {
        kompetenz=response;
    });

    // Hier müssen die Bubbles der Kompetenzen gesetzt werden
    // einmal durch iterieren und entsprechende Bubbles für die Kompetenzen setzen (Inhalt, checked flag)

    $(document).ready(function refreshBubbles(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
});
}

function hoverBubbles(){
    $(".bubbleImg").hover(
        function() {
            $(this).parent().children('#rechtsAb').show();
        },
        function(){
            $(this).parent().children('#rechtsAb').hide();
        }
    );
}
