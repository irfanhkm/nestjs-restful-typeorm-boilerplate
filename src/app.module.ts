import { Module } from "@nestjs/common";
import { MoviesModule } from "./modules/movies/movies.module";
import { MovieGenresModule } from "./modules/movie-genres/movie-genres.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieGenre } from "./models/movie-genres/entities/movie-genres.entity";
import { Movie } from "./models/movies/movie.entity";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

@Module({
    imports: [
        MoviesModule,
        MovieGenresModule,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        TypeOrmModule.forRoot({
            type: "mysql",
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            synchronize: true,
            host: process.env.DB_HOST,
            entities: [MovieGenre, Movie],
            database: process.env.DB_DATABASE_1,
        }),
    ],
})
export class AppModule {}
