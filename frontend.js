document.addEventListener('DOMContentLoaded', () => {
    // নিশ্চিত করুন যে আপনার ফর্মে এই আইডিটি আছে
    const form = document.getElementById('signup-form'); 

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // ফর্মের ডিফল্ট সাবমিশন আটকানো
            
            // ইনপুট ফিল্ড থেকে ডেটা সংগ্রহ
            const signupData = {
                // আপনার ইনপুট ফিল্ডের সঠিক আইডি ব্যবহার করুন
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirm-password').value
            };

            try {
                // Node.js সার্ভারের এন্ডপয়েন্টে ডেটা পাঠানো
                const response = await fetch('http://localhost:3000/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(signupData),
                });

                const result = await response.json(); 

                if (response.ok) {
                    alert('সাইন আপ সফল! ' + result.message);
                    form.reset(); 
                } else {
                    alert('সাইন আপ ব্যর্থ: ' + result.message);
                }
            } catch (error) {
                console.error('Network Error:', error);
                alert('সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি।');
            }
        });
    }
});