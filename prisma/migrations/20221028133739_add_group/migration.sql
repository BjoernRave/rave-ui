/*
  Warnings:

  - A unique constraint covering the columns `[farmId]` on the table `WindFarm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `farmId` to the `WindFarm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FarmDevice` ADD COLUMN `windTurbineId` INTEGER NULL;

-- AlterTable
ALTER TABLE `WindFarm` ADD COLUMN `farmId` INTEGER NOT NULL,
    ADD COLUMN `group` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `WindTurbine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `windFarmId` INTEGER NULL,

    UNIQUE INDEX `WindTurbine_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `WindFarm_farmId_key` ON `WindFarm`(`farmId`);

-- AddForeignKey
ALTER TABLE `WindTurbine` ADD CONSTRAINT `WindTurbine_windFarmId_fkey` FOREIGN KEY (`windFarmId`) REFERENCES `WindFarm`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FarmDevice` ADD CONSTRAINT `FarmDevice_windTurbineId_fkey` FOREIGN KEY (`windTurbineId`) REFERENCES `WindTurbine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
