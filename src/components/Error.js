import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Error = ({ mensaje }) => {
  return (
    <Fragment>
      <p className='alert alert-danger'>{mensaje}</p>
    </Fragment>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
