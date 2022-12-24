console.log('running')
const btn = document.getElementById('submit') 

function foo(){
    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPassword');
    const dict = JSON.stringify({'Email': email.value, 'Password': password.value});
    console.log('Called...');
    console.log(dict);
}