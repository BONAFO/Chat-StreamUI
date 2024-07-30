const lang = 'en';
const text_selected = global_tx[lang]['main'];

console.log(text_selected);

document.title = text_selected.title;

const toasts = {
    err: {
        color: 'black',
        backgroundColor: 'rgb(224, 95, 95)'
    }
}


document.getElementById("signup").onclick = () => {
    show_toast(text_selected.errs.nosub, { style: toasts.err })
}

document.getElementById("login").onclick = () => {
    show_toast(text_selected.errs.nosub, { style: toasts.err })
}


document.getElementById("msj").oninput = (e) => {
    e.target.value = '';
    show_toast(text_selected.errs.nomsj, { style: toasts.err })
}

document.getElementById("sendmsj").onclick = () => {
    show_toast(text_selected.errs.nomsj, { style: toasts.err })
}

let fc
if (window.innerHeight == window.screen.height) {
    fc = true;
} else {
    fc = false
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    fc = false
}

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


window.onkeydown = (e) => {
    if (e.key == "F11" || e.keyCode == 122) {
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

    if (e.key == "Escape" || e.keyCode == 27) {
        fc = false
        document.exitFullscreen();
        document.getElementById("nofc").style.display = "block";
        document.getElementById("fc").style.display = "none";
    }
}