(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/users/nicholleromero/repos',
      type: 'GET',
      success: function(data, message, xhr) {
        repos.all = data;
        callback();
      }
    })
  };

  module.repos = repos;

})(window);
