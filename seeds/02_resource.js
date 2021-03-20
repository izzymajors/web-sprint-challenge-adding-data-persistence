
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name:'sqlite', resource_description:'db management'},
        {resource_name:'nodemon index.js', resource_description:'server script'},
        {resource_name:'npm', resource_description:'command tool'},
      ]);
    });
};
