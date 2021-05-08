import { Injectable } from "@nestjs/common";
import { CreateMovieGenreDto } from "./dto/create-movie-genre.dto";
import { UpdateMovieGenreDto } from "./dto/update-movie-genre.dto";
import { MovieGenresRepository } from "./movie-genres.repository";

@Injectable()
export class MovieGenresService {
    constructor(public readonly movieGenresRepository: MovieGenresRepository) {}
    create(createMovieGenreDto: CreateMovieGenreDto) {
        return "This action adds a new movieGenre";
    }

    findAll() {
        const queryBuilder = this.movieGenresRepository.createQueryBuilder(
            "movie_genre",
        );
        return queryBuilder.getMany();
    }

    findOne(id: number) {
        return this.movieGenresRepository.findOne(id);
    }

    update(id: number, updateMovieGenreDto: UpdateMovieGenreDto) {
        return `This action updates a #${id} movieGenre`;
    }

    remove(id: number) {
        return `This action removes a #${id} movieGenre`;
    }
}
