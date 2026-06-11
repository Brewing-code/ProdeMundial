// Esperamos a que todo el HTML esté cargado en la memoria
document.addEventListener('DOMContentLoaded', () => {
    
    const partidos = [
        { id: 1, equipoLocal: "Argentina", equipoVisitante: "Brasil" },
        { id: 2, equipoLocal: "España", equipoVisitante: "Alemania" }
    ];

    const contenedor = document.getElementById('contenedor-partidos');

    if (contenedor) {
        partidos.forEach(partido => {
            const div = document.createElement('div');
            div.className = 'partido-card';
            div.innerHTML = `
                <span>${partido.equipoLocal} vs ${partido.equipoVisitante}</span>
                <div>
                    <input type="number" placeholder="L">
                    <input type="number" placeholder="V">
                </div>
            `;
            contenedor.appendChild(div);
        });
    } else {
        console.error("El contenedor no existe en el HTML");
    }
});