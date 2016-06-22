(function(module) {
  var projectsController = {};

  Project.createTable();


  projectsController.index = function(ctx, next) {
    projectView.index(ctx.projects);
  };

  projectsController.loadById = function(ctx, next) {
    var projectData = function(project) {
      ctx.projects = project;
      console.log(project);
      next();
    };

    Project.findWhere('id', ctx.params.id, projectData);
  };



  projectsController.loadByTitle = function(ctx, next) {
    var titleData = function(projectsByTitle) {
      ctx.projects = projectsByTitle;
      next();
    };

    Project.findWhere('title', ctx.params.titleName.replace('+', ' '), titleData);
  };



  projectsController.loadAll = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.projects = Project.all;
      next();
    };

    if (Projects.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      //fires fetchAll
      Project.fetchAll(projectData);
    }
  };


  module.projectsController = projectsController;
})(window);
