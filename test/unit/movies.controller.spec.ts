import { Test, TestingModule } from "@nestjs/testing";
import { MoviesController } from "../../src/modules/movies/movies.controller";
import { MoviesService } from "../../src/modules/movies/movies.service";

describe("MoviesController", () => {
    let controller: MoviesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MoviesController],
            providers: [MoviesService],
        }).compile();

        controller = module.get<MoviesController>(MoviesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
