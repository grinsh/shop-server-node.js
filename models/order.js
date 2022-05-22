class Order{
    constructor(id, ordDate, arrivalDate, address, phone, email, complete, userId)
    {
        ////אתחול כל התכונות
        this.id = id;
        this.ordDate = ordDate;
        
        this.products = [];
    }
}