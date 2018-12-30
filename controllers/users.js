'use strict';

module.exports = function(_,passport){
	return{
		SetRouting: function(router){
			router.get('/',this.indexPage);
			router.get('/signup',this.getSignUp);
			router.post('/signup',this.postSignUp)
		},
		indexPage: function(req,res){
			return res.render('index',{test:'This is a testttt'});
		},
		getSignUp: function(req,res){
			return res.render('signup');
		}
	}
} 