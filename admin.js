app.controller('adminCtrl', function (global, globalEmail) {
	let vm = this;
	vm.album = [];
	vm.album = global.getPhoto();
	vm.email = globalEmail.getEmail();
	vm.currentItem = {};
	vm.addPhoto = function () {
		vm.id = global.getPhotoId();
		vm.currentItem.id = vm.id++;
		vm.album.push(vm.currentItem);
		console.log(vm.album);
		console.log(vm.currentItem);
		global.setPhotoId(vm.id);
	};

	vm.albumName = [
		{
			id: 1,
			name: 'nature'
            },
		{
			id: 2,
			name: 'animal'
            },
		{
			id: 4,
			name: 'girls'
            }
        ];
	vm.albumId = 5;
	vm.btnAddName = function () {
		if (vm.addAlbum.length != 0) {
			vm.albumName.push({
				id: vm.albumId++,
				name: vm.addAlbum
			})
			vm.addAlbum = '';
			console.log(vm.albumName)
		} else {
			alert('Enter the name of new album!');
		}
	};

	vm.currentItem = {};
	vm.addItem = function () {
		if (!vm.currentItem.id) {
			let id = global.getItemId();
			vm.currentItem.id = id++;
			global.setItemId(id);
			vm.items.push(vm.currentItem);
			console.log(vm.items)
		}
	};
	vm.addAlbumName = null;
	vm.editName = function (index, edit) {
		vm.addAlbumName = edit.name;
		$('#editModal').modal('show');
		vm.saveName = function () {
			edit.name = vm.addAlbumName;
			vm.addAlbumName = '';
		}
	};

	vm.removeAlbum = function (index) {
		vm.albumName.splice(index, 1);
	};

	vm.removePhoto = function (index) {
		vm.album.splice(index, 1);
	};
	vm.removeMes = function (index) {
		vm.email.splice(index, 1);
	};
	$(function () {
		$('.dashbord').hide();
		$('#btnLogin').click(function () {
			let login = $('#log').val();
			let password = $('#pass').val();
			if (login == 'yartyna' && password == '2109fifvz') {
				$('.loginContainer').hide();
				$('.selectCont').show();
				$('.dashbord').show();
				$('#log').val('');
				$('#pass').val('');
			} else {
				alert('Try again!');
				$('#log').val('');
				$('#pass').val('');
			}
		})
	});
});

app.directive("selectNgFiles", function () {
	return {
		require: "ngModel",
		link: function (scope, elem, attrs, ngModel) {
			elem.on("change", function (e) {
				let files = elem[0].files[0].name;
				ngModel.$setViewValue(files);
				console.log(files)
			})
		}
	}
});
