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
         $("#profilePicChange").attr("src",avatare[student.avatarId].avatarBigUrl);
    }); });
}

function deleteProfile(){
  document.body.style.backgroundColor = "white";
  $('#content').load('content.html #delete-profile-body');
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

/*Seite nimmt Hoverfarbe an, wenn man draufklickt*/
function chapter0(){
  document.body.style.backgroundColor = "#001a3a";
    $('#content').load('content.html #chapter0');
}
function chapter1(){
   document.body.style.backgroundColor = "#79ab2e";
    $('#content').load('content.html #chapter1');
}
function chapter2(){
    document.body.style.backgroundColor = "#c6d54f";
    $('#content').load('content.html #chapter2');
}
function chapter3(){
    document.body.style.backgroundColor = "#94c122";
    $('#content').load('content.html #chapter3');
}
function chapter4(){
    document.body.style.backgroundColor = "#44b284";
    $('#content').load('content.html #chapter4');
}
function chapter5(){
    document.body.style.backgroundColor = "#ffdd00";
    $('#content').load('content.html #chapter5');
}
function chapter6(){
    document.body.style.backgroundColor = "#ffed98";
    $('#content').load('content.html #chapter6');
}
function chapter7(){
    document.body.style.backgroundColor = "#fbb900";
    $('#content').load('content.html #chapter7');
}
function chapter8(){
    document.body.style.backgroundColor = "#ef7d25";
    $('#content').load('content.html #chapter8');
}
function chapter9(){
    document.body.style.backgroundColor = "#d60d66";
    $('#content').load('content.html #chapter9');
}
function chapter10(){
    document.body.style.backgroundColor = "#ea518d";
    $('#content').load('content.html #chapter10');
}
function chapter11(){
    document.body.style.backgroundColor = "#f29db7";
    $('#content').load('content.html #chapter11');
}
function chapter12(){
    document.body.style.backgroundColor = "#a62068";
    $('#content').load('content.html #chapter12');
}
function chapter13(){
    document.body.style.backgroundColor = "#008fc8";
    $('#content').load('content.html #chapter13');
}
function chapter14(){
    document.body.style.backgroundColor = "#62c2d0";
    $('#content').load('content.html #chapter14');
}
function chapter15(){
    document.body.style.backgroundColor = "#004077";
    $('#content').load('content.html #chapter15');
}
function chapter16(){
    document.body.style.backgroundColor = "#3873b9";
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

scrollTop();
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

    $(document).ready(function refreshBubbles(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
        setScrollButtons();
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

function setScrollButtons(){
    scrollCounter=0;
    scroll =1;
    $(document).ready(function(){
        $("#scrollUp").click(function() {
            if(scroll>1){
                scroll--;
            }
            $('html, body').animate({
                scrollTop: $("#scroll"+scroll).offset().top -65
            }, 500);
            console.log(scroll);
        });
        $("#scrollDown").click(function() {
            if(scroll<scrollCounter){
                scroll++;
            }
            $('html, body').animate({
                scrollTop: $("#scroll"+scroll).offset().top -65
            }, 500);
        });

    });
}

function scrollTop(){
    $(document).ready(function(){
        $('content,html').animate({
            scrollTop: 0
        }, 0);
        return false;
    });
}
