const trucks = [
    { brand: "Volvo", model: "FH16", horsepower: 750, torque: 3550, fuelConsumption: "3.2 km/l", price: "R$ 1.100.000", feedback: "Excelente desempenho para viagens longas." },
    { brand: "Volvo", model: "FMX", horsepower: 540, torque: 2650, fuelConsumption: "3.5 km/l", price: "R$ 950.000", feedback: "Ideal para operações em terrenos difíceis." },
    { brand: "Scania", model: "R500", horsepower: 500, torque: 2550, fuelConsumption: "3.8 km/l", price: "R$ 980.000", feedback: "Confortável e econômico em combustível." },
    { brand: "Scania", model: "S650", horsepower: 650, torque: 3000, fuelConsumption: "3.3 km/l", price: "R$ 1.200.000", feedback: "Potência elevada para cargas pesadas." },
    { brand: "Mercedes", model: "Actros", horsepower: 625, torque: 3000, fuelConsumption: "3.5 km/l", price: "R$ 1.050.000", feedback: "Boa tecnologia embarcada e segurança." },
    { brand: "Mercedes", model: "Atego 3030", horsepower: 290, torque: 1200, fuelConsumption: "4.5 km/l", price: "R$ 450.000", feedback: "Ótimo para serviços urbanos e curtas distâncias." },
    { brand: "DAF", model: "XF 105", horsepower: 510, torque: 2500, fuelConsumption: "3.7 km/l", price: "R$ 940.000", feedback: "Bom custo-benefício e facilidade de manutenção." },
    { brand: "DAF", model: "CF 85", horsepower: 460, torque: 2000, fuelConsumption: "4.0 km/l", price: "R$ 890.000", feedback: "Versátil para diferentes tipos de transporte." },
    { brand: "MAN", model: "TGX 28.440", horsepower: 440, torque: 2100, fuelConsumption: "4.0 km/l", price: "R$ 890.000", feedback: "Confiável e fácil de operar." },
    { brand: "MAN", model: "TGX 18.500", horsepower: 500, torque: 2500, fuelConsumption: "3.9 km/l", price: "R$ 980.000", feedback: "Alta performance com economia." },
    { brand: "Iveco", model: "Hi-Way 800S44", horsepower: 440, torque: 1900, fuelConsumption: "4.2 km/l", price: "R$ 870.000", feedback: "Bom para longas distâncias com baixo custo." },
    { brand: "Iveco", model: "Tector 24-280", horsepower: 280, torque: 950, fuelConsumption: "4.8 km/l", price: "R$ 420.000", feedback: "Compacto e eficiente para transporte leve." },
];

const truckList = document.getElementById("truck-list");

function displayTrucks(filter) {
    truckList.innerHTML = "";
    const filteredTrucks = filter
        ? trucks.filter((truck) => truck.brand === filter)
        : trucks;

    filteredTrucks.forEach((truck) => {
        const truckCard = document.createElement("div");
        truckCard.className = "truck-card";
        truckCard.innerHTML = `
            <h3>${truck.brand} ${truck.model}</h3>
            <p><strong>Potência:</strong> ${truck.horsepower} HP</p>
            <p><strong>Torque:</strong> ${truck.torque} Nm</p>
            <p><strong>Consumo de Combustível:</strong> ${truck.fuelConsumption}</p>
            <p><strong>Preço:</strong> ${truck.price}</p>
            <p><strong>Feedback:</strong> ${truck.feedback}</p>
        `;
        truckList.appendChild(truckCard);
    });
}

function filterTrucks(brand) {
    displayTrucks(brand);
}

// Inicializa a página
document.addEventListener("DOMContentLoaded", () => {
    displayTrucks();
});
