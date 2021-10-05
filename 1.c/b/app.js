function validate()
{
 var email=$("#email").val();
 var pass=$("#password").val();
 
 var email_regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

 if(email_regex.test(email)==false)
 {
  alert("Please Enter Correct Email");
  return false;	
 }
 else if(strongRegex.test(pass)==false)
 {
    alert("Please Enter Strong Password"); 
  console.log(pass);
  return false;
 }
 else
 {
    
  return true;
 }
}