function formValidation()
{

var uname = document.registration.username;

var uzip = document.registration.zip;
var umob = document.registration.mobile;
var uemail = document.registration.email;
{
if(allLetter(uname))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(phonenumber(umob)){
    if(validsex(umsex,ufsex))
    {
    }
 }

} 
} 
}
}
return false;
} 
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('field shoud not be blank');
uname.focus();
return false;
}
}
function allnumeric(uzip)
{ 
var numbers = /^\d{2,3}$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('Field should not be empty or age should not exceeded more than 3 digits');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("field should not be empty and must enter a valid email address!");
uemail.focus();
return false;
}}
function phonenumber(umob)
{
  var phoneno =/^\d{10}$/;
  if(( umob.value.match(phoneno)))
        {
            alert('Form Succesfully Submitted');
window.location.reload()
return true;     
        }
      else
        {
        alert("field should not be empty and please enter a valid mobile number");
        umob.focus();
        return false;
        }
}
