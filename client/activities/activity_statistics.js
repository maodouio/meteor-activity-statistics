Template.activityStatistics.helpers({
  user: function() {
    // console.log(this);
    return Meteor.users.findOne(this.userId);
  },
  userprofile: function() {
    // console.log(this);
    return UserProfiles.findOne({userId: this.userId});
  },

  isRegister: function() {
    console.log('this userId', this._id);
    var list = Registrations.findOne({userId: this._id}, {sort: {createdAt: -1}});
    console.log('list', list);
    if( list !== undefined ) {
      return "是";
    }
    else {
      return "否";
    }
  },
});
