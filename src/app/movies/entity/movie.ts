export class Movie {
    id:number;
    title:string;
    rating:number;
    review:string;
    modified:Date;
    created:Date
    constructor(id:number,
        title:string,
        rating:number,
        review:string){
            this.id = id;
            this.title = title;
            this.rating = rating;
            this.review = review;
            this.modified = null;
            this.created = null;
        }
}