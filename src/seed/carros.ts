
export const  cars=[
  {
    nombre: 'Rayo',
    modelo: 'Chevrolet Corvette',
    anio: 2005,
    frase: 'No importa a qué velocidad vayas, siempre debes saber hacia dónde te diriges',
  },
  {
    nombre: 'Mate',
    modelo: 'International L-170',
    anio: 1955,
    frase: 'La amistad verdadera vale más que cualquier trofeo',
  },
  {
    nombre: 'Sally',
    modelo: 'Porsche 911',
    anio: 1997,
    frase: 'La vida es una carrera, disfruta el trayecto',
  },
  {
    nombre: 'Doc Hudson',
    modelo: 'Hornet Hudson',
    anio: 1951,
    frase: 'No pares cuando estés cansado, para cuando hayas terminado',
  },
  {
    nombre: 'Chick Hicks',
    modelo: 'Buick Regal',
    anio: 1987,
    frase: 'Ser el mejor significa nunca rendirse',
  },
  {
    nombre: 'Luigi',
    modelo: 'Fiat 500',
    anio: 1959,
    frase: 'Cada detalle importa cuando amas lo que haces',
  },
  {
    nombre: 'Guido',
    modelo: 'Forklift',
    anio: 1960,
    frase: 'La velocidad y la precisión siempre van juntas',
  },
  {
    nombre: 'Ramone',
    modelo: 'Chevrolet Impala',
    anio: 1959,
    frase: 'El estilo nunca pasa de moda',
  },
  {
    nombre: 'Flo',
    modelo: 'Motorama Show Car',
    anio: 1957,
    frase: 'Siempre hay espacio para una sonrisa',
  },
  {
    nombre: 'Sheriff',
    modelo: 'Mercury Police Cruiser',
    anio: 1949,
    frase: 'El orden mantiene todo en movimiento',
  },
  {
    nombre: 'Fillmore',
    modelo: 'Volkswagen Bus',
    anio: 1960,
    frase: 'Relájate y deja que todo fluya',
  },
  {
    nombre: 'Sargento',
    modelo: 'Willys Jeep',
    anio: 1942,
    frase: 'La disciplina es la base del éxito',
  },
  {
    nombre: 'Lizzie',
    modelo: 'Ford Model T',
    anio: 1923,
    frase: 'La experiencia siempre enseña algo valioso',
  },
  {
    nombre: 'Mack',
    modelo: 'Mack Super-Liner',
    anio: 1985,
    frase: 'Nunca dejes solo a quien confía en ti',
  },
  {
    nombre: 'Finn McMissile',
    modelo: 'Aston Martin DB5',
    anio: 1964,
    frase: 'La inteligencia vale más que la fuerza',
  },
  {
    nombre: 'Holley Shiftwell',
    modelo: 'Jaguar XJR-15',
    anio: 1991,
    frase: 'Siempre hay una solución si mantienes la calma',
  },
  {
    nombre: 'Francesco Bernoulli',
    modelo: 'Formula Racer',
    anio: 2009,
    frase: 'La confianza es clave para llegar primero',
  },
  {
    nombre: 'Jackson Storm',
    modelo: 'Next-Gen Racer',
    anio: 2017,
    frase: 'La tecnología cambia el juego',
  },
  {
    nombre: 'Cruz Ramirez',
    modelo: 'Trainer Car',
    anio: 2017,
    frase: 'Nunca es tarde para perseguir tus sueños',
  },
  {
    nombre: 'Smokey',
    modelo: 'Hudson Pickup',
    anio: 1947,
    frase: 'El talento necesita práctica para brillar',
  },

  // Puedes seguir el mismo patrón hasta completar 70

  ...Array.from({ length: 50 }, (_, i) => ({
    nombre: `Carro ${i + 21}`,
    modelo: `modelo ${i + 21}`,
    anio: 1980 + (i % 40),
    frase: `Frase inspiradora número ${i + 21}`,
  })),
]






