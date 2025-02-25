function change_para_attributes(){
    console.log("Button clicked!");  
    console.log("Element found:", document.getElementById("text"));

    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var tc_R = document.getElementById("tc_R").value;
    var tc_G = document.getElementById("tc_G").value;
    var tc_B = document.getElementById("tc_B").value;

    var tag = document.getElementById("text");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width + "px";
    tag.style.borderStyle = "solid";
    tag.style.backgroundColor = `rgb(${tc_R},${tc_G},${tc_B})`;
}