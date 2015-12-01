Router.map(function() {
  this.route('activityStatistics', {
    template: 'activityStatistics',
    path: '/activities/:_id/statistics/',
    waitOn: function () {
      return Meteor.subscribe('activityStatistics', this.params._id);
    },
    data: function() {
      return {
        registrations: Registrations.find({}, {sort: {createdAt: 1}}),
        enrollments: Enrollments.find(),
        activity: Activities.findOne(),
        user: Meteor.users.findOne({_id: this.params._id}),
        userprofiles: UserProfiles.find(),
        logintype: '/activities/' + this.params._id + '/statistics/'
      };
    }
  });
});
