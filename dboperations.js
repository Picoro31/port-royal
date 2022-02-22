
var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');

async function getOrders () {
    try {
        let pool = await sql.connect(config);
        let products = await pool
        .request()
        .query("SELECT * from Orders ORDER BY no, name, type, buysale, price, quantity, total");

        //Select just City column in Orders Table
        // .query("select City from Orders");

        return products;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getOrderById (name) {
    try {
        let pool = await sql.connect(config);
        let products = await pool
        .request()
        .input('input_parameter', sql.NVarChar, name)
        .query("SELECT * from Orders where name = @input_parameter");
        return products;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getOrderBuysale (bs) {
    try {
        let pool = await sql.connect(config);
        let productsbuysale = await pool
        .request()
        .input('input_parameter', sql.NVarChar, bs)
        .query("SELECT * from Orders where buysale = @input_parameter");
        return productsbuysale;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getOrderNameBuy (name) {
    try {
        let pool = await sql.connect(config);
        let productsNameBuy = await pool
        .request()
        .input('input_parameter', sql.NVarChar, name)
        .query("SELECT * from Orders where buysale = 'buy' AND name = @input_parameter");
        return productsNameBuy;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getOrderNameSale (name) {
    try {
        let pool = await sql.connect(config);
        let productsNameSale = await pool
        .request()
        .input('input_parameter', sql.NVarChar, name)
        .query("SELECT * from Orders where buysale = 'sale' AND name = @input_parameter");
        return productsNameSale;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function addOrder (order) {
    try {
        let pool = await sql.connect(config);
        let insertOrder = await pool
        .request()
        .input('no', sql.NVarChar, order.no)
        .input('name', sql.NVarChar, order.name)
        .input('type', sql.NVarChar, order.type)
        .input('buysale', sql.NVarChar, order.buysale)
        .input('price', sql.Int, order.price)
        .input('quantity', sql.Int, order.quantity)
        .input('total', sql.Int, order.total)
        .execute('addOrders');
        // .query("SELECT * from Orders where Id = @input_parameter");
        // return insertProducts.recordsets;
        console.log(insertOrder);

    } 
    catch (error) {
        console.log(error);
    };
};

async function deleteOrder (name) {
    try {
        let pool = await sql.connect(config);
        let deleteOrder = await pool
        .request()
        .input('name', sql.NVarChar, name)
        .execute('deleteOrders');
        // .query("SELECT * from Orders where Id = @input_parameter");
        // return insertProducts.recordsets;
        console.log(deleteOrder);

    } 
    catch (error) {
        console.log(error);
    };
};

////////// login DB Get, Add, Delete  ////////////////////////////////

async function getLogin () {
    try {
        let pool = await sql.connect(config);
        let loginlist = await pool
        .request()
        .query("SELECT * from login");

        //Select just City column in Orders Table
        // .query("select City from Orders");

        return loginlist;
       
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getLoginById (orderId) {
    try {
        let pool = await sql.connect(config);
        let Logins = await pool
        .request()
        .input('username', sql.NVarChar, orderId)
        .query("SELECT * from login where username = @username");
        return Logins;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function addLogin (login) {
    try {
        let pool = await sql.connect(config);
        let addNewUser = await pool
        .request()
        .input('username', sql.NVarChar, login.username)
        .input('password', sql.NVarChar, login.password)
        .execute('addLogin');
        // .query("SELECT * from Orders where Id = @input_parameter");
        // return insertProducts.recordsets;
        console.log(addNewUser);

    } 
    catch (error) {
        console.log(error);
    };
};

async function deleteLogin (user) {
    try {
        let pool = await sql.connect(config);
        let deleteusername = await pool
        .request()
        .input('username', sql.NVarChar, user)
        .execute('deleteLogin');
        // .query("SELECT * from Orders where Id = @input_parameter");
        // return insertProducts.recordsets;
        console.log(deleteusername);

    } 
    catch (error) {
        console.log(error);
    };
};

async function Updatelogin (updatedlogin) {
    try {
        let pool = await sql.connect(config);
        let updateLogin = await pool
        .request()
        .input('username', sql.NVarChar, updatedlogin.username)
        .input('password', sql.NVarChar, updatedlogin.password)
        .input('img', sql.NVarChar, updatedlogin.img)    
        .execute('updatelogin');
        return updateLogin;
        // console.log(updateList);
    } 
    catch (error) {
        console.log(error);
    };
};

////////// ProductLists DB Update  ////////////////////////////////
async function getproductlists () {
    try {
        let pool = await sql.connect(config);
        let productlist = await pool
        .request()
        .query("SELECT * from productLists ORDER BY id,type,pname,price,volume,days,detail,pimg");
        //Select just City column in Orders Table
        // .query("select City from Orders");
        return productlist;      
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function getproductlistsById (pname) {
    try {
        let pool = await sql.connect(config);
        let productlistsById = await pool
        .request()
        .input('pname', sql.NVarChar, pname)
        .query("SELECT * from productLists where pname = @pname");
        return productlistsById;
        // console.log(products);
        
    } 
    catch (error) {
        console.log(error);
        // sql.close();
    };
};

async function updatelistId (updated) {
    try {
        let pool = await sql.connect(config);
        let updateList = await pool
        .request()
        .input('id', sql.Int, updated.id)
        .input('type', sql.NVarChar, updated.type)
        .input('pname', sql.NVarChar, updated.pname)
        .input('price', sql.Int, updated.price)
        .input('volume', sql.Int, updated.volume)
        .input('detail', sql.NVarChar, updated.detail)  
        .input('days', sql.DateTime, updated.days) 
        .input('pimg', sql.NVarChar, updated.pimg)     
        .execute('updateProductList');
        
        return updateList;
        // console.log(updateList);
    } 
    catch (error) {
        console.log(error);
    };
};

async function addproductlist (updated) {
    try {
        let pool = await sql.connect(config);
        let addProductList = await pool
        .request()
        .input('id', sql.Int, updated.id)
        .input('type', sql.NVarChar, updated.type)
        .input('pname', sql.NVarChar, updated.pname)
        .input('price', sql.Int, updated.price)
        .input('volume', sql.Int, updated.volume)
        .input('detail', sql.NVarChar, updated.detail)  
        .input('days', sql.DateTime, updated.days)
        .input('pimg', sql.NVarChar, updated.pimg)     
        .execute('addProductList');
        console.log(addProductList);
    } 
    catch (error) {
        console.log(error);
    };
};

async function deleteproductlist (name) {
    try {
        let pool = await sql.connect(config);
        let deleteList = await pool
        .request()
        .input('pname', sql.NVarChar, name)
        .execute('deleteProductList');
        // return insertProducts.recordsets;
        console.log(deleteList);

    } 
    catch (error) {
        console.log(error);
    };
};

module.exports = {
    getOrderNameSale: getOrderNameSale,
    getOrderNameBuy: getOrderNameBuy,
    getOrders: getOrders,
    getOrderById: getOrderById,
    addOrder: addOrder,
    deleteOrder: deleteOrder,
    getOrderBuysale: getOrderBuysale,
    getLogin: getLogin,
    addLogin: addLogin,
    deleteLogin: deleteLogin,
    getproductlists: getproductlists,
    updatelistId: updatelistId,
    addproductlist: addproductlist,
    deleteproductlist: deleteproductlist,
    getLoginById: getLoginById,
    Updatelogin : Updatelogin,
    getproductlistsById: getproductlistsById
}