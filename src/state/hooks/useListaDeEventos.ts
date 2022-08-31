import { useRecoilValue } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventosFiltradosState } from "../seletores";


const useListaDeEventos = () => {
  const listaDeEventos = useRecoilValue<IEvento[]>(eventosFiltradosState);

  return listaDeEventos;
}

export default useListaDeEventos;