import db from './db.json';
import { selector } from "recoil";
import { filtroDeEventosState, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventosState);
    const todosOsEventos = get(listaDeEventosState);

    const eventos = todosOsEventos.filter(evento => {
      if (!filtro.data) {
        return true;
      }
      const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
      return ehOMesmoDia;
    })
    return eventos;
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: () => {
    const eventosJson = db.eventos;
    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})