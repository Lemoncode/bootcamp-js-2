import { Estado, MAXIMO_INTENTOS, partida } from "./modelo";

export const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 101);

export const hasSuperadoElNumeroMaximoDeIntentos = (): boolean =>
  partida.numeroDeIntentos >= MAXIMO_INTENTOS;

export const comprobarNumero = (texto: string): Estado => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return "NO_ES_UN_NUMERO";
  }

  if (numero === partida.numeroParaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
  }

  if (hasSuperadoElNumeroMaximoDeIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
  }

  return numero > partida.numeroParaAcertar
    ? "EL_NUMERO_ES_MAYOR"
    : "EL_NUMERO_ES_MENOR";
};
