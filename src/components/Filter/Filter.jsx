import React from 'react';
import './Filter.styled.js';
import { FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Знайти котика за ім'ям:
      {/* Find contacts by name : */}
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
