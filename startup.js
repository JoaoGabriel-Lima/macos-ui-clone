if (localStorage.hasOwnProperty('ligado') == true) {
    if (localStorage.getItem('ligado') == 1) {

    } else {
        window.location.href = 'boot';
    }

} else {
    window.location.href = 'boot';
}

