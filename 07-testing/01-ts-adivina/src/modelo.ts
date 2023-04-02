interface Partida {
  numeroDeIntentos: number;
  numeroParaAcertar: number;
}

export const partida: Partida = {
  numeroDeIntentos: 0,
  numeroParaAcertar: 0, // TODO: inicializar esto en el motor cuando arranque la partida
};

export type Estado =
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAXIMO_INTENTOS";

export const MAXIMO_INTENTOS: number = 5;
