import { Module } from "@nestjs/common";
import { MovieGenresService } from "./movie-genres.service";
import { MovieGenresController } from "./movie-genres.controller";

@Module({
    controllers: [MovieGenresController],
    providers: [MovieGenresService],
})
export class MovieGenresModule {}
