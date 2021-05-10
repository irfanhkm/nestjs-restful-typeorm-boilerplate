import { Like, SelectQueryBuilder } from "typeorm";
import { MovieGenre } from "../entities/movie-genres.entity";

export class MovieGenresScope extends SelectQueryBuilder<MovieGenre> {
    findName(search: string): MovieGenresScope {
        return this.where("name = :search", { search: Like(`%${search}$`) });
    }
}
