// import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";


const MuiTable = () => {

  return (

    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>

        <Table aria-label="simple table" stickyHeader>

            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>

            </TableHead>

            <TableBody>
                {
                    tableData.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border: 0} }}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
    </TableContainer>

  )

};

export default MuiTable;

const tableData = [
    {
    "id": 1,
    "first_name": "Lindsay",
    "last_name": "Malbon",
    "email": "lmalbon0@intel.com"
    }, 
    {
    "id": 2,
    "first_name": "Pooh",
    "last_name": "Dolby",
    "email": "pdolby1@google.com"
   }, 
   {
    "id": 3,
    "first_name": "Aprilette",
    "last_name": "Tellesson",
    "email": "atellesson2@stanford.edu"
    }, 
    {
  "id": 4,
  "first_name": "Marleah",
  "last_name": "Walne",
  "email": "mwalne3@sohu.com"
}, {
  "id": 5,
  "first_name": "Rebbecca",
  "last_name": "Beyn",
  "email": "rbeyn4@github.io"
}, {
  "id": 6,
  "first_name": "Klement",
  "last_name": "Bliven",
  "email": "kbliven5@behance.net"
}, {
  "id": 7,
  "first_name": "Siobhan",
  "last_name": "Tarbert",
  "email": "starbert6@t-online.de"
}, {
  "id": 8,
  "first_name": "Datha",
  "last_name": "Falconar",
  "email": "dfalconar7@independent.co.uk"
}, {
  "id": 9,
  "first_name": "Aundrea",
  "last_name": "Waye",
  "email": "awaye8@cocolog-nifty.com"
}, {
  "id": 10,
  "first_name": "Flss",
  "last_name": "Reynault",
  "email": "freynault9@sciencedaily.com"
}];