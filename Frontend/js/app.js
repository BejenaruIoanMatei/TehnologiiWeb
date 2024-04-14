
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

        // pentru partea de beneficiari si check-box din Explore
        document.getElementById("beneficiaries-toggle").addEventListener("click", function() {
        var checkboxOptions = document.getElementById("checkbox-options");
        if (checkboxOptions.style.display === "none") {
            checkboxOptions.style.display = "block";
        } else {
            checkboxOptions.style.display = "none";
        }
    });

    // la fel pentru partea de beneficiari - verifica sa fie macar o casuta checked
    document.getElementById("submit-trip").addEventListener("click", function() {
    var checkboxes = document.querySelectorAll('.checkbox-options input[type="checkbox"]');
    var checked = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checked = true;
        }
    });

    if (checked) {
        //macar un checkbox selectat
        alert("Congrats, your journey was created!");
    } else {
        //cand nu am niciun checkbox selectat
        alert("You must choose who gets the souvenir!");
    }
});

