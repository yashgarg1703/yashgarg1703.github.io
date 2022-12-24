$(document).ready(function() {
    const firstname = document.getElementById("field1");
    const lastname = document.getElementById("field2");
    const phoneNumber = document.getElementById("field3");
    const adm_no = document.getElementById("field4");
    const uni_no = document.getElementById("field5");
    const intermediate = document.getElementById("field6");
    const highschool = document.getElementById("field7");
    var count = 2;
    //First Name Valiadtion
    firstname.addEventListener("blur", () => {
        var regex1 = /[a-zA-Z]+/;
        var val1 = firstname.value;
        if (regex1.test(val1)) {
            document.getElementById("fname").style.display = "none";
            count++;
        } else {
            document.getElementById("fname").style.display = "block";
        }
    });
    //Last Name Validation
    lastname.addEventListener("blur", () => {
        var regex2 = /[a-zA-Z]+/;
        var val2 = lastname.value;
        if (regex2.test(val2)) {
            document.getElementById("lname").style.display = "none";
            count++;
        } else {
            document.getElementById("lname").style.display = "block";
        }
    });

    //Mobile No. Validation
    phoneNumber.addEventListener("blur", function() {
        var regex3 = /^([0-9]){10}$/;
        var val3 = phoneNumber.value;
        if (regex3.test(val3)) {
            document.getElementById("mobile").style.display = "none";
            count++;
        } else {
            document.getElementById("mobile").style.display = "block";
        }
    });
    //Admission_No. Validation
    adm_no.addEventListener("blur", function() {
        var regex4 = /^([a-zA-Z0-9]){9}$/;
        var val4 = adm_no.value;
        if (regex4.test(val4)) {
            document.getElementById("adm").style.display = "none";
            count++;
        } else {
            document.getElementById("adm").style.display = "block";
        }
    });
    //University RollNo. Validation
    uni_no.addEventListener("blur", function() {
        var regex5 = /^([0-9]){12}$/;
        var val5 = uni_no.value;
        if (regex5.test(val5)) {
            document.getElementById("uni").style.display = "none";
            count++;
        } else {
            document.getElementById("uni").style.display = "block";
        }
    });
    //Intermediate RollNo. Validation
    intermediate.addEventListener("blur", function() {
        var regex6 = /^([0-9]){8}$/;
        var val6 = intermediate.value;
        if (regex6.test(val6)) {
            document.getElementById("12").style.display = "none";
            count++;
        } else {
            document.getElementById("12").style.display = "block";
        }
    });
    //High School RollNo. Validation
    highschool.addEventListener("blur", function() {
        var regex7 = /^([0-9]){7}$/;
        var val7 = highschool.value;
        if (regex7.test(val7)) {
            document.getElementById("10").style.display = "none";
            count++;
        } else {
            document.getElementById("10").style.display = "block";
        }
    });
    //On Clicking SUBMIT Button
    document.getElementById("btn").addEventListener("click", function() {
        // $("#logo").css("position", "absolute");
        if (count == 9) {
            window.scrollTo(0, 0); //to scroll the window to the top
            document.getElementById("warning").style.display = "none";
            document.getElementById("success").style.display = "block";
            $('input[type="text"]').val(" "); //To make blank all the text fields
            count = 2;
        } else {
            window.scrollTo(0, 0);
            document.getElementById("success").style.display = "none";
            document.getElementById("warning").style.display = "block";
        }
    });
    //scrollToTop function
    $("#scrollToTop").click(() => {
        window.scrollTo(0, 0);
    });
});