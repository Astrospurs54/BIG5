let cars = [];

document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.getElementById('car-grid');
    const modal = document.getElementById('car-modal');
    const modalClose = document.getElementById('modal-close');

    // Fetch cars data
    fetch('cars.json')
        .then(response => response.json())
        .then(data => {
            cars = data;
            renderCars();
        })
        .catch(error => console.error('Error fetching cars:', error));

    // Render Cars
    function renderCars() {
        carGrid.innerHTML = '';

        cars.forEach(car => {
            const card = document.createElement('div');
            card.className = 'car-card';
            card.innerHTML = `
                <div class="relative">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                </div>
                <div  class="car-info-div">
                    <div class="car-brand">${car.brand}</div>

                    <h3>${car.model}</h3>
                    <div class="car-price">${car.price}</div>
                    <div class="car-year-millage">
                        ${car.year} • ${car.mileage}
                    </div>
                </div>
            `;
            card.addEventListener('click', () => showCarModal(car));
            carGrid.appendChild(card);
        });
    }

    // Show Modal
    function showCarModal(car) {
        selectedCar = car;
        document.getElementById('modal-image').src = car.image;
        document.getElementById('modal-brand').textContent = car.brand;
        document.getElementById('modal-model').textContent = car.model;
        document.getElementById('modal-year').textContent = `${car.year} • Lilongwe`;
        document.getElementById('modal-price').textContent = car.price;
        document.getElementById('modal-mileage').textContent = car.mileage;
        document.getElementById('modal-engine').textContent = car.engine;
        document.getElementById('modal-trans').textContent = car.transmission;
        document.getElementById('modal-fuel').textContent = car.fuel;
        document.getElementById('modal-description').textContent = car.description;

        modal.style.display = 'flex';
    }

    window.contactSeller = function() {
        if (!selectedCar) {
            alert("No car selected. Please open a vehicle before contacting the seller.");
            return;
        }

        const form = document.forms['contact-form'];
        if (!form) {
            alert("Contact form not found.");
            return;
        }

        const commentField = form.querySelector('textarea[name="Comment"]');
        if (commentField) {
            commentField.value = `Interested in ${selectedCar.brand} ${selectedCar.model} (${selectedCar.year})\nPrice: ${selectedCar.price}\nMileage: ${selectedCar.mileage}\nEngine: ${selectedCar.engine}\nTransmission: ${selectedCar.transmission}\nFuel: ${selectedCar.fuel}\nDescription: ${selectedCar.description}`;
        }

        modal.style.display = 'none';

        if (typeof form.requestSubmit === 'function') {
            form.requestSubmit();
        } else {
            form.submit();
        }
    };

    // Close Modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});


//slide menu

 const toggleBtn =document.querySelector(".btn-toggle")
    const dropdown =document.querySelector(".slide-menu")
    const dropdownLinks = document.querySelectorAll(".slide-menu a")
    

    toggleBtn.onclick = function (){ 
        dropdown.classList.toggle("open")
        const isOpen = dropdown.classList.contains("open")
    }
    dropdownLinks.forEach(link => {
        link.addEventListener("click", () => {
            dropdown.classList.remove("open");
        });
    });




 