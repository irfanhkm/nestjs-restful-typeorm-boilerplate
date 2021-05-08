import { Test, TestingModule } from "@nestjs/testing";
import { MovieGenresController } from "../../src/movie-genres/movie-genres.controller";
import { MovieGenresService } from "../../src/movie-genres/movie-genres.service";

describe("MovieGenresController", () => {
    let controller: MovieGenresController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MovieGenresController],
            providers: [MovieGenresService],
        }).compile();

        controller = module.get<MovieGenresController>(MovieGenresController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
