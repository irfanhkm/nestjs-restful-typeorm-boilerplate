import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";

import { MovieGenre } from "../../entities/db1/movie-genre.entity";

@EntityRepository(MovieGenre)
export class MovieGenresRepository extends Repository<MovieGenre> {}
