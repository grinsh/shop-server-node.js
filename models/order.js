class Order{
    constructor(id, ordDate, arrivalDate, address, phone, email, complete, userId, products)
    {
        this.id = id;
        this.ordDate = ordDate;
        this.arrivalDate = arrivalDate;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.complete = complete;
        this.userId = userId;
        this.products = products;  //לכאן יוכנס מערך של מוצרים
    }
}