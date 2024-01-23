document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("complimentCarousel");
    const randomButton = document.getElementById("randomButton");

    const compliments = [
        "You make every moment special.",
        "Your smile lights up my day.",
        "I appreciate your kindness and generosity.",
        // Add more compliments as needed
    ];

    // Initialize the carousel with compliments
    populateCarousel(compliments);

    // Button click event for getting a random compliment
    randomButton.addEventListener("click", function () {
        shuffleArray(compliments);
        populateCarousel(compliments);
    });

    // Function to populate the carousel with compliments
    function populateCarousel(complimentArray) {
        carousel.innerHTML = "";
        complimentArray.forEach((compliment) => {
            const complimentItem = document.createElement("div");
            complimentItem.classList.add("carousel-item");
            complimentItem.innerText = compliment;
            carousel.appendChild(complimentItem);
        });
    }

    // Function to shuffle array elements
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});


/*heyyy*/