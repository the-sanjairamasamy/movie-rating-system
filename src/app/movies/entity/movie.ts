export class Movie {
    id:number;
    title:string;
    rating:string;
    review:string;

    constructor(id:number,
        title:string,
        rating:string,
        review:string){
            this.id = id;
            this.title = title;
            this.rating = rating;
            this.review = review;
        }
}