const emailEle = document.getElementById('email');
const usernameEle = document.getElementById('username');
const passwordEle = document.getElementById('password');

const accbtn = document.getElementById('acc_btn');
const inputEles = document.querySelectorAll('.input-form');

accbtn.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Successfully');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let passwordValue = passwordEle.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Username cannot be blank');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email cannot be blank');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email is invalid');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (passwordValue == '') {
        setError(passwordEle, 'Password cannot be blank');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
