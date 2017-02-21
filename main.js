var tokenS = localStorage.getItem('token');
var token = JSON.parse(tokenS);
var student = {};
var avatare = [];

function passwordÄndern() {
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #password-change-body');
}
function profilbildÄndern(){
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #profilepic-change-body');
  $(document).ready(function() {
    $(document).ready(function() {
        <!--hier wird das Profilbild geändert-->
    }); });
}
function profilLöschen(){
  document.body.style.backgroundColor = "white";
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

<!--Seite nimmt Hoverfarbe an, wenn man draufklickt-->
function chapter0(){
    document.body.style.backgroundColor = "#001a3a";
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

$(document).ready(function() {
  getUserInfo();
});

function switchChapter(id){
    switch(id){
        case 0:
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

bindButtons();
scrollTop();
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "POST",
        "headers": {
            "authorization":""}}

     kompetenzJSON.headers.authorization = token.token;
     kompetenzJSON.url = "http://46.101.214.215:1337/api/V1/studentcompetence?checked=false&chapterId="+id;
   var  kompetenz={};
    $.ajax(kompetenzJSON).done(function (response) {
        kompetenz=response;
    });

    var bubblesDone="";
    var bubblesUndone="";
    var bubblesEducation="";


     for(i=0;i<kompetenz.length;i++){
        if(true){
            bubblesEducation+=getBubbleEducation();
        }else
            if(kompetenz[i].checked){
                bubblesDone+=getBubble(kompetenz[i],true);
            }else{
                bubblesUndone+=getBubble(kompetenz[i],false);
            }
        }
     var bubbles = bubblesDone+bubblesEducation+bubblesUndone;

    $(document).ready(function(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
});
}
