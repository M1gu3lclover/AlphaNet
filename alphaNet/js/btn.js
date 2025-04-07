// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón por su ID
    const loginBtn = document.getElementById('loginBtn');
    
    // Añadir evento click
    loginBtn.addEventListener('click', function() {
        // Redireccionar a login.html
        window.location.href = '/assets/login.html';
        
        // Otra opción para abrir en nueva pestaña:
        // window.open('login.html', '_blank');
    });
});