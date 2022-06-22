/**
 * Obtener acceso al botón crear juego del html
 */
const btnCreateGame = document.getElementById('btnCreateGame');
/**
 * Función que se ejecuta al hacer click sobre el botón Crear Juego
 * @param {*} e parámetro para llamar a la función preventDefault y 
 * evitar que la página se recargue antes de terminar la ejecución de 
 * todas las funciones.
 */
const eventb = async (e) => {
    e.preventDefault();

    await clearDbBet();
    await clearDbGamer();
    const message = await saveGamers();

    if (message === 'Exito') {
        console.log('Nuevo juego creado');
        window.location.href = "http://localhost:3000/startGame";
    } else {
        alert('Debe ingresar nombres válidos');
    }

};
btnCreateGame.addEventListener('click', eventb);
/**
 * Función para limpiar la base de datos de los jugadores.
 */
const clearDbGamer = async () => {

    const res = await fetch('http://localhost:3000/game/gamers/fffff-ggg-jjjjj', {
        method: 'DELETE',

    });

    const result = await res.json();

    const { message } = result;
    console.log(message, '(Limpieza de jugadores)');

};
/**
 * Función para limpiar la base de datos de las apuestas.
 */
const clearDbBet = async () => {

    const res = await fetch('http://localhost:3000/game/bets/fffff-ggg-jjjjj', {
        method: 'DELETE',
    });

    const result = await res.json();

    const { message } = result;

    console.log(message, 'Limpieza de apuestas');

};

/**
 * Función para guardar en base de datos los nombres de los jugardores.
 * @returns Cadena de texto Exito o Error, dependiendo si los datos fueron o no
 * guardados, respectivamente.
 */
const saveGamers = async () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const name3 = document.getElementById('name3').value;

    const data = {

        "gamers": [
            { "nameGamer": name1, "idGamer": "5257b4d6-5c87-4871-93c3-b2b9ce04d706" },
            { "nameGamer": name2, "idGamer": "8dda6205-f54c-4643-a017-71b6f0353319" },
            { "nameGamer": name3, "idGamer": "e5834d8e-5195-41fc-993e-c731dbce4fab" }]

    }

    const res = await fetch('http://localhost:3000/createGame', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    var { message } = result;

    return message;
};










