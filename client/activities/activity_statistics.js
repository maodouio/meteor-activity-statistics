Template.activityStatistics.helpers({
  user: function() {
    //console.log(this);
    return Meteor.users.findOne(this.userId);
  },
  userprofile: function() {
    //console.log(this);
    return UserProfiles.findOne({userId: this.userId});
  },
});
