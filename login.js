function loginButton(){ /* Nur wenn Email (muss das wirklich ne Email sein?) und Password gesetzt sind */
    if($("email").val() != "" && $("#password").val() != ""){
        var loginData = new FormData();
        loginData.append("username", $("#email").val());
        loginData.append("password", $("#password").val());

        var api = {
            "url" : "http://46.101.204.215:1337/api/V1/login",
            "method" : "PUT",
            "data" : loginData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data"
        };

        $.ajax(api).then(function successCallback (token) {
            window.document.location.href = "mainHTML.html";
            localStorage.setItem('token', token);
        })
            .fail(function errorCallback(){
                $('#errorLogin1').load('content.html #errorLogin');
                // Wartet auf "ready" des DocObjectModel
                $(document).ready(function loginError(){
                    $('#errorText').html("Benutzername oder Passwort falsch!");
                })
            })

    }
    else{
        /* Wenn Informationen nicht ausgefüllt, soll Popup kommen (?) -> vgl. Styleguide */
    }
}
