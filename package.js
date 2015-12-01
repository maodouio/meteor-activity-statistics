Package.describe({
  name: 'maodouio:activity-statistics',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-activity-statistics.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('templating', 'client');

  //client
  api.addFiles([
     // admin screens
     'client/activities/activity_statistics.html',
     'client/activities/activity_statistics.js',
   ], ["client"]);

  api.addFiles("lib/routes.js");

  api.addFiles("server/publications/statistics.js", "server");
});
