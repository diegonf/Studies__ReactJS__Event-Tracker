import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterID } from "../../util";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    evento.id = obterID();
    const hoje = new Date();
    if(evento.inicio === hoje) {
      throw new Error('Eventos não podem ser cadastrados com data menor do que a atual.');
    }
    setListaDeEventos(listaAntiga => [...listaAntiga, evento]);
  }
}

export default useAdicionarEvento;