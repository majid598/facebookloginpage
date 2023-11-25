var istatus = document.querySelector('#abc')

var login = document.querySelector('#login')

var ad = 0

login.addEventListener("click",function(){
    if (ad == 0){
            istatus.innerHTML = "logedd in"
    istatus.style.color = "red"
    console.log('hua')
        ad = 1
    }else{
    istatus.innerHTML = "Login into Facebook"
    istatus.style.color = "black"
    console.log('hua')
    }
})