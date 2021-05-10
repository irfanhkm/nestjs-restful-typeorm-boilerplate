import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";

import { MovieGenre } from "../entities/movie-genres.entity";

@EntityRepository(MovieGenre)
export class MovieGenresRepository extends Repository<MovieGenre> {
    findById(id: number) {
        return MovieGenre.findOne({ id, name: "Sci-fi" });
    }
}
