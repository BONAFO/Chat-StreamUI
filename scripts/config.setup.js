let chat_cd = false;

const Handle_Create_Chat = () => {

    const SEND = () => {
        const value = document.getElementById("msj").value;
        document.getElementById("msj").value = "";
        if (value.trim().length != 0) {
            Create_Chat(value, username, {
                username: {
                    color: "red"
                }
            })
        }
        chat_cd = true;
    }

    const WAIT = () => {
        show_toast(text_selected.errs.cdmsj, { style: toasts.err })

    }

    if (chat_cd) {
        WAIT()
        document.getElementById("sendmsj").style.opacity = ".3";
    } else {
        SEND()
        document.getElementById("sendmsj").style.opacity = ".3";
        setTimeout(() => {
            chat_cd = false;
            document.getElementById("sendmsj").style.opacity = "1";
        }, 5000);
    }

}


(

    () => {
        if (config.chat.status.C) {
            document.getElementById("sendmsj").onclick = () => {
                Handle_Create_Chat()
            }
        } else {
            document.getElementById("msj").oninput = (e) => {
                e.target.value = '';
                show_toast(text_selected.errs.nomsj, { style: toasts.err })
            }
            document.getElementById("sendmsj").style.opacity = ".3";
            document.getElementById("sendmsj").onclick = () => {
                show_toast(text_selected.errs.nomsj, { style: toasts.err })
            }

        }

        if (config.chat.status.R) {

        } else {

        }


        if (config.chat.status.U) {

        } else {

        }

        if (config.chat.status.D) {} else {

        }


        if (config.user.status.C) {


            document.getElementById("signup").onclick = () => {

                Swal.fire({
                    title: "How you want to be called in this session?",
                    input: "text",

                    showCancelButton: true,
                    confirmButtonText: "Call me...",
                    showLoaderOnConfirm: true,
                    customClass: {
                        popup: 'sw2-popup',
                        cancelButton: "btn btn-danger sw2-btn",
                        confirmButton: "btn btn-success sw2-btn",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (result.value.trim().length != 0) {
                            username = result.value
                            sessionStorage.setItem("user", username)
                        }
                    }
                });
            }



        } else {
            document.getElementById("signup").style.opacity = ".3";
            document.getElementById("signup").onclick = () => {
                show_toast(text_selected.errs.nosub, { style: toasts.err })
            }



        }

        if (config.user.status.R) {

        } else {
            document.getElementById("login").style.opacity = ".3";
            document.getElementById("login").onclick = () => {
                show_toast(text_selected.errs.nosub, { style: toasts.err })
            }

        }


        if (config.user.status.U) {


        } else {

        }

        if (config.user.status.D) {

        } else {

        }











    }
)()