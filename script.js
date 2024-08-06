function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    function goToHome() {
        window.location.href = 'index.html';
    }

    
}

// Show the home screen by default
showScreen('home-screen');
