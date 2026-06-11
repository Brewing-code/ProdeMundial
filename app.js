function mostrarPartidos() {
    const contenedor = document.getElementById('contenedor-partidos');
    
    partidos.forEach(partido => {
        const div = document.createElement('div');
        // Aquí agregamos la clase "partido-card"
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
}