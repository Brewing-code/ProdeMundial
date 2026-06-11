// Tu configuración real de Firebase inyectada en la versión tradicional
const firebaseConfig = {
  apiKey: "AIzaSyAvl-qHvxqdWThR9Lvo31aKtYcisZjj5YE",
  authDomain: "prodemundial2026-2fef2.firebaseapp.com",
  databaseURL: "https://prodemundial2026-2fef2-default-rtdb.firebaseio.com",
  projectId: "prodemundial2026-2fef2",
  storageBucket: "prodemundial2026-2fef2.firebasestorage.app",
  messagingSenderId: "69570347100",
  appId: "1:69570347100:web:cb60738c1b0beea4832699",
  measurementId: "G-94GNWSW3QK"
};

// Inicialización global directa (Sin imports problemáticos)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    let usuarioEmail = "";
    let predicciones = {};

    const datosProde = {
        "zona-a": [
            { id: 1, local: "México", visita: "Sudáfrica", fecha: "11/06" },
            { id: 2, local: "Corea del Sur", visita: "Rep. Checa", fecha: "11/06" },
            { id: 3, local: "Rep. Checa", visita: "Sudáfrica", fecha: "18/06" },
            { id: 4, local: "México", visita: "Corea del Sur", fecha: "19/06" },
            { id: 5, local: "Rep. Checa", visita: "México", fecha: "24/06" },
            { id: 6, local: "Sudáfrica", visita: "Corea del Sur", fecha: "24/06" }
        ],
        "zona-b": [
            { id: 7, local: "Canadá", visita: "Bosnia", fecha: "12/06" },
            { id: 8, local: "Catar", visita: "Suiza", fecha: "13/06" },
            { id: 9, local: "Suiza", visita: "Bosnia", fecha: "18/06" },
            { id: 10, local: "Canadá", visita: "Catar", fecha: "18/06" },
            { id: 11, local: "Suiza", visita: "Canadá", fecha: "24/06" },
            { id: 12, local: "Bosnia", visita: "Catar", fecha: "24/06" }
        ],
        "zona-c": [
            { id: 13, local: "Brasil", visita: "Marruecos", fecha: "13/06" },
            { id: 14, local: "Haití", visita: "Escocia", fecha: "13/06" },
            { id: 15, local: "Escocia", visita: "Marruecos", fecha: "19/06" },
            { id: 16, local: "Brasil", visita: "Haití", fecha: "19/06" },
            { id: 17, local: "Brasil", visita: "Escocia", fecha: "24/06" },
            { id: 18, local: "Marruecos", visita: "Haití", fecha: "24/06" }
        ],
        "zona-d": [
            { id: 19, local: "EE.UU.", visita: "Paraguay", fecha: "12/06" },
            { id: 20, local: "Australia", visita: "Turquía", fecha: "13/06" },
            { id: 21, local: "EE.UU.", visita: "Australia", fecha: "19/06" },
            { id: 22, local: "Turquía", visita: "Paraguay", fecha: "19/06" },
            { id: 23, local: "Turquía", visita: "EE.UU.", fecha: "25/06" },
            { id: 24, local: "Paraguay", visita: "Australia", fecha: "25/06" }
        ],
        "zona-e": [
            { id: 25, local: "Alemania", visita: "Curazao", fecha: "14/06" },
            { id: 26, local: "Costa de Marfil", visita: "Ecuador", fecha: "14/06" },
            { id: 27, local: "Alemania", visita: "Costa de Marfil", fecha: "20/06" },
            { id: 28, local: "Ecuador", visita: "Curazao", fecha: "20/06" },
            { id: 29, local: "Ecuador", visita: "Alemania", fecha: "25/06" },
            { id: 30, local: "Curazao", visita: "Costa de Marfil", fecha: "25/06" }
        ],
        "zona-f": [
            { id: 31, local: "Países Bajos", visita: "Japón", fecha: "14/06" },
            { id: 32, local: "Suecia", visita: "Túnez", fecha: "14/06" },
            { id: 33, local: "Países Bajos", visita: "Suecia", fecha: "20/06" },
            { id: 34, local: "Túnez", visita: "Japón", fecha: "20/06" },
            { id: 35, local: "Túnez", visita: "Países Bajos", fecha: "25/06" },
            { id: 36, local: "Japón", visita: "Suecia", fecha: "25/06" }
        ],
        "zona-g": [
            { id: 37, local: "Bélgica", visita: "Egipto", fecha: "15/06" },
            { id: 38, local: "Irán", visita: "Nueva Zelanda", fecha: "15/06" },
            { id: 39, local: "Bélgica", visita: "Irán", fecha: "21/06" },
            { id: 40, local: "Nueva Zelanda", visita: "Egipto", fecha: "21/06" },
            { id: 41, local: "Nueva Zelanda", visita: "Bélgica", fecha: "27/06" },
            { id: 42, local: "Egipto", visita: "Irán", fecha: "27/06" }
        ],
        "zona-h": [
            { id: 43, local: "España", visita: "Cabo Verde", fecha: "15/06" },
            { id: 44, local: "Arabia Saudita", visita: "Uruguay", fecha: "15/06" },
            { id: 45, local: "España", visita: "Arabia Saudita", fecha: "21/06" },
            { id: 46, local: "Uruguay", visita: "Cabo Verde", fecha: "21/06" },
            { id: 47, local: "Uruguay", visita: "España", fecha: "26/06" },
            { id: 48, local: "Cabo Verde", visita: "Arabia Saudita", fecha: "26/06" }
        ],
        "zona-i": [
            { id: 49, local: "Francia", visita: "Senegal", fecha: "16/06" },
            { id: 50, local: "Irak", visita: "Norway", fecha: "16/06" },
            { id: 51, local: "Francia", visita: "Irak", fecha: "22/06" },
            { id: 52, local: "Norway", visita: "Senegal", fecha: "22/06" },
            { id: 53, local: "Norway", visita: "Francia", fecha: "26/06" },
            { id: 54, local: "Senegal", visita: "Irak", fecha: "26/06" }
        ],
        "zona-j": [
            { id: 55, local: "Argentina", visita: "Argelia", fecha: "16/06" },
            { id: 56, local: "Austria", visita: "Jordania", fecha: "17/06" },
            { id: 57, local: "Argentina", visita: "Austria", fecha: "22/06" },
            { id: 58, local: "Jordania", visita: "Argelia", fecha: "22/06" },
            { id: 59, local: "Jordania", visita: "Argentina", fecha: "27/06" },
            { id: 60, local: "Argelia", visita: "Austria", fecha: "27/06" }
        ],
        "zona-k": [
            { id: 61, local: "Portugal", visita: "RD Congo", fecha: "17/06" },
            { id: 62, local: "Uzbekistán", visita: "Colombia", fecha: "17/06" },
            { id: 63, local: "Portugal", visita: "Uzbekistán", fecha: "23/06" },
            { id: 64, local: "Colombia", visita: "RD Congo", fecha: "23/06" },
            { id: 65, local: "Colombia", visita: "Portugal", fecha: "27/06" },
            { id: 66, local: "RD Congo", visita: "Uzbekistán", fecha: "27/06" }
        ],
        "zona-l": [
            { id: 67, local: "Inglaterra", visita: "Croacia", fecha: "17/06" },
            { id: 68, local: "Ghana", visita: "Panamá", fecha: "17/06" },
            { id: 69, local: "Inglaterra", visita: "Ghana", fecha: "23/06" },
            { id: 70, local: "Panamá", visita: "Croacia", fecha: "23/06" },
            { id: 71, local: "Panamá", visita: "Inglaterra", fecha: "27/06" },
            { id: 72, local: "Croacia", visita: "Ghana", fecha: "27/06" }
        ],
        "dieciseisavos": [
            { id: 201, local: "1º Grupo A", visita: "Mejor 3º", fecha: "28/06" }
        ],
        "octavos": [
            { id: 301, local: "Ganador 16avos 1", visita: "Ganador 16avos 2", fecha: "04/07" }
        ],
        "cuartos": [
            { id: 401, local: "Ganador Octavos 1", visita: "Ganador Octavos 2", fecha: "09/07" }
        ],
        "semifinales": [
            { id: 501, local: "Ganador Cuartos 1", visita: "Ganador Cuartos 2", fecha: "14/07" }
        ],
        "final": [
            { id: 601, local: "Ganador Semis 1", visita: "Ganador Semis 2", fecha: "19/07" }
        ]
    };

    const selectFase = document.getElementById('select-fase');
    const contenedor = document.getElementById('contenedor-partidos');
    const btnLogin = document.getElementById('btn-login');
    const emailInput = document.getElementById('auth-email');
    const userDisplay = document.getElementById('user-display');
    const faseControls = document.getElementById('fase-controls');
    const submitContainer = document.getElementById('submit-container');
    const btnSubmitProde = document.getElementById('btn-submit-prode');
    const errorMessage = document.getElementById('error-message');

    btnLogin.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (!email || !email.includes('@')) {
            alert('Por favor, ingresa un correo válido.');
            return;
        }

        usuarioEmail = email.replace(/\./g, '_'); 
        userDisplay.innerText = `Usuario: ${email}`;
        userDisplay.style.display = 'inline';
        emailInput.style.display = 'none';
        btnLogin.style.display = 'none';
        faseControls.style.display = 'block';

        // Consulta Firebase
        db.ref(`usuarios/${usuarioEmail}`).once('value')
            .then((snapshot) => {
                if (snapshot.exists()) {
                    predicciones = snapshot.val().pronosticos || {};
                    submitContainer.style.display = 'none'; // Oculta enviar
                    renderizarBloqueado(selectFase.value);
                } else {
                    submitContainer.style.display = 'block'; // Muestra enviar
                    renderizar(selectFase.value);
                }
            })
            .catch((error) => {
                console.error("Error Firebase:", error);
                submitContainer.style.display = 'block';
                renderizar(selectFase.value);
            });
    });

    function renderizar(fase) {
        contenedor.innerHTML = "";
        const partidos = datosProde[fase] || [];

        partidos.forEach(p => {
            const div = document.createElement('div');
            div.className = 'partido-card';

            const valorLocal = predicciones[`${p.id}_L`] || '';
            const valorVisita = predicciones[`${p.id}_V`] || '';

            div.innerHTML = `
                <span class="partido-info">
                    ${p.local} vs ${p.visita} 
                    <small>Fecha: ${p.fecha}</small>
                </span>
                <div class="marcador-inputs">
                    <input type="number" id="input-${p.id}-L" value="${valorLocal}" placeholder="L">
                    <input type="number" id="input-${p.id}-V" value="${valorVisita}" placeholder="V">
                </div>
            `;
            contenedor.appendChild(div);

            div.querySelectorAll('input').forEach(input => {
                input.addEventListener('input', (e) => {
                    const idPartido = p.id;
                    const tipoInput = e.target.id.endsWith('-L') ? 'L' : 'V';
                    predicciones[`${idPartido}_${tipoInput}`] = e.target.value;
                });
            });
        });
    }

    function renderizarBloqueado(fase) {
        contenedor.innerHTML = "";
        const partidos = datosProde[fase] || [];

        partidos.forEach(p => {
            const div = document.createElement('div');
            div.className = 'partido-card';

            const valorLocal = predicciones[`${p.id}_L`] || '';
            const valorVisita = predicciones[`${p.id}_V`] || '';

            div.innerHTML = `
                <span class="partido-info">
                    ${p.local} vs ${p.visita} 
                    <small>Fecha: ${p.fecha}</small>
                </span>
                <div class="marcador-inputs">
                    <input type="number" id="input-${p.id}-L" value="${valorLocal}" placeholder="-" disabled>
                    <input type="number" id="input-${p.id}-V" value="${valorVisita}" placeholder="-" disabled>
                </div>
            `;
            contenedor.appendChild(div);
        });
    }

    btnSubmitProde.addEventListener('click', () => {
        let faltanPartidos = false;
        for (let i = 1; i <= 72; i++) {
            if (predicciones[`${i}_L`] === undefined || predicciones[`${i}_L`] === "" ||
                predicciones[`${i}_V`] === undefined || predicciones[`${i}_V`] === "") {
                faltanPartidos = true;
                break;
            }
        }

        if (faltanPartidos) {
            errorMessage.innerText = "Error: Debes completar todos los resultados de la Fase de Grupos (72 partidos) antes de enviar.";
            return;
        }

        errorMessage.innerText = "";

        // --- MAPEO Y FORMATEO DE LOS RESULTADOS PARA EL CORREO ---
        const prodeFormateadoParaEmail = {};

        for (const fase in datosProde) {
            const partidosDeEstaFase = datosProde[fase];
            const listaPartidosFormateados = [];

            partidosDeEstaFase.forEach(p => {
                const golesL = predicciones[`${p.id}_L`] !== undefined && predicciones[`${p.id}_L`] !== "" ? predicciones[`${p.id}_L`] : "-";
                const golesV = predicciones[`${p.id}_V`] !== undefined && predicciones[`${p.id}_V`] !== "" ? predicciones[`${p.id}_V`] : "-";
                
                const lineaPartido = `${p.local}/${golesL} vs ${p.visita}/${golesV} (${p.fecha})`;
                listaPartidosFormateados.push(lineaPartido);
            });

            const nombreFaseLegible = fase.toUpperCase().replace("-", " ");
            prodeFormateadoParaEmail[nombreFaseLegible] = listaPartidosFormateados;
        }

        // 1. Guardar en Firebase
        db.ref(`usuarios/${usuarioEmail}`).set({
            email: usuarioEmail.replace(/_/g, '.'),
            pronosticos: predicciones,
            fechaEnvio: new Date().toISOString()
        })
        .then(() => {
            console.log("¡Guardado en Firebase exitoso!");
            
            // 2. Disparar el Correo formateado a Formspree
            return fetch("https://formspree.io/f/xrevyzwn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _subject: `Nuevo Prode Mundial de: ${usuarioEmail.replace(/_/g, '.')}`,
                    emailDestino: "francomarolla@gmail.com",
                    participante: usuarioEmail.replace(/_/g, '.'),
                    predicciones_fixture: prodeFormateadoParaEmail
                })
            });
        })
        .then(() => {
            alert("¡Prode enviado con éxito! Guardado en Firebase y notificado por correo.");
            window.location.reload(); 
        })
        .catch((err) => {
            console.error(err);
            alert("Guardado completo.");
            window.location.reload(); 
        });
    });

    selectFase.addEventListener('change', (e) => {
        if (usuarioEmail) {
            if (submitContainer.style.display === 'none') {
                renderizarBloqueado(e.target.value);
            } else {
                renderizar(e.target.value);
            }
        }
    });
});