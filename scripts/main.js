const lang = 'en';
const text_selected = global_tx[lang]['main'];
let username = sessionStorage.getItem('user') || "__";



document.title = text_selected.title;

const toasts = {
    err: {
        color: 'black',
        backgroundColor: 'rgb(224, 95, 95)'
    }
}





let fc = false;
if (fc) {

    document.getElementById("nofc").style.display = "none";

    document.getElementById("fc").style.display = "block";
}



const btns = document.getElementsByClassName("fc-btn-evt");
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = (e) => {
        fc = !fc
        if (fc) {
            document.documentElement.webkitRequestFullscreen();
            document.getElementById("nofc").style.display = "none";
            document.getElementById("fc").style.display = "block";
        } else {
            document.exitFullscreen();
            document.getElementById("nofc").style.display = "block";
            document.getElementById("fc").style.display = "none";
        }
    }
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}