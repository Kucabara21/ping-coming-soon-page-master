const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    validation();
})

function validation(){
    const input = document.querySelector('input');
    const errorMsg = document.querySelector('form span')
    const emailFormat = /\S+@\S+\.\S+/
    if(input.value.match(emailFormat)){
        form.classList.remove('active');
        errorMsg.innerHTML = '';
 
    }
    else{
        form.classList.add('active');
        errorMsg.innerHTML = 'Please provide a valid email address';
    }
}