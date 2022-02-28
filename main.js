window.onload = function() {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);
    let result = data.results[0];
    document.getElementById('avatar-img').src = result.picture.large;
    document.getElementById('full-name').innerHTML = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById('username').innerHTML = result.login.username;
    document.getElementById('email').innerHTML = result.email;
    document.getElementById('phone').innerHTML = result.phone;
    document.getElementById('city').innerHTML = result.location.city;
    document.getElementById('country').innerHTML = result.location.country;
}