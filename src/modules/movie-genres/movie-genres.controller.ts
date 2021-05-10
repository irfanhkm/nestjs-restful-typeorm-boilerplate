import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from "@nestjs/common";
import { MovieGenresService } from "./movie-genres.service";
import {
    CreateMovieGenreDto,
    UpdateMovieGenreDto,
    IndexMovieGenreDto,
} from "./dto";

@Controller("movie-genres")
export class MovieGenresController {
    constructor(private readonly movieGenresService: MovieGenresService) {}

    @Post()
    create(@Body() createMovieGenreDto: CreateMovieGenreDto) {
        return this.movieGenresService.create(createMovieGenreDto);
    }

    @Get()
    findAll(@Query() query: IndexMovieGenreDto) {
        return this.movieGenresService.findAll(query);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.movieGenresService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateMovieGenreDto: UpdateMovieGenreDto,
    ) {
        return this.movieGenresService.update(+id, updateMovieGenreDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.movieGenresService.remove(+id);
    }
}
