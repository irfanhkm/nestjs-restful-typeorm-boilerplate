import { Injectable, Query } from "@nestjs/common";
import { CreateMovieGenreDto } from "./dto/create-movie-genre.dto";
import { UpdateMovieGenreDto } from "./dto/update-movie-genre.dto";
import { MovieGenresRepository } from "../../models/movie-genres/repositories/movie-genres.repository";
import { IndexMovieGenreDto } from "./dto";
import { MovieGenre } from "../../models/movie-genres/entities/movie-genres.entity";

@Injectable()
export class MovieGenresService {
    constructor(public readonly movieGenresRepository: MovieGenresRepository) {}
    create(createMovieGenreDto: CreateMovieGenreDto) {
        return "This action adds a new movieGenre";
    }

    findAll(query: IndexMovieGenreDto) {
        return MovieGenre.findByName(query.search).find();
    }

    findOne(id: number) {
        return this.movieGenresRepository.findById(id);
    }

    update(id: number, updateMovieGenreDto: UpdateMovieGenreDto) {
        return `This action updates a #${id} movieGenre`;
    }

    remove(id: number) {
        return `This action removes a #${id} movieGenre`;
    }
}
