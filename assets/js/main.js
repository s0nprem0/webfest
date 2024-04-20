// Assume that I want to replace all images on the page
const images = document.querySelectorAll('img');

// Loop over them
[].forEach.call(images, function (ele) {
    ele.addEventListener('error', function (e) {
        e.target.src = '/path/to/404/image.png';
    });
});