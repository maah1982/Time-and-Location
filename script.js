document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();

        document.getElementById('time').textContent = `Time: ${time}`;
        document.getElementById('date').textContent = `Date: ${date}`;
    }

    function updateLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                document.getElementById('location').textContent = `Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
            }, error => {
                document.getElementById('location').textContent = 'Unable to retrieve location';
            });
        } else {
            document.getElementById('location').textContent = 'Geolocation is not supported by this browser';
        }
    }

    updateTime();
    updateLocation();
    setInterval(updateTime, 1000);
});
