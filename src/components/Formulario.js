import React, { useState } from 'react';
import { Error } from './Error';
import shortid from 'shortid';

import PropTypes from 'prop-types';

export const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Cuando el usuario agrega un agsto
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Construir gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // Resetear el form
    guardarNombre('');
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar gastos aqui</h2>
      {error ? (
        <Error mensaje='Amboc campos son obligatorios o presupuesto incorrecto ' />
      ) : null}
      <div className='campo'>
        <label>Nombre gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='ej, transporte'
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className='campo'>
        <label>Cantidad gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='ej, 300'
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar gasto'
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};
