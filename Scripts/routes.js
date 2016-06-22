page('/', function() {
  Project.fetchAll(function() {
    projectView.init();
  });
};
// , projectConroller.index);

page('/projects', Project.fetchAll);

page('/about', aboutController.index);



// page('/title/:title',
//   projectController.loadByTitle,
//   projectController.index);



page();
