import React, { PropTypes } from 'react';
import CheckInput from 'Components/Form/CheckInput';
import VirtualTableHeaderCell from './TableHeaderCell';
import styles from './TableSelectAllHeaderCell.css';

function getValue(allSelected, allUnselected) {
  if (allSelected) {
    return true;
  } else if (allUnselected) {
    return false;
  }

  return null;
}

function TableSelectAllHeaderCell() {
  const {
    allSelected,
    allUnselected,
    onSelectAllChange
  } = this.props;

  const value = getValue(allSelected, allUnselected);

  return (
    <VirtualTableHeaderCell
      className={styles.selectAllHeaderCell}
      name="selectAll"
    >
      <CheckInput
        className={styles.input}
        name="selectAll"
        value={value}
        onChange={onSelectAllChange}
      />
    </VirtualTableHeaderCell>
  );
}

TableSelectAllHeaderCell.propTypes = {
  allSelected: PropTypes.bool.isRequired,
  allUnselected: PropTypes.bool.isRequired,
  onSelectAllChange: PropTypes.func.isRequired
};

export default TableSelectAllHeaderCell;
