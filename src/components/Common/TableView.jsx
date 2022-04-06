import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';


class TableView extends Component {
  render() { 
    const {rows, columns} = this.props;

    return (
      <Paper>
        <Table>
          <TableHead>
              <TableRow>
                {columns ?
                  columns.map((col, i) => {
                    return (
                      <TableCell key={i}> {col.label} </TableCell>
                    )
                  })
               : null }
              </TableRow>
          </TableHead>
           <TableBody>
                  {rows ?
                rows.map((row, i) => {
                  return (
                    <TableRow>
                    {
                        columns.map((col, colIndex) => {
                          return (
                            <TableCell>
                              {col.name === 'id' ?
                              <Link to={`/admin/posts/edit/${row[col.name]}`} component={RouterLink}>{row[col.name]}</Link>
                              : row[col.name]
                            }                            
                            </TableCell>
                          )
                        })
                    }
                  </TableRow> 
                  )
                    })
                  : null}
           </TableBody>
        </Table>
      </Paper>
    );
  }
}
 
export default TableView;
