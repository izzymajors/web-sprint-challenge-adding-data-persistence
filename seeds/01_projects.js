
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id:'1', project_name: 'foo', project_description:'null', project_completed:'false'},
        
        {project_id:'2',project_name: 'sprint', project_description:'build a back-end db', project_completed:'false'},

        {project_id:'3', project_name: 'end-points', project_description:'create end points for the database', project_completed:'false'},
      ]);
    });
};
