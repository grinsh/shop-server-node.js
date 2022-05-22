class Massage {
    constructor(id, from, to, title, body, sendDate) {
        this.id = id;
        this.from = from;             //לכאן נכניס את השם של מי ששלח את ההודעה
        this.to = to;                //לכאן נכניס את השם של מי שאליו נשלחה ההודעה
        this.title = title;
        this.body = body;
        this.sendDate = sendDate;
    }
}