Meteor.startup(function () {
  console.log("Package activity-statistics startup...");
  console.log("Session.set('hasPackageActivityStatistics', true);");
  Session.set('hasPackageActivityStatistics', true);
});
