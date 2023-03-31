export let numeroParaAcertar = 0; // Valor por defecto en el motor se inicializa al arrancar partida
export const setNumeroParaAcertar = (nuevoNumero) =>
  (numeroParaAcertar = nuevoNumero);

export const NO_ES_UN_NUMERO = 0;
export const EL_NUMERO_ES_MAYOR = 1;
export const EL_NUMERO_ES_MENOR = 2;
export const ES_EL_NUMERO_SECRETO = 3;
export const GAME_OVER_MAXIMO_INTENTOS = 4;

export const MAXIMO_INTENTOS = 5;
export let numeroDeIntentos = 0;
export const setNumeroDeIntentos = (nuevoNumeroDeIntentos) =>
  (numeroDeIntentos = nuevoNumeroDeIntentos);
