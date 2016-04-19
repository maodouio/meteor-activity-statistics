Meteor.publishComposite("activityStatistics", function(activityId) {
  return {
    find: function() {
      return Activities.find({_id: activityId});
    },
    children: [
      {
        find: function(activity) {
          return Registrations.find({activityId: activity._id});
        },
        children: [
          {
            find: function(registration) {
              return Meteor.users.find({_id: registration.userId});
            },
          },
          {
            find: function(registration) {
              return UserProfiles.find({userId: registration.userId});
            },      
          }
        ]
      },
      {
        find: function (activity) {
          return Enrollments.find({activityId: activity._id});
        },
        children: [
          {
            find: function(enrollment) {
              return Meteor.users.find({_id: enrollment.userId});
            },
          },
          {
            find: function(enrollment) {
              console.log("publishComposite:", enrollment);
              return UserProfiles.find({userId: enrollment.userId});
            },
          }
        ]
      },
    ],
  };
});
