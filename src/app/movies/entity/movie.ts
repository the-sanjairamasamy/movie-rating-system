export class Movie {
    id:number;
    title:string;
    rating:number;
    review:string;

    constructor(id:number,
        title:string,
        rating:number,
        review:string){
            this.id = id;
            this.title = title;
            this.rating = rating;
            this.review = review;
        }
}