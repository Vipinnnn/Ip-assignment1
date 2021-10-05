function validatename(){
    let name = document.contactus.contactname.value;
    let letters = /^[a-zA-Z\-]+$/;
    if(name.match(letters)==null){
        alert("Name must contain only letters")
        document.contactus.contactname.value="";
        return false;
       }
}

function validateemail(){
    var email_id = document.contactus.contactemail.value;
      
       atpos = email_id.indexOf("@");
       dotpos = email_id.lastIndexOf(".");

       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct Email ID")
          return false;
       }
}

function validatenumber(){
    var phone_no = document.contactus.contactnumber.value;
    let number = /^[0-9\-]+$/;
    if(phone_no.match(number)==null){
        alert("Phone number must contain only numeric values")
        document.contactus.contactnumber.value="";
        return false;
       }


}