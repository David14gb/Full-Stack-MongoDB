export class Document {

    public title: String; 
    public description: String;
    public date: Date;
    public content: String;
    public author: String;
    public archiveDate: Date;
    public _id: Number;

    constructor(title: String, description: String, date: Date, content: String, author: String, archiveDate: Date, _id:Number){
        this.title = title;
        this.description = description;
        this.date = date;
        this.content = content;
        this.author = author;
        this.archiveDate = archiveDate;
        this._id = _id;
    }

}
