import React, { useState, useEffect } from "react";
import styles from './Reloj.module.css'

const Reloj = () => {
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const dia = dias[fechaActual.getDay()];
  const diaN = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const horas = (String(fechaActual.getHours()).length === 2) ? fechaActual.getHours() : `0${fechaActual.getHours()}`;
  const minutos = (String(fechaActual.getMinutes()).length === 2) ? fechaActual.getMinutes() : `0${fechaActual.getMinutes()}`;
  const segundos = (String(fechaActual.getSeconds()).length === 2) ? fechaActual.getSeconds() : `0${fechaActual.getSeconds()}`;

  return (
    <div className={styles.reloj}>
      <p className={styles.dia}>{dia}</p>
      <p className={styles.mes}>{`${diaN} ${mes}`}</p>
      <div className={styles.hora}>
        <p>{horas}</p>
        <p>{minutos}</p>
        <p>{segundos}</p>
      </div>
    </div>
  );
}

export default Reloj;
