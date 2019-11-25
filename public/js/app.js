document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.news-wrapper').forEach(link => {
        link.addEventListener('click', function (event) {
            let url = link.getAttribute("data-url");
            window.open(url, '_blank');
        });
    });
});