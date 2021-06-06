console.log("hello js working");

// NOTIE JS FOR THE SUCCESS WARNING**************************
notie.setOptions({
  alertTime: 2,
});

function nameerror() {
  notie.alert({
    type: 3,
    text: "Please check your name",
    time: 2,
  });
}

function emailerror() {
  notie.alert({
    type: 3,
    text: "Please check your email",
    time: 2,
  });
}

function noerror() {
  notie.alert({
    type: 3,
    text: "Please check your contact number",
    time: 2,
  });
}

function allerror() {
  notie.alert({
    type: 3,
    text: "Please check your details",
    time: 2,
  });
}

function checkBox() {
  notie.alert({
    type: 3,
    text: "Please confirm your age",
    time: 2,
  });
}

function success() {
  notie.alert({
    type: 1,
    text: "We have successfully collected your details , and our staff members will contact you soon",
    time: 3.5,
  });
}

// REGEX FUNCTION*********************************

function person() {
  var person = document.querySelector(".name");
  var value = person.value;
  var regex = /^[a-zA-Z\s]+$/;

  if (regex.test(value) === true) {
    person.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    person.style.borderBottom = "2px solid red";
    nameerror();
    return false;
  }
}

function Email() {
  var email = document.querySelector(".email");
  var value = email.value;
  var regex = /^\S+@\S+\.\S+$/;

  if (regex.test(value) === true) {
    email.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    email.style.borderBottom = "2px solid red";
    emailerror();
    return false;
  }
}

function checkbox() {
  var checkbox = document.querySelector(".checkbox");

  if (checkbox.checked) {
    console.log("hello clicked");
    return true;
  } else {
    checkBox();
    return false;
  }
}

function number() {
  var number = document.querySelector(".number");
  var value = number.value;
  var regex = /^[1-9]\d{9}$/;

  if (regex.test(value) === true) {
    number.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    number.style.borderBottom = "2px solid red";
    noerror();
    return false;
  }
}

function checkAll() {
  var submit = document.querySelector(".submit");
  var personCheck = person();
  var emailCheck = Email();
  var numberCheck = number();
  var checkBox = checkbox();
  if (personCheck == true && numberCheck == true && emailCheck == true && checkBox==true) {
    success();
    var Person = document.querySelector(".name");
    var email = document.querySelector(".email");
    var no = document.querySelector(".number");
    var check = document.querySelector(".checkbox");

    no.value = "";
    email.value = "";
    Person.value = "";
    check.checked = false;
    mainpage();
    // setTimeout(() => {
    //   mainpage();
    // }, 3500);
  } 
  else if (personCheck == true && numberCheck == true && emailCheck == true && checkBox==false)
  {
    checkBox();
  }
  else if (personCheck == false && numberCheck == true && emailCheck == true)
  {
    nameerror();
  }
  else if (personCheck == true && numberCheck == false && emailCheck == true )
  {
    noerror();
  }
  else if (personCheck == true && numberCheck == true && emailCheck == false )
  {
    emailerror();
  }
  else  if (personCheck == false && numberCheck == false && emailCheck == false && checkBox==false) {
    allerror();
  }

 

  no.style.borderBottom = "1px solid black";
  email.style.borderBottom = "1px solid black";
  Person.style.borderBottom = "1px solid black";
}

function mainpage() {
  location.href = "#";
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     multiplier: 1,
//     lerps: 0.5,
//     repeat: false
// });
