var tokenS = localStorage.getItem('token');
var token = JSON.parse(tokenS);
var student = {};
var avatare = [];
var educationalPlans = [];
var educationalPlan = [];
var allCompetences = [];


function changePassword() {
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #password-change-body');
}
function changeAvatarPicture(){

  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #profilepic-change-body');
  $(document).ready(function() {
    $(document).ready(function() {
         $("#profilePicChange").attr("src",avatare[student.avatarId].avatarBigUrl);
    }); });
}
function batman(){
   $('#content').load('content.html #profilepic-change-body0');
}
function catwoman(){
   $('#content').load('content.html #profilepic-change-body1');
}
function gandalf(){
   $('#content').load('content.html #profilepic-change-body2');
}
function greenlantern(){
   $('#content').load('content.html #profilepic-change-body3');
}
function hulk(){
   $('#content').load('content.html #profilepic-change-body4');
}
function kickass(){
   $('#content').load('content.html #profilepic-change-body5');
}
function luke(){
   $('#content').load('content.html #profilepic-change-body6');
}
function robin(){
   $('#content').load('content.html #profilepic-change-body7');
}
function skeletor(){
   $('#content').load('content.html #profilepic-change-body8');
}
function spiderman(){
   $('#content').load('content.html #profilepic-change-body9');
}
function superman(){
   $('#content').load('content.html #profilepic-change-body10');
}
function superwoman(){
   $('#content').load('content.html #profilepic-change-body11');
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
        console.log("Vor SetAll()");
        $(document).ready(setAll());
    });

    // funktioniert leider nicht
    var getAllCompetences = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/studentcompetence",
        "method":"GET",
        "headers": token.token,
    }

    $.ajax(getAllCompetences).then(function (response){
        console.log("Alle Kompetenzen in allCompetences");
        allCompetences = response;
    })
}

function setAll(){
    $('#studentName').html(student.forename+'<br>'+student.surname);
    $('#studentBirth').html(student.birth);
    $("#studentImg").attr("src",avatare[student.avatarid].avatarBigUrl);
    $("#studentPic").attr("src",avatare[student.avatarid].avatarInactiveUrl);
    $("#schoolPic").attr("src",student.school.imageUrlbig);
    $('#schoolName').html(student.school.name);

    var schoolAddress = student.school.address;
    var splitAddress = schoolAddress.split(",");
    $('#schoolInfo1').html(splitAddress[0]+"<br>"+splitAddress[1]+"<br>"+student.school.country);
    $('#schoolInfo2').html("<br>"+student.school.email+"<br>"+student.school.telefon);

    $("#gradeImg").attr("src",student.studyGroups.imageUrlBig);
    $("#gradePic").attr("src",student.studyGroups.imageUrlInactive);
    $('#gradeName').html("Klasse<br>"+student.studyGroups.class);
    $('#gradeTeacher').html(student.formteacher);
}

var currentAvatar=avatare[student.avatarId];
function changeAvatar(newAvatar){
    currentAvatar=newAvatar;
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
    avatarJSON.url = "http://46.101.214.215:1337/api/V1/avatar/"+currentAvatar;
    $.ajax(avatarJSON).then(function (response) {
      console.log(response);

        if(response.message ="Avatar wurde erfolgreich geändert"){
          $("p").text("Avatar wurde erfolgreich geändert");
                loginButton();
                $(document).ready(function(){
                    $('#errorText').load('ChangeBody.html #errorText');
                });
        } // Anpassung an #IDs
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

/* Foerder wird Hintergrundfarbe bei Klick zugeteilt*/

function foerder1(){
  document.body.style.backgroundColor ="#8da6d6";
  $('#content').load('content.html #foerd1');
}

function foerder2(){
  document.body.style.backgroundColor ="#8da6d6";
  $('#content').load('content.html #foerd2');
}

function foerder3(){
  document.body.style.backgroundColor ="#8da6d6";
  $('#content').load('content.html #foerd3');
}

$(document).ready(getUserInfo());

function getEducationalPlan(){
    var settings = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/educationalPlan",
        "method": "GET",
        "headers": {
            "authorization": token.token,
        }
    }

    $.ajax(settings).then(function (response) {
        console.log(response);
        educationalPlans = response;
    });

}

$(document).ready(getEducationalPlan());

function openEducationalPlan(id){
    var settings = {
        "async":false,
        "url": "http://46.101.204.215:1337/api/V1/educationalPlan/"+id,
        "methode":"GET",
        "headers": {
            "authorization": token.token,
        }
    }

    $.ajax(settings).then(function (response) {
        console.log("Förderplan");
        console.log(response);
        educationalPlan = response;
        showEducationalPlan();
    });

    function showEducationalPlan(){
        var kompetenzen = "";
        var showKompetenz = "";
        showKompetenz = educationalPlan[0].competences;
        for (i = 0; i < showKompetenz.length; i++) {
            console.log(showKompetenz[i]);

            // Logik aktuell noch fehlerbehaftet
            kompetenzen += "<div id=\"compBubble\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
            kompetenzen += "<div id=\"comp\"></div><div id=\"compText\"><p>"
            kompetenzen += showKompetenz[i].note + "</p></div></div></div></div>"

        }
        // Hier müssen die Bubbles der Kompetenzen gesetzt werden
        // einmal durch iterieren und entsprechende Bubbles für die Kompetenzen setzen (Inhalt, checked flag)

        $(document).ready(function refreshBubbles() {
            $('#mainContent').html(kompetenzen);
            hoverBubbles();
        });
    }
}

function switchCompetency(id) {
    switch (id) {
        case 0:
            chapter0();
            break;
        case 1:
            chapter1();
            break;
        case 2:
            chapter2();
            break;
        case 3:
            chapter3();
            break;
        case 4:
            chapter4();
            break;
        case 5:
            chapter5();
            break;
        case 6:
            chapter6();
            break;
        case 7:
            chapter7();
            break;
        case 8:
            chapter8();
            break;
        case 9:
            chapter9();
            break;
        case 10:
            chapter10();
            break;
        case 11:
            chapter11();
            break;
        case 12:
            chapter12();
            break;
        case 13:
            chapter13();
            break;
        case 14:
            chapter14();
            break;
        case 15:
            chapter15();
            break;
        case 16:
            chapter16();
            break;
    }
    var showKompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization": ""
        }
    }

    showKompetenzJSON.headers.authorization = token.token;
    showKompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId=" + id;
    var showKompetenz = {};
    $.ajax(showKompetenzJSON).then(function setKompetenz(response) {
        showKompetenz = response;
        console.log(showKompetenz);
        showCompetencies();
    });
    function showCompetencies() {
        var kompetenzen = "";
        for (i = 0; i < showKompetenz.length; i++) {
            console.log(showKompetenz[i].number);

            // Logik aktuell noch fehlerbehaftet
            kompetenzen += "<div id=\"compBubble\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
            if (showKompetenz[i].checked = true && showKompetenz[i].fromDate != null) {
                if (showKompetenz[i].chapterId < 10) {
                    kompetenzen += "images/chapter0" + (showKompetenz[i].chapterId) + "/competenceDone.png\"><div id=\"comp\"><div id=\"rechts\">Du hast diese Kompetenz am<br>" + showKompetenz[i].fromDate + " erreicht!</div></div></div><div id=\"compText\"><p>"
                }
                else {
                    kompetenzen += "images/chapter" + (showKompetenz[i].chapterId) + "/competenceDone.png\"><div id=\"comp\"><div id=\"rechts\">Du hast diese Kompetenz am<br>" + showKompetenz[i].fromDate + " erreicht!</div></div></div><div id=\"compText\"><p>"
                }
            }
            else {
                if (showKompetenz[i].chapterId < 10) {
                    kompetenzen += "images/chapter0" + (showKompetenz[i].chapterId) + "/competenceUndone.png\"><div id=\"comp\"></div></div><div id=\"compText\"><p>"
                }
                else {
                    kompetenzen += "images/chapter" + (showKompetenz[i].chapterId) + "/competenceUndone.png\"><div id=\"comp\"></div></div><div id=\"compText\"><p>"

                }
            }

            kompetenzen += showKompetenz[i].studentText + "</p></div>"
            if (showKompetenz[i].number < 1000) {
                if (showKompetenz[i].number < 100) {
                    if (showKompetenz[i].number < 10) {
                        numberID = "000" + showKompetenz[i].number;
                    } else {
                        numberID = "00" + showKompetenz[i].number;
                    }
                } else {
                    numberID = "0" + showKompetenz[i].number;
                }
            } else {
                numberID = showKompetenz[i].number;
            }
            kompetenzen += "<div id=\"compID\"><p>" + showKompetenz[i].chapterId + "." + numberID + "</p></div></div>"


        }
        // Hier müssen die Bubbles der Kompetenzen gesetzt werden
        // einmal durch iterieren und entsprechende Bubbles für die Kompetenzen setzen (Inhalt, checked flag)

        $(document).ready(function refreshBubbles() {
            $('#mainContent').html(kompetenzen);
            hoverBubbles();
        });
    }
}

function switchFoerder(id){
  switch(id){
    case 1:foerder1(); break;
    case 2:foerder2(); break;
    case 3:foerder3(); break;
  }
  openEducationalPlan(id);
}

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
    if (id>0) {
        kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId=" + id;
    }else{
        kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true";
    }
   var  kompetenz={};
    $.ajax(kompetenzJSON).then(function setKompetenz (response) {
        console.log(response[5].checked);
        kompetenz=response;
        console.log(kompetenz);
        kompetenzenAnzeigen();
    });
    function kompetenzenAnzeigen() {
        var kompetenzen = "";
        for (i = 0; i < kompetenz.length; i++) {
            console.log(kompetenz[i].number);

            // Logik aktuell noch fehlerbehaftet
            kompetenzen += "<div id=\"compBubble\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
            if (kompetenz[i].checked = true && kompetenz[i].fromDate != null) {
                if (kompetenz[i].chapterId < 10) {
                    kompetenzen += "images/chapter0" + (kompetenz[i].chapterId) + "/competenceDone.png\"><div id=\"comp\"><div id=\"rechts\">Du hast diese Kompetenz am<br>" + kompetenz[i].fromDate + " erreicht!</div></div></div><div id=\"compText\"><p>"
                }
                else {
                    kompetenzen += "images/chapter" + (kompetenz[i].chapterId) + "/competenceDone.png\"><div id=\"comp\"><div id=\"rechts\">Du hast diese Kompetenz am<br>" + kompetenz[i].fromDate + " erreicht!</div></div></div><div id=\"compText\"><p>"
                }
            }
            else {
                if (kompetenz[i].chapterId < 10) {
                kompetenzen += "images/chapter0" + (kompetenz[i].chapterId) + "/competenceUndone.png\"><div id=\"comp\"></div></div><div id=\"compText\"><p>"
            }
            else {kompetenzen += "images/chapter" + (kompetenz[i].chapterId) + "/competenceUndone.png\"><div id=\"comp\"></div></div><div id=\"compText\"><p>"

                }
            }

             kompetenzen+=kompetenz[i].studentText+"</p></div>"
             if(kompetenz[i].number<1000){
             if(kompetenz[i].number<100){
             if(kompetenz[i].number<10){
             numberID="000"+kompetenz[i].number;
             }else{
             numberID="00"+kompetenz[i].number;
             }
             }else{
             numberID="0"+kompetenz[i].number;
             }
             }else{
             numberID=kompetenz[i].number;
             }
             kompetenzen+="<div id=\"compID\"><p>"+kompetenz[i].chapterId+"."+numberID+"</p></div></div>"


        }
        // Hier müssen die Bubbles der Kompetenzen gesetzt werden
        // einmal durch iterieren und entsprechende Bubbles für die Kompetenzen setzen (Inhalt, checked flag)

        $(document).ready(function refreshBubbles() {
            $('#mainContent').html(kompetenzen);
            hoverBubbles();
        });
    }
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

function showHomePage(){
  document.body.style.backgroundColor ="white";
  $('#content').load('content.html #mainHTML');
}
