//template_ekyjdel
//service_wohsbqh
//5pDuD2AqdU-n8mlGt
let isModalOpen = false
let contrastToggle = false;
 function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    } 
    else {
        document.body.classList.remove("dark-theme");
    }
}
function contact(event){
    event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible";

    emailjs .sendForm('service_wohsbqh',
     'template_ekyjdel'
    , event.target,
    '5pDuD2AqdU-n8mlGt')
    .then(()=>{
        // throw new Error("error");
    loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert('The email service is temporarily unavailable.');
    })

}
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
}
    isModalOpen = true;
    document.body.classList+=("modal__open");
    
}
