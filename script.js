 const cars = [
            {
                id: 1,
                brand: "Toyota",
                model: "Land Cruiser Prado",
                year: 2023,
                price: "MK 185,000,000",
                mileage: "8,200 km",
                engine: "4.0L V6 Petrol",
                transmission: "Automatic",
                fuel: "Petrol",
                image: "assets/car1.webp",
                description: "Top condition 2023 Prado with full service history. Bull bars, roof rack, and upgraded sound system. Perfect for both city and bush driving."
            },
            {
                id: 2,
                brand: "Land Rover",
                model: "Defender 110",
                year: 2024,
                price: "MK 245,000,000",
                mileage: "3,100 km",
                engine: "3.0L Inline-6 Diesel",
                transmission: "Automatic",
                fuel: "Diesel",
                image: "https://picsum.photos/id/201/800/600",
                description: "Brand new condition Defender with premium interior. Panoramic roof, terrain response system and advanced off-road capabilities."
            },
            {
                id: 3,
                brand: "Mercedes-Benz",
                model: "GLE 450",
                year: 2022,
                price: "MK 135,000,000",
                mileage: "21,000 km",
                engine: "3.0L Turbo I6",
                transmission: "9G-Tronic",
                fuel: "Petrol",
                image: "https://picsum.photos/id/870/800/600",
                description: "Luxury SUV with AMG styling package, Burmester sound system and full Mercedes service history."
            },
            {
                id: 4,
                brand: "BMW",
                model: "X5 M50i",
                year: 2023,
                price: "MK 168,000,000",
                mileage: "12,500 km",
                engine: "4.4L Twin-Turbo V8",
                transmission: "Automatic",
                fuel: "Petrol",
                image: "https://picsum.photos/id/106/800/600",
                description: "Powerful and refined performance SUV. Laser headlights, gesture control and M Sport package."
            },
            {
                id: 5,
                brand: "Toyota",
                model: "Fortuner",
                year: 2024,
                price: "MK 92,000,000",
                mileage: "4,800 km",
                engine: "2.8L Diesel",
                transmission: "Automatic",
                fuel: "Diesel",
                image: "https://picsum.photos/id/133/800/600",
                description: "Extremely clean 2024 Fortuner. 7-seater with bull bar, tow hitch and excellent fuel economy."
            }
        ];




document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.getElementById('car-grid');
    const modal = document.getElementById('car-modal');
    const modalClose = document.getElementById('modal-close');

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
        alert("Thank you! Our team will contact you shortly.");
        modal.style.display = 'none';
    };

    // Close Modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Initialize
    renderCars();
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




 