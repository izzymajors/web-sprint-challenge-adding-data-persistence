
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description:'use sqlite studio ', task_notes:'test data in tables', task_completed:'false',project_id:'1'},

        {task_description:'using nodemon', task_notes:'npm i nodemon and write a server script', task_completed:'false',project_id:'2'},

        {task_description:'use npm', task_notes:'a command tool to work terminal', task_completed:'false', project_id:'3'},
      ]);
    });
};
