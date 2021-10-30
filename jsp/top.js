    //Defino en const los elementos que uso en el formulario
const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const comments = document.getElementById('comments');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //Obtener valores de los input
    const usernameValue = username.value;
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const commentsValue = comments.value.trim();

    if(usernameValue === '') {
        //mostrar error nombre
        setErrorFor(username, 'Username cannot be blank');
    } else {
            //mostrar exito nombre
            setSuccessFor(username);
    }

    if(lastnameValue === '') {
        //mostrar error apellido
        setErrorFor(lastname, 'Last Name cannot be blank');
    } else {
            //mostrar exito apellido
            setSuccess(lastname);
        }    

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(commentsValue === '') {
        //mostrar error comentarios
        setErrorFor(comments, 'This space cannot be blank');
    } else {
            //mostrar exito comentarios
            setSuccess(comments);
        }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}