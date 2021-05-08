import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MovieGenresService } from "./movie-genres.service";
import { MovieGenresController } from "./movie-genres.controller";
import { MovieGenresRepository } from "./movie-genres.repository";

@Module({
    imports: [TypeOrmModule.forFeature([MovieGenresRepository])],
    controllers: [MovieGenresController],
    providers: [MovieGenresService],
})
export class MovieGenresModule {}
