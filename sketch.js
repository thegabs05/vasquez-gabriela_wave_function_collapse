const celdas = [];
const RETICULA = 18;

// ancho y alto de la celda
let ancho;
let alto;

const azulejos = [];

const reglas = [
  //reglas de los bordes de cada azulejo
  {
    //tile 0
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 1
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile 3
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 4
    UP: 0,
    RIGTH: 3,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 5
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile 6
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 7
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 8
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 9
    UP: 0,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 10
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 11
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 12
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 13
    UP: 0,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 14
    UP: 2,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 15
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 16
    UP: 0,
    RIGTH: 0,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 17
    UP: 2,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 18
    UP: 0,
    RIGTH: 3,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 19
    UP: 0,
    RIGTH: 3,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile 20
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile 21
    UP: 0,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 3,
  },
  {
    //tile 22
    UP: 0,
    RIGTH: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 23
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 24
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 25
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 26
    UP: 2,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 27
    UP: 2,
    RIGTH: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 28
    UP: 2,
    RIGTH: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 29
    UP: 3,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 30
    UP: 3,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 31
    UP: 3,
    RIGTH: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 32
    UP: 2,
    RIGTH: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 33
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 34
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 35
    UP: 3,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 2,
  },
  {
    //tile 36
    UP: 2,
    RIGTH: 2,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 37
    UP: 3,
    RIGTH: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 38
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 39
    UP: 3,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 40
    UP: 0,
    RIGTH: 3,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 41
    UP: 0,
    RIGTH: 2,
    DOWN: 3,
    LEFT: 0,
  },
  {
    //tile 42
    UP: 0,
    RIGTH: 2,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile 43
    UP: 2,
    RIGTH: 0,
    DOWN: 2,
    LEFT: 3,
  },
  {
    //tile 44
    UP: 0,
    RIGTH: 2,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 45
    UP: 0,
    RIGTH: 0,
    DOWN: 3,
    LEFT: 2,
  },
  {
    //tile 46
    UP: 0,
    RIGTH: 2,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 47
    UP: 0,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 2,
  },
  {
    //tile 48
    UP: 2,
    RIGTH: 0,
    DOWN: 0,
    LEFT: 0,
  },
];

const NA = reglas.length; //numero de azulejos

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
  // celdas[8].colapsada = true;
  // celdas[3].colapsada = true;

  // celdas[12].opciones = [5, 6, 8];
  // celdas[4].opciones = [4, 7, 12];
  // celdas[6].opciones = [9, 7, 12];
  // celdas[1].opciones = [6, 4, 8, 10];
  // celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  //background(111);

  const celdasConOpciones = celdas.filter((celda) => {
    return celda.opciones.length > 0;
  });

  const celdasDisponibles = celdasConOpciones.filter(
    (celda) => celda.colapsada == false
  );

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

    //print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.opciones.length < 1) {
          fill(255, 100, 100);
          rect(x * ancho, y * alto, ancho, alto);
        }

        if (celdaActual.colapsada) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          //print(reglasActuales);

          image(azulejos[indiceDeAzulejo], x * ancho, y * alto, ancho, alto);

          // Cambiar entropia UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
              cambiarEntropia(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }
          // Cambiar entropia RIGTH
          if (x < RETICULA - 1) {
            const indiceRIGTH = x + 1 + y * RETICULA;
            const celdaRIGTH = celdas[indiceRIGTH];
            if (!celdaRIGTH.colapsada) {
              cambiarEntropia(celdaRIGTH, reglasActuales["RIGTH"], "LEFT");
            }
          }

          //Cambiar entropia DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }

          // Cambiar entropia LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales["LEFT"], "RIGTH");
            }
          }
        } else {
          //strokeWeight(6);
          //rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
  }

  //noLoop();
}

function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  //print(nuevasOpciones);
}
