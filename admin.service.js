app.factory('global', function () {
	let vm = this;

	let _photos = [
		{
			id: 1,
			name: 'nature',
			src: 'nature1.jpg'
        },
		{
			id: 2,
			name: 'nature',
			src: 'nature2.jpg'
        },
		{
			id: 3,
			name: 'nature',
			src: 'nature3.jpg'
        },
		{
			id: 4,
			name: 'nature',
			src: 'nature4.jpg'
        },
		{
			id: 5,
			name: 'nature',
			src: 'nature5.jpg'
        },
		{
			id: 6,
			name: 'animal',
			src: 'animal1.jpg'
        },
		{
			id: 7,
			name: 'animal',
			src: 'animal2.jpg'
        },
		{
			id: 8,
			name: 'animal',
			src: 'animal3.jpg'
        },
		{
			id: 9,
			name: 'animal',
			src: 'animal4.jpg'
        },
		{
			id: 10,
			name: 'animal',
			src: 'animal5.jpg'
        },
		{
			id: 11,
			name: 'animal',
			src: 'animal6.jpg'
        },
		{
			id: 12,
			name: 'animal',
			src: 'animal7.jpg'
        },
		{
			id: 13,
			name: 'nature',
			src: 'nature6.jpg'
        },
		{
			id: 14,
			name: 'nature',
			src: 'nature7.jpg'
        },
		{
			id: 15,
			name: 'girls',
			src: 'Anya1.jpg'
        },
		{
			id: 16,
			name: 'girls',
			src: 'Anya2.jpg'
        },
		{
			id: 17,
			name: 'girls',
			src: 'Anya3.jpg'
        },
		{
			id: 18,
			name: 'girls',
			src: 'Anya4.jpg'
        },
		{
			id: 19,
			name: 'girls',
			src: 'Anya5.jpg'
        },
		{
			id: 20,
			name: 'girls',
			src: 'Anya6.jpg'
        },
		{
			id: 21,
			name: 'girls',
			src: 'Anya8.jpg'
        },
		{
			id: 22,
			name: 'girls',
			src: 'Anya9.jpg'
        },
		{
			id: 23,
			name: 'girls',
			src: 'Ira.jpg'
        },
		{
			id: 24,
			name: 'girls',
			src: 'ira2.jpg'
        },
		{
			id: 25,
			name: 'girls',
			src: 'Olya.jpg'
        },
		{
			id: 26,
			name: 'nature',
			src: 'nature8.jpg'
        }
	];
	let _photosId = 27;

	return {
		getPhoto: function () {
			return _photos;
		},
		getPhotoId: function () {
			return _photosId;
		},
		setPhotoId: function (PhotoId) {
			if (PhotoId < _photosId) alert('error');
			else _photosId = PhotoId;
		}
	}
});
