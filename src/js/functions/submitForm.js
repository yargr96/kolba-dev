const submitForm = () => {
    const form = document.querySelector('.request-form');
    let pending = false;

    const handleSubmit = function(e) {
        e.preventDefault();
        if (pending) return;

        const {
            name: {value: name}, 
            phone: {value: phone}, 
            email: {value: email}
        } = this.elements;

        const params = new URLSearchParams();
        params.append('name', name);
        params.append('phone', phone);
        params.append('email', email);

        pending = true;
        axios.post('/mail.php', params)
            .then(res => {               
                if (res.statusText === "OK") {
                console.log(res);

                    document.querySelector('.request-form').style.display = "none";
                    document.querySelector('.thankyou').style.display = "block";
                } else {
                    throw new Error();
                }
            })
            .catch(err => {
                document.querySelector('.request-form').style.display = "none";
                document.querySelector('.error').style.display = "block";
                console.error(err);
            })
            .finally(() => pending = false);
    }

    form.addEventListener('submit', handleSubmit);
}