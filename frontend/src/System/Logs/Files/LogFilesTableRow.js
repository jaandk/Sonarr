import React, { Component, PropTypes } from 'react';
import Link from 'Components/Link';
import RelativeDateCellConnector from 'Components/Table/Cells/RelativeDateCellConnector';
import TableRow from 'Components/Table/TableRow';
import TableRowCell from 'Components/Table/Cells/TableRowCell';
import styles from './LogFilesTableRow.css';

class LogFilesTableRow extends Component {

  //
  // Render

  render() {
    const {
      filename,
      lastWriteTime,
      downloadUrl
    } = this.props;

    return (
      <TableRow>
        <TableRowCell>{filename}</TableRowCell>

        <RelativeDateCellConnector
          date={lastWriteTime}
        />

        <TableRowCell className={styles.download}>
          <Link
            className="no-router"
            to={downloadUrl}
            target="_blank"
          >
            Download
          </Link>
        </TableRowCell>
      </TableRow>
    );
  }

}

LogFilesTableRow.propTypes = {
  filename: PropTypes.string.isRequired,
  lastWriteTime: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired
};

export default LogFilesTableRow;
