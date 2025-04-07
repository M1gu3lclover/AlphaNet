document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener valores
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación básica
    if (!email || !password) {
        errorMessage.textContent = "Todos los campos son obligatorios.";
        return;
    }

    // Validar formato de email (simple)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.textContent = "Ingresa un correo electrónico válido.";
        return;
    }

    // Simular autenticación (en un caso real, aquí iría una petición HTTP)
    if (password.length < 6) {
        errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Si todo está correcto
    errorMessage.textContent = "";
    alert(`¡Bienvenido, ${email}!`);
    // Redirigir a otra página (ej: dashboard.html)
    // window.location.href = "dashboard.html";
});