import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUse } from 'store/filterSlice';
import classes from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const handleInput = ev => {
    const text = ev.target.value;
    dispatch(filterUse(text));
  };

  return (
    <label className={classes.filter_label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        value={filterValue}
        onChange={handleInput}
      />
    </label>
  );
};

export default Filter;
