import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MoviesModule } from "./movies/movies.module";
import { MovieGenresModule } from "./movie-genres/movie-genres.module";

@Module({
    imports: [MoviesModule, MovieGenresModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
