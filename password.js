function compare_password(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    document.getElementById("pass1").value = '';
    document.getElementById("pass2").value = '';
    if (pass1.length < 8 || pass2.length < 8){
        alert("Your Password is less then 8 characters")
    }else if (pass1 != pass2){
        alert("Your Passwords do not match")
    }else{
        alert("Your Passwords match")
    }
}