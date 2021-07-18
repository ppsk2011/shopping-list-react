import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { convertIsoDate } from '../../../../utils';
import shoppingData from '../../../../assets/mockdata/shoppingMock.json';
import './shoppingHistory.css';

const ShoppingHistory = () => {

  const [productsList, setProductsList] = useState(shoppingData);
  const [filterObj, setFilterObj] = useState({});
  const [filteredProductsList, setFilteredProductsList] = useState([]);

  useEffect(() => {
    formatPurchaseDate(productsList);
  }, []);

  const handleProductNameChange = (e, string) => {
    const filterObjTemp = { ...filterObj };
    filterObjTemp[string] = e.target.value;
    setFilterObj(filterObjTemp);
    let newList = filteredProductsList.length ? filteredProductsList : productsList;
    newList = newList.filter((product) => product[string].toUpperCase().includes(e.target.value.toUpperCase()));
    setFilteredProductsList(newList);
  };

  const formatPurchaseDate = (prodList) => {
    let newList = [];
    for (let product of prodList) {
      product.purchaseDate = convertIsoDate(product.purchaseDate);
      newList.push(product);
    }
    setProductsList(newList);
  };

  const checkedFilterObj = () => {
    if (filterObj.storeName || filterObj.productName) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h1>Shopping List History</h1>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label='Products table'>
            <TableHead>
             <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Purchased From</TableCell>
                <TableCell>Purchase Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> <input type='text' name='productName' placeholder='Filter Product'
                  onChange={(e) => { handleProductNameChange(e, 'productName') }} />
                </TableCell>
                <TableCell> <input type='text' name='storeName' placeholder='Filter Store'
                  onChange={(e) => { handleProductNameChange(e, 'storeName') }} />
                </TableCell>
                <TableCell />
                {/* <TableCell> <input type='text' name='purchaseDate' placeholder='Filter Purchase Date'
                    onChange={(e) => { handleProductNameChange(e, 'purchaseDate') }} />
                </TableCell> */}
              </TableRow>
              {checkedFilterObj() && filteredProductsList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component='th' scope='row'>{item.productName}</TableCell>
                  <TableCell><a href={item.link} rel='noopener noreferrer' target='_blank'>{item.storeName}</a></TableCell>
                  <TableCell>{item.purchaseDate}</TableCell>
                </TableRow>
              ))}
              {!checkedFilterObj() && productsList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component='th' scope='row'> {item.productName} </TableCell>
                  <TableCell> <a href={item.link} rel='noopener noreferrer' target='_blank'>{item.storeName}</a></TableCell>
                  <TableCell>{item.purchaseDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ShoppingHistory;