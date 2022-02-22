
var Order = require('./order');
var login = require('./order');
var dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

////////  Upload System  /////////////////////////////////////////
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        console.log(file)
        // cb(null, Date.now() + path.extname(file.originalname))
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})
app.set("view engine", "ejs");

// Export Folder Images to public and can call in Example
// http://localhost:8080/images/cat%20t2.jpg 
app.use(express.static('public')); 
app.use('/Images', express.static('Images'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

app.get("/upload", (req, res) => {
    res.render("upload");
});

app.post("/upload", upload.single('image'), (req, res) => {
    res.send("Upload Success"); 
});

//////// Crud Orders DB Mssql System ///////////////////////////////////////////
router.use((request,response,next) => {
    console.log('middleware');
    next();
})

router.route('/orders').get((request,response) => {
    dboperations.getOrders().then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/orders/:name').get((request,response) => {
    dboperations.getOrderById(request.params.name).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/orders/buysale/:bs').get((request,response) => {
    dboperations.getOrderBuysale(request.params.bs).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/orders/sale/:name').get((request,response) => {
    dboperations.getOrderNameSale(request.params.name).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/orders/buy/:name').get((request,response) => {
    dboperations.getOrderNameBuy(request.params.name).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/orders/addorder').post((request,response) => {

    let order = {...request.body}
    
    dboperations.addOrder(order).then(result => {

        response.status(201).json(result);      
    })
})

router.route('/orders/deleteorder/:name').delete((request,response) => {
    dboperations.deleteOrder(request.params.name).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

/////////// Route for Login System ////////////////////////////
router.route('/login').get((request,response) => {
    dboperations.getLogin().then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/login/:user').get((request,response) => {
    dboperations.getLoginById(request.params.user).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/login/addlogin').post((request,response) => {

    let login = {...request.body}
    
    dboperations.addLogin(login).then(result => {
        response.status(201).json(result);      
    })
})

router.route('/login/delete/:user').delete((request,response) => {
    dboperations.deleteLogin(request.params.user).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/login/update').put((request,response) => {

    const updatedlogin = {...request.body}

    dboperations.Updatelogin(updatedlogin).then(result => {
        response.status(201).json(result);       
    })
})

/////////// Update, Get Route for productLists System ////////////////////////////
router.route('/productlists').get((request,response) => {
    dboperations.getproductlists().then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/productlists/:pname').get((request,response) => {
    dboperations.getproductlistsById(request.params.pname).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

router.route('/productlists/update').put((request,response) => {

    const updated = {...request.body}

    dboperations.updatelistId(updated).then(result => {
        response.status(201).json(result);       
    })
})

router.route('/productlists/addproductlist').post((request,response) => {

    let updated = {...request.body}
    
    dboperations.addproductlist(updated).then(result => {
        response.status(201).json(result);      
    })
})

router.route('/productlists/deleteproductlist/:name').delete((request,response) => {
    dboperations.deleteproductlist(request.params.name).then(result => {
        // console.log(result.recordset);
        response.json(result);
        
    })
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server is running on port'+port);
  });
