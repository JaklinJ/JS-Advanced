function validate() {
    let textField = document.getElementById('email');
    let text = textField.value;

    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    textField.addEventListener('change', function() {
        if (pattern.test(textField.value)) {
            textField.classList.remove('error');
        } else {
            textField.classList.add('error');
        }
    })
}
