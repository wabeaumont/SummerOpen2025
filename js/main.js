document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }
});
