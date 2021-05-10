import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { MovieGenre } from "../movie-genres/entities/movie-genres.entity";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: Date;

    @ManyToOne(() => MovieGenre, (movieGenre) => movieGenre.movies)
    @JoinColumn({ name: "movie_genre_id" })
    movieGenre: MovieGenre;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
