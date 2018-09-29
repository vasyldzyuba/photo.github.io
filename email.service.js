app.factory('globalEmail', function () {
	let _email = [];
	let _emailId = 1;

	return {
		getEmail: function () {
			return _email;
		},
		getEmailId: function () {
			return _emailId;
		},
		setEmailId: function (emailId) {
			if (emailId < _emailId) alert('error')
			else _emailId = itemId;
		},
		setEmail: function (email) {
			_email = email;
		}
	}
})
