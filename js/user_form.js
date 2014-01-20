"use strict";

function ShowBlock(block_close_input, block_open_preview) {

    var person = new Persone(),

        key_person = ["first_name", "last_name", "skype", "email", "phone", "age", "sex"],
        key,

        attributeJSON = person.getJSON(),

        templateText,
        view_form;

    $("#inputFormContacts").addClass("hiden");
    $("#inputFormPersonal").addClass("hiden");

    $("#" + block_open_preview).addClass("hiden");

    function clickName() {
        $("#inputFormContacts").addClass("hiden");
        $("#inputFormPersonal").addClass("hiden");
        $("#inputFormName").removeClass("hiden");
    }

    function clickContacts() {
        $("#inputFormName").addClass("hiden");
        $("#inputFormContacts").removeClass("hiden");
        $("#inputFormPersonal").addClass("hiden");
    }

    function clickPersonal() {
        $("#inputFormName").addClass("hiden");
        $("#inputFormContacts").addClass("hiden");
        $("#inputFormPersonal").removeClass("hiden");
    }

    $("#tab_name").on("click", clickName);
    $("#tab_contact").on("click", clickContacts);
    $("#tab_personal").on("click", clickPersonal);

    function inputToPerson() {
        // for(key in key_person) {
        //     person.set(key_person[key], $("#" + key_person[key]).val());
        // }
        $.each(key_person, function(key){
            person.set(key_person[key], $("#" + key_person[key]).val());
            console.log(key_person[key]);
        });
        
    }

    function show() {
        $("#preview").addClass("hiden");
        $("#" + block_close_input).addClass("hiden");
        $("#" + block_open_preview).removeClass("hiden");

        inputToPerson();

        // for(key_val in attributeJSON) {
        //     person.get(document.getElementById("persone_" + key_val).innerHTML = attributeJSON[key_val]);
        // }
        templateText = $("#list").html(),
        view_form = _.template(templateText,attributeJSON);
        $("#list_view").html(view_form);
    }

    function editForm() {
        $("#preview").removeClass("hiden");
        $("#" + block_close_input).removeClass("hiden");
        $("#" + block_open_preview).addClass("hiden");
    }

    $("#preview").on("click", show);

    $("#edit").on("click", editForm);

    return this;
}