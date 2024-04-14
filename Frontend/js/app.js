
        // JavaScript pentru a face header-ul fixat după scroll
        window.addEventListener('scroll', function() {
            var header = document.querySelector('header');
            if (window.scrollY > header.offsetHeight) {
                header.classList.add('fixed-header');
            } else {
                header.classList.remove('fixed-header');
            }
        });

        // JavaScript pentru întunecarea imaginilor și afișarea mesajului text la hover
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

        document.getElementById("beneficiaries-toggle").addEventListener("click", function() {
        var checkboxOptions = document.getElementById("checkbox-options");
        if (checkboxOptions.style.display === "none") {
            checkboxOptions.style.display = "block";
        } else {
            checkboxOptions.style.display = "none";
        }
    });

    document.getElementById("submit-trip").addEventListener("click", function() {
    var checkboxes = document.querySelectorAll('.checkbox-options input[type="checkbox"]');
    var checked = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checked = true;
        }
    });

    if (checked) {
        // Cel puțin un checkbox este bifat, deci putem crea călătoria
        // Aici puteți adăuga logica suplimentară pentru crearea călătoriei
        // De exemplu, puteți trimite datele către server sau puteți afișa un mesaj de confirmare
        alert("Călătoria a fost creată!");
    } else {
        // Niciun checkbox nu este bifat, deci nu putem crea călătoria
        // Aici puteți afișa un mesaj de eroare sau puteți face altceva pentru a indica utilizatorului că trebuie să bifeze cel puțin un checkbox
        alert("Trebuie să selectați cel puțin un beneficiar!");
    }
});

