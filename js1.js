const form=document.querySelector('.form1');
const username=document.querySelector('#name');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
  if(!validateinputs()){
    e.preventDefault();
  }

  

})

function validateinputs(){

    const nameval= username.value.trim();
    const emailval= email.value.trim();
    const passwordval= password.value.trim();
    const cpasswordval= cpassword.value.trim();
    let success=true;


    if(nameval===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }




    if(emailval === ''){
        success=false;
        setError(email,'Email is required')
    }
      else if(!validateEmail(emailval)){
        success=false;
    setError(email,'enter a valid email')
        }
      else
{setSuccess(email)}




if(passwordval === ''){
    success=false;
    setError(password,'password is required')
}
else if(passwordval.length<8){
    success=false;
    setError(password,'password must contain atleast 8 characters')
}
else
{
    setSuccess(password)
}




if(cpasswordval === ''){
    success=false;
    setError(cpassword,'confirm password is required')
}
else if(passwordval!=cpasswordval){
    success=false;
    setError(cpassword,'password does not match')
}

else{
    setSuccess(cpassword)
}

return success;

}

function setError(element,message){
    const inputgroup=element.parentElement;
    const errorEle=inputgroup.querySelector('.error');

    errorEle.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');


}

function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorEle=inputgroup.querySelector('.error');

    errorEle.innerText=' ';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');


}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

};