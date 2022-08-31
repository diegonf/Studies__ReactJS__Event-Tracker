import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos(listaAntiga => listaAntiga.map(evt => {
      if(evt.id === evento.id){
        return evento;
      }
      return evt;
    }))
  }
}

export default useAtualizarEvento;