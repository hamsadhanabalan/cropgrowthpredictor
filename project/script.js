document.getElementById('crop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);

    let result = '';

    if (temperature > 25 && humidity > 60 && rainfall > 100) {
        result = 'The conditions are ideal for crop growth!';
    } else if (temperature < 15 || humidity < 40 || rainfall < 50) {
        result = 'The conditions are poor for crop growth.';
    } else {
        result = 'The conditions are moderate for crop growth.';
    }

    document.getElementById('result').innerText = result;
});
