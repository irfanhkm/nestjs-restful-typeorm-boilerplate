import { Test, TestingModule } from "@nestjs/testing";
import { MovieGenresService } from "../../src/modules/movie-genres/movie-genres.service";

describe("MovieGenresService", () => {
    let service: MovieGenresService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MovieGenresService],
        }).compile();

        service = module.get<MovieGenresService>(MovieGenresService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
