# Página dinámica

Se hace la creación de un juego utilizando páginas dinámicas.

Nota: para empezar el juego se debe dirigir a la url: http://localhost:3000/createGame

Comportamiento del juego: consiste en ingresar los nombres de tres jugadores en un 
formulario inicial, luego se guardan las apuestas de cada jugador en otro 
formulario escogiendo números entre 1 y 6, más tarde, desde un botón se lanza un dado el
cual dará como resultado un número aleatorio entre 1 y 6. Si la apuesta de alguno de
los usuarios coincide con el resultado del dado, el juego termina y se muestra el 
ganador de este. Si se ingresan dos apuestas iguales, ganará quien la ingrese primero.

Nota: luego de creado el juego el usuario puede ver el estado del juego haciendo
click en el texto de la parte inferior "Ver estado del juego".

Funcionamiento interno: al ingresar a la página de inicio (http://localhost:3000/createGame)
se pide en un formulario los nombres de tres jugadores, luego el usuario hace click en el 
botón "Crear juego", el cual a través de APIS limpia las colecciones de la base de datos
y guarda una nueva con los nombres de los jugadores y unos ids que son puestos por defecto 
desde el backend, si hay campos en blanco se mostrará una alerta; finalmente se redirige a la
url http://localhost:3000/startGame. Se piden en un formulario las apuestas de los tres jugadores,
luego se validan, en caso de estar en blanco, no estar entre 6 y 1, o no ser números; se lanza una 
alerta y se le pide al usuario que ingrese de nuevo apuestas válidas. Al pulsar el botón "Guardar 
apuestas" estas se guardan en la colección "bets" de la base de datos "gamers", luego los inputs 
se desabilitan y se habilita el botón lanzar dado, el cuál hará la lógica descrita en "Comportamiento
de juego" para finalmente dirigir a la url http://localhost:3000/game/fffff-ggg-jjjjj/winner que 
muestra al ganador del juego.

Nota: siempre habrá un solo documento en las colecciones ya que al crear un nuevo juego se elimina
la anterior y se crear una nueva.
