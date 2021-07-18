// import React, { useState, useEffect } from 'react'
// import shoppingData from '../../../../assets/mockdata/shoppingMock.json'
// import './shoppingHistory.css';
// import { makeStyles } from '@material-ui/core/styles';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// import { convertIsoDate } from '../../../../utils'

// const useStyles = makeStyles({
//     table: {
//         minWidth: 400,
//     },
// });




// const ShoppingHistory = () => {
//     const [productsList, setProductsList] = useState(shoppingData);
//     const [filteredList, setFilteredList] = useState([]);
//     const [filterObj, setFilterObj] = useState({});
//     const [filteredProductsList, setFilteredProductsList] = useState([]);

//     useEffect(() => {
//         console.log(productsList)
//         formatPurchaseDate(productsList);
//         return (() => {
//             setProductsList([]);
//         })
//     }, []);

//     const formatPurchaseDate = (prodList) => {
//         let newList = [];
//         for (let product of prodList) {
//             product.purchaseDate = convertIsoDate(product.purchaseDate);
//             newList.push(product)
//         }
//         setProductsList(newList);
//     }
//     const handleFilterChange = (e) => {
//         const filteredItem=e.target.attributes.name;
//         const filterObjTemp = { ...filterObj };
//         // console.log(e.target.attributes.name)
//         // productsList.filter((item)=>{
            
//         // })

//         console.log(e.target.value);
//         filterObjTemp[filteredItem] = e.target.value;
//         setFilterObj(filterObjTemp);
//         let newList = filteredProductsList.length ? filteredProductsList : productsList;
//         newList = newList.filter((product) =>
//           product[filteredItem].toUpperCase().includes(e.target.value.toUpperCase())
//         );
//         setFilteredProductsList(newList);

//     }

//     return (
//         <div>
//             <h1>Shopping History</h1>
//             <div>
//                 <TableContainer component={Paper}>
//                     <Table aria-label='Products table'>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell><input type='text' name='prodName' placeholder='Filter Product Name' onChange={(e) => handleFilterChange(e)} /></TableCell>
//                                 <TableCell><input type='text' name='purchaseDate' placeholder='Filter Purchase Date' onChange={(e) => handleFilterChange(e)} /></TableCell>
//                                 <TableCell><input type='text' name='storeName' placeholder='Filter Purchased From' onChange={(e) => handleFilterChange(e)} /></TableCell>
//                             </TableRow>
//                             <TableRow>
//                                 <TableCell>Product Name</TableCell>
//                                 <TableCell>Purchase Date</TableCell>
//                                 <TableCell>Purchased From</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {shoppingData.map((item) => (
//                                 <TableRow key={item.id}>
//                                     <TableCell component='th' scope='row'>{item.productName}</TableCell>
//                                     <TableCell>{item.purchaseDate}</TableCell>
//                                     <TableCell>
//                                         <a href={item.link} rel='noopener noreferrer' target='_blank'> {item.storeName} </a>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>
//         </div>
//     )
// }

// export default ShoppingHistory;