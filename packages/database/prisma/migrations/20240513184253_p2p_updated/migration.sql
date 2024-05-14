/*
  Warnings:

  - Added the required column `fromUserPhone` to the `P2pTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "P2pTransactions" ADD COLUMN     "fromUserPhone" TEXT NOT NULL;
