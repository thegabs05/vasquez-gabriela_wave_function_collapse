const celdas = [];
const RETICULA = 4;

// ancho y alto de la celda
let ancho;
let alto;

const azulejos = [];
const NA = 5; //numero de azulejos

const reglas = [
  //reglas de los bordes de cada azulejo
  {
    //tile 0
    UP: 0,
    RIGTH: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tile1
    UP: 1,
    RIGTH: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile2
    UP: 2,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile3
    UP: 0,
    RIGTH: 3,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile4
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 3,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  // ancho y alto de la celda
  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  celdas[8].colapsada = true;
  celdas[3].colapsada = true;

  celdas[12].opciones = [5, 6, 8];
  celdas[4].opciones = [4, 7, 12];
  celdas[6].opciones = [9, 7, 12];
  celdas[1].opciones = [6, 4, 8, 10];
  celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  background(111);
  const celdasDisponibles = celdas.filter((celda) => celda.colapsada == false);
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });
    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          image(azulejos[celdaActual.opciones[0]], x, y);
        }
      }
    }
  }

  noLoop();
}
