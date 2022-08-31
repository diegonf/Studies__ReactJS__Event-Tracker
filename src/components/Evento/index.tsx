import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import useRemoverEvento from '../../state/hooks/useRemoverEvento';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

interface Props {
  evento: IEvento,
}

const Evento: React.FC<Props> = (props) => {
  const { evento } = props;
  const removerEvento = useRemoverEvento();

  const excluirEvento = () => {
    removerEvento(evento);
    alert('evento excluido');
  }

    const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => excluirEvento()}></i>
  </div>)
}

export default Evento