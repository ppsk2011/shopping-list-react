import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
const ShoppingListAdd = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const [item, setItem] = useState({});

    const handleItemChange = (e, attr) => {
        const newItem = { ...item };
        newItem[attr] = e.target.value;
        setItem(newItem);
    };

    const handleRemoveProduct = (index) => {
        const updatedShoppingList = [...shoppingList];
        updatedShoppingList.splice(index, 1);
        setShoppingList(updatedShoppingList);
    }

    const handleSubmitProduct = () => {
        const updatedShoppingList = [...shoppingList];
        updatedShoppingList.push(item);
        setShoppingList(updatedShoppingList);
        setItem({})
    };
    // const urlOpen = (url) => { window.open(url,'New Window','width=1200,height=1200' ) };
    return (
        <div>
            <h1 >Add a product to your shopping list</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <input type='text' name='productName' value={item.productName ? item.productName : ''}
                                        placeholder='Enter product name' onChange={(e) => { handleItemChange(e, 'productName'); }} />
                                </TableCell>
                                <TableCell >
                                    <input type='date' name='purchaseDate' value={item.purchaseDate ? item.purchaseDate : ''}
                                        placeholder='Enter purchase date' onChange={(e) => { handleItemChange(e, 'purchaseDate'); }} />
                                </TableCell>
                                <TableCell >
                                    <input type='text' name='storeName' value={item.storeName ? item.storeName : ''}
                                        placeholder='Enter Store name' onChange={(e) => { handleItemChange(e, 'storeName'); }} />
                                </TableCell>
                                <TableCell >
                                    <input type='text' name='link' value={item.link ? item.link : ''} 
                                    placeholder='Enter the web address' onChange={(e) => { handleItemChange(e, 'link'); }} />
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' color='primary' onClick={(e) => { handleSubmitProduct(e) }}>ADD</Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shoppingList.map((item, index) => (
                                <TableRow key={item.purchaseDate}>
                                    <TableCell component='th' scope='row'>
                                        {item.productName}
                                    </TableCell>
                                    <TableCell >{item.purchaseDate}</TableCell>
                                    <TableCell >{item.storeName}</TableCell>
                                    <TableCell> <a href={item.link} rel='noopener noreferrer' target='_blank'>{item.link}</a></TableCell>
                                    {/* <TableCell> <a onClick={()=>{urlOpen(item.link)}}>{item.storeName}</a></TableCell> */}
                                    <TableCell >
                                        <Button variant='contained' color='secondary' onClick={() => { handleRemoveProduct(index) }}>REMOVE</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ShoppingListAdd;
