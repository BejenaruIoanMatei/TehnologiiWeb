//  pentru a face header-ul fixat dupa scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

// pentru efectul de intunecare al imaginilor si afisarea mesajului la hover
var imageItems = document.querySelectorAll('.image-item');
imageItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        var image = item.querySelector('img');
        image.classList.add('darken');
    });
    item.addEventListener('mouseout', function() {
        var image = item.querySelector('img');
        image.classList.remove('darken');
    });
});

