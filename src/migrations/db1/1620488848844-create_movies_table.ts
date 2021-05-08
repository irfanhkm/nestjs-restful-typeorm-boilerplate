import { MigrationInterface, QueryRunner } from "typeorm";

export class createMoviesTable1620488848844 implements MigrationInterface {
    name = "createMoviesTable1620488848844";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `movie` DROP FOREIGN KEY `FK_ca71a8287ce6e765d91e253b79f`",
        );
        await queryRunner.query(
            "ALTER TABLE `movie` CHANGE `movieGenreId` `movie_genre_id` int NULL",
        );
        await queryRunner.query(
            "ALTER TABLE `movie` ADD CONSTRAINT `FK_ff4217832445e646eed4f1a2480` FOREIGN KEY (`movie_genre_id`) REFERENCES `movie_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `movie` DROP FOREIGN KEY `FK_ff4217832445e646eed4f1a2480`",
        );
        await queryRunner.query(
            "ALTER TABLE `movie` CHANGE `movie_genre_id` `movieGenreId` int NULL",
        );
        await queryRunner.query(
            "ALTER TABLE `movie` ADD CONSTRAINT `FK_ca71a8287ce6e765d91e253b79f` FOREIGN KEY (`movieGenreId`) REFERENCES `movie_genre`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
        );
    }
}
