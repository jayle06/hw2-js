function showToast() {
    let x = document.getElementById("toast");
    x.className = "toast show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

    document.getElementById("close").onclick = function(){
        x.className = x.className.replace("show", "");
    };
}



