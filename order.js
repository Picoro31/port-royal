
class Order {
    constructor(no,name,type,buysale,price,quantity,total) {
        this.no = no;
        this.name = name;
        this.type = type;
        this.buysale = buysale;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    }
}

class login {
    constructor(username, password, img) {
        this.username = username;
        this.password = password;
        this.img = img;
    }
}

class updated {
    constructor(id, type, pname, price, volume, days, detail, pimg ) {
        this.id = id;
        this.type = type;
        this.pname = pname;
        this.price = price;
        this.volume = volume;
        this.days = days;
        this.detail = detail;
        this.pimg = pimg;
        
    }
}

module.exports = {
    Order: Order,
    login: login,
    updated: updated
}