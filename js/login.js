document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        });

        const result = await response.json();

        if (response.ok) {
            alert('স্বাগতম, ' + result.user + '!');
            window.location.href = 'dashboard.html'; // লগইন সফল হলে ড্যাশবোর্ডে যাবে
        } else {
            alert('লগইন ব্যর্থ: ' + result.message);
        }
    } catch (error) {
        alert('সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি।');
    }
});