let promtNameinput = prompt('Please Enter Your Name Here');
if(promtNameinput != 'Mahim'){
    document.getElementById("text1").innerHTML = "Hello " + promtNameinput + " !How Are You Today?";
} else{
    document.getElementById("text").innerHTML = "Happy Birthday  " + promtNameinput + " !How Are You Today?";
}
