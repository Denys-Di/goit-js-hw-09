let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.label-container');

form.addEventListener('input', (event) => {
    const { name, value } = event.target;

    formData[name] = value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        formData = JSON.parse(savedData);

        form.elements.email.value = formData.email || '';
        form.elements.message.value = formData.message || '';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === '' || message === '') {
        alert('Fill please all fields');
        return;
    }

    console.log({ email, message });

    form.reset();
    formData = { email: "", message: "" };
    localStorage.removeItem('feedback-form-state');
});

