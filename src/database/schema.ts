import { pgSchema, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Schema = pgSchema("Database_Schema");

export const AppUsers = Schema.table("AppUsers", {
  uid: uuid("uid").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  phone: varchar("phone", { length: 255 }).unique().notNull(),
  dateOfBirth: timestamp("dateOfBirth"),
  occupation: varchar("occupation", { length: 255 }).notNull(),
  createdOn: timestamp("createdOn").notNull().defaultNow(),
  updatedOn: timestamp("updatedOn")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
