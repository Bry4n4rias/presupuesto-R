import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Gasto = ({ gasto }) => {
  return (
    <Fragment>
      <li className='gastos'>
        <p>
          {gasto.nombre}
          <span className='gasto'>$ {gasto.cantidad}</span>
        </p>
      </li>
    </Fragment>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
