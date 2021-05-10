import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BaseEntity, Like,
} from 'typeorm';
import { Movie } from "../../movies/movie.entity";
import { declareScope } from "typeorm-scopes";

@Entity()
export class MovieGenre extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Movie, (movie) => movie.movieGenre)
    movies: Movie[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    // Scopes
    public static findByName(name: string): typeof MovieGenre {
        if (name) {
            return declareScope(MovieGenre, this, { name: Like(`%${name}%`) });
        }
        return declareScope(MovieGenre, this, {});
    }
}
