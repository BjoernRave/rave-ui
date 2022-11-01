/*
  Warnings:

  - A unique constraint covering the columns `[attributeId,name]` on the table `AttributeChoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `FarmDevice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `WindFarm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `FarmDevice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FarmDevice` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AttributeChoice_attributeId_name_key` ON `AttributeChoice`(`attributeId`, `name`);

-- CreateIndex
CREATE UNIQUE INDEX `FarmDevice_name_key` ON `FarmDevice`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Permission_name_key` ON `Permission`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `WindFarm_name_key` ON `WindFarm`(`name`);
