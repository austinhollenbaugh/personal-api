var info = require('../models/info');

module.exports = {
	name: function (req, res, next) {
		res.json(info.name)
	},

	location: function (req, res, next) {
		res.json(info.location);
	},

	occupations: function (req, res, next) {
		console.log(req.query);
		if (req.query.order === 'desc') {
			res.json(info.occupations.sort());
		} else if (req.query.order === 'asc') {
			res.json(info.occupations.reverse());
		} else {
			res.json(info.occupations);
		}
	},
	
	latest: function (req, res, next) {
		var latestOcc = {};
		latestOcc.latestOccupation = info.occupations[info.occupations.length - 1];
		res.json(latestOcc);
	},

	hobbies: function (req, res, next) {
		res.json(info.hobbies);
	},

	hobbiesType: function (req, res, next) {
		var type = req.params.type;
		var hobbiesType = [];
		console.log(type);
		for (var i = 0; i < info.hobbies.length; i++) {
			if (info.hobbies[i].type ===  type) {
				hobbiesType.push(info.hobbies[i]);
				
			}
		}
		res.json(hobbiesType);
	},

	updateName: function (req, res, next) {
		info.name = req.body.name;
		res.json(info);
	},

	updateLocation: function (req, res, next) {
		info.location = req.body.location;
		res.json(info);
	},

	addHobby: function (req, res, next) {
		info.hobbies.push(req.body);
		res.json(info.hobbies);
	},

	addOcc: function (req, res, next) {
		info.occupations.push(req.body);
		res.json(info.occupations);
	},

	skills: function (req, res, next) {
		var experience = req.query.experience;
		var experienceArr = [];
		for (var i = 0; i < info.skills.length; i++) {
			if (experience === info.skills[i].experience) {
			experienceArr.push(info.skills[i]);
			
			} 
		}
		res.json(experienceArr);
	},

	addSkill: function (req, res, next) {
		info.skills.push(req.body);
		res.json(info.skills);
	}
}