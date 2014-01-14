"use strict";

function ShowBlock(block_close_input, block_open_preview) {

    var tab_name = document.getElementById("inputFormName"),
        tab_contact = document.getElementById("inputFormContacts"),
        tab_personal = document.getElementById("inputFormPersonal"),
        person = new Persone(),
        
        key_person = ["first_name", "last_name", "skype", "email", "phone", "age", "sex"],
        key;

    tab_contact.classList.add("hiden");
    tab_personal.classList.add("hiden");

    block_open_preview.classList.add("hiden");

    function clickName() {
        tab_contact.classList.add("hiden");
        tab_personal.classList.add("hiden");
        tab_name.classList.remove("hiden");
    }

    function clickContacts() {
        tab_name.classList.add("hiden");
        tab_contact.classList.remove("hiden");
        tab_personal.classList.add("hiden");
    }

    function clickPersonal() {
        tab_name.classList.add("hiden");
        tab_contact.classList.add("hiden");
        tab_personal.classList.remove("hiden");
    }

    document.getElementById("tab_name").addEventListener("click", clickName, false);
    document.getElementById("tab_contact").addEventListener("click", clickContacts, false);
    document.getElementById("tab_personal").addEventListener("click", clickPersonal, false);

    function inputToPerson() {
        
        // person.set("first_name", document.getElementById("first_name").value);
        // person.set("last_name", document.getElementById("last_name").value);
        // person.set("skype", document.getElementById("skype").value);
        // person.set("email", document.getElementById("email").value);
        // person.set("phone", document.getElementById("phone").value);
        // person.set("age", document.getElementById("age").value);
        // person.set("sex", document.getElementById("sex").value);
        for(key in key_person) {
            person.set(key_person[key], document.getElementById(key_person[key]).value);
        }
    }

    function show() {
        document.getElementById("preview").classList.add("hiden");
        block_close_input.classList.add("hiden");
        block_open_preview.classList.remove("hiden");

        inputToPerson();

        document.getElementById("persone_name").innerHTML = person.get("first_name");
        document.getElementById("persone_last_name").innerHTML = person.get("last_name");
        document.getElementById("persone_skype").innerHTML = person.get("skype");
        document.getElementById("persone_email").innerHTML = person.get("email");
        document.getElementById("persone_phone").innerHTML = person.get("phone");
        document.getElementById("persone_age").innerHTML = person.get("age");
        document.getElementById("persone_sex").innerHTML = person.get("sex");
    }

    function editForm() {
        document.getElementById("preview").classList.remove("hiden");
        block_close_input.classList.remove("hiden");
        block_open_preview.classList.add("hiden");
    }

    document.getElementById("preview").addEventListener ("click", show, false);

    document.getElementById("edit").addEventListener ("click", editForm, false);

    return this;
}