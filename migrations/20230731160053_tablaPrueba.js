/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable("tabla_pruebas").then (function(exist){
    if(!exist){
        return knex.schema.createTable ("tabla_pruebas", function(table){
            table.increments("tabla_pruebas_id").primary();
            table.string("title").notNullable();
            table.string("description");
            table.boolean("done").defaultTo(false);
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable("tabla_pruebas").then(function(exist){
    if(exist){
        return knex.schema.dropTable("tabla_pruebas");
    }
  })
};
