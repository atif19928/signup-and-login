// Function for Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // CORRECTION: .value() se brackets () hata diye hain
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 1. Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // 2. Data Structure
        const userData = {
            name: name,
            email: email,
            password: password
        };

        // 3. Save to LocalStorage and SessionStorage
        localStorage.setItem('userAccount', JSON.stringify(userData));
        sessionStorage.setItem('activeUser', JSON.stringify(userData));

        // 4. Alert (Redirection line hata di hai taake form gayab na ho)
        
    });
}

// Function for Login Logic
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        // Retrieve Data from LocalStorage
        const savedData = JSON.parse(localStorage.getItem('userAccount'));

        // Check if account exists
        if (!savedData) {
            alert("No account found. Please signup first.");
            return;
        }

        // Check Email and Password
        if (savedData.email === email && savedData.password === password) {
            alert("Welcome back!");
            localStorage.setItem('lastLogin', new Date().toLocaleString());
            sessionStorage.setItem('isLoggedIn', 'true');
        } else {
            alert("Invalid email or password");
        }
    });
}

function togglePassword(inputId, btn) {
    let input = document.getElementById(inputId);
    let icon = btn.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
}