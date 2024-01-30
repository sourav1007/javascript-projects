let username=document.getElementById("username");
let password=document.getElementById("password");



function formValidation(){
    let flag=1;

   if(username.value==""){
  document.getElementById("usererror").innerText="username is empty ";
  flag=0;
   }
   else if(username.value.length<3){
    document.getElementById("usererror").innerText="username require minimum 3 characters ";
    flag=0;
   }
   else{
    document.getElementById("usererror").innerText="";
    flag=1;

   }
   if(password.value==""){
    document.getElementById("passerror").innerText="password is empty ";
    flag=0;
   }
   else{
    document.getElementById("passerror").innerText="";
    flag=1;

   }
   if(flag){
    alert("form submitted");
    return true
}
   else{
    return false
   }
   



}