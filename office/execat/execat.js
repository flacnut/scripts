var mailbox;
var settings;
var reason;

Office.initialize = function(reason) {
    $(document).ready( function (){
        mailbox = Office.context.mailbox;
        settings = Office.context.roamingSettings;

        $('body').innerText("Bonjour tout le monde!");
    });
}