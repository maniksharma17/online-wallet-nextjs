/*
  Warnings:

  - Added the required column `time` to the `P2pTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "P2pTransactions" ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
