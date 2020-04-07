const submitForm = () => {
    const form = document.querySelector('.request-form');

    const handleSubmit = function(e) {
        e.preventDefault();

        const {
            name: {value: name}, 
            phone: {value: phone}, 
            email: {value: email}
        } = this.elements;

        const params = new URLSearchParams();
        params.append('name', name);
        params.append('phone', phone);
        params.append('email', email);

        axios.post('/mail.php', params)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    form.addEventListener('submit', handleSubmit);
}