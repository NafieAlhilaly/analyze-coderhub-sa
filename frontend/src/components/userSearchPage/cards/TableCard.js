import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TotalPointsCard from './TotalPointsCard';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(programmingLanguageName, 
                easySolved, 
                mediumSolved, 
                HardSolved, 
                totalSolved, 
                totalPoints) {
                    console.log(programmingLanguageName)
  return { programmingLanguageName, 
        easySolved, 
        mediumSolved, 
        HardSolved, 
        totalSolved,
        totalPoints };
}


const TableCard =  ({languages, 
    easySolved,
    mediumSolved,
    hardSolved,
    totalSolved,
    totalPoints }) =>  
{
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} >
        <TableHead>
          <TableRow>
            <StyledTableCell>Proramming language name</StyledTableCell>
            <StyledTableCell align="right">Easy solved</StyledTableCell>
            <StyledTableCell align="right">Meduim solved</StyledTableCell>
            <StyledTableCell align="right">Hard solved</StyledTableCell>
            <StyledTableCell align="right">Total solved</StyledTableCell>
            <StyledTableCell align="right">Total points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(languages, easySolved, mediumSolved, hardSolved, totalSolved, totalPoints)&&
          (languages[0].map((row, inx) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
                {row}
              </StyledTableCell>
              <StyledTableCell align="right">{easySolved[0][inx]}</StyledTableCell>
              <StyledTableCell align="right">{mediumSolved[0][inx]}</StyledTableCell>
              <StyledTableCell align="right">{hardSolved[0][inx]}</StyledTableCell>
              <StyledTableCell align="right">{totalSolved[0][inx]}</StyledTableCell>
              <StyledTableCell align="right">{totalPoints[0][inx]}</StyledTableCell>
            </StyledTableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCard;