Template.activityStatistics.helpers({
  user: function() {
    // console.log(this);
    return Meteor.users.findOne(this.userId);
  },
  userprofile: function() {
    // console.log(this);
    var profile = UserProfiles.findOne({userId: this.userId});
    if (profile === undefined) {
      profile = {
        name: "",
        cellNumber: "",
        email: ""
      };
    }
    return profile;
  },

  isRegister: function() {
    console.log('this userId', this._id);
    var list = Registrations.findOne({userId: this._id}, {sort: {createdAt: -1}});
    console.log('list', list);
    if( list !== undefined ) {
      return "已签到";
    }
    else {
      return "未签到";
    }
  },
  enrolledUnregisteredCount: function() {
    return Enrollments.find({isRegistered: false}).count();
  },
  unenrolledRegisteredCount: function() {
    return Registrations.find({isEnrolled: false}).count();
  },
  e_num: function(){
    return Enrollments.find().count();
  },
  notCome: function() {
    var enrolled = Enrollments.find().count();
    var Registered = Enrollments.find({isRegistered: false}).count();
    var notCome = enrolled - Registered;
    return notCome;
  },
  statistics: function() {
    var enrolled = Enrollments.find().count();
    var Registered = Enrollments.find({isRegistered: false}).count();
    var notCome = enrolled - Registered;

    var e_num = Enrollments.find().count();
    var percentage = (notCome / e_num * 100).toFixed(0);
    var fix = isNaN(percentage)?0:percentage ;
    return fix + "%";
  }
});

Template.activityStatistics.events({

  // $(function() {
  // 	tableSort($('table'));
  // })
  // function tableSort(jqTableObj) {
  // 	jqTableObj.find('thead th').click(
  // 		function(){
  // 			var dataType = $(this).attr('dataType');
  // 			var tableObj = $(this).closest('table');
  // 			var index = tableObj.find('thead th').index(this) + 1;
  // 			var arr = [];
  // 			var row = tableObj.find('tbody tr');
  //
  // 			$.each(row, function(i){arr[i] = row[i]});
  //
  // 			if($(this).hasClass('current')){
  // 				arr.reverse();
  // 			} else {
  // 				arr.sort(Utils.sortStr(index, dataType))
  //
  // 				tableObj.find('thead th').removeClass('current');
  // 				$(this).addClass('current');
  // 			}
  //
  // 			var fragment = document.createDocumentFragment();
  //
  // 			$.each(arr, function(i){
  // 				fragment.appendChild(arr[i]);
  // 			});
  //
  // 			tableObj.find('tbody').append(fragment);
  // 		}
  // 	);
  //
  // 	var Utils = (function() {
  // 		function sortStr(index, dataType){
  // 			return function(a, b){
  // 				var aText=$(a).find('td:nth-child(' + index + ')').attr('_order') || $(a).find('td:nth-child(' + index + ')').text();
  // 				var bText=$(b).find('td:nth-child(' + index + ')').attr('_order') || $(b).find('td:nth-child(' + index + ')').text();
  //
  // 				if(dataType != 'text'){
  // 					aText=parseNonText(aText, dataType);
  // 					bText=parseNonText(bText, dataType);
  //
  // 					return aText > bText ? -1 : bText > aText ? 1 : 0;
  // 				} else {
  // 					return aText.localeCompare(bText)
  // 				}
  // 			}
  // 		}
  //
  // 		function parseNonText(data, dataType){
  // 			switch(dataType){
  // 				case 'int':
  // 					return parseInt(data) || 0
  // 				case 'float':
  // 					return parseFloat(data) || 0
  // 				default :
  // 				return filterStr(data)
  // 			}
  // 		}
  //
  // 		//过滤中文字符和$
  // 		function filterStr(data){
  // 			if (!data) {
  // 				return 0;
  // 			}
  //
  // 			return parseFloat(data.replace(/^[\$a-zA-z\u4e00-\u9fa5 ]*(.*?)[a-zA-z\u4e00-\u9fa5 ]*$/,'$1'));
  // 		}
  //
  // 		return {'sortStr' : sortStr};
  // 	})();
  // }
});
