( function (angular) {
	angular
		.module('portfolioApp', ['ui.router','ui.bootstrap','ngAnimate', 'ngMaterial']);
} )(angular);
		
		

(function (angular){
	angular
		.module('portfolioApp')
		.config(routes);
                     
                      
	function routes($stateProvider, $urlRouterProvider, $compileProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url: '/',
				controller: 'homeCtrl',
				controllerAs: 'vm',
				// onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    // 				$timeout(function() { 
    //   				$location.hash($stateParams.scrollTo);
    //   				$anchorScroll()
    // 				}, 100)
    // 			}
			})
			// .state('about',{  
			// 	controller: 'aboutCtrl',
			// 	controllerAs: 'vm',
			// 	onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
   //  				$timeout(function() { 
   //    				$location.hash($stateParams.scrollTo);
   //    				$anchorScroll()
   //    				console.log("hukiiii");
   //  				}, 100)
   //  			}

			// })
// Albums is in main page, album is in partials
			.state('album',{  
				// url: '/album',
				url:'/album',
				templateUrl: '/partials/album.html',

				// templateUrl: 'partials.album.html',
				controller: 'albumCtrl',
				controllerAs: 'vm',
				// onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    // 				$timeout(function() { 
    //   				$location.hash($stateParams.scrollTo);
    //   				$anchorScroll()
    //   				console.log("hukiiii");
    // 				}, 100)
    // 			}

			})
			.state('solitude',{  
				// url: '/album',
				url:'/solitude',
				templateUrl: '/partials/solitude.html',

				// templateUrl: 'partials.album.html',
				controller: 'albumCtrl',
				controllerAs: 'vm',
				// onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    // 				$timeout(function() { 
    //   				$location.hash($stateParams.scrollTo);
    //   				$anchorScroll()
    //   				console.log("hukiiii");
    // 				}, 100)
    // 			}

			})


			.state('albums',{
				controller: 'albumsCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			})
			.state('skills',{
				// url: '/skills',
				// templateUrl: 'partials/skills.html',
				controller: 'skillsCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			})
			.state('contact',{
				// url: '/contact',
				// templateUrl: 'partials/contact.html',
				controller: 'contactCtrl',
				controllerAs: 'vm',
				onEnter: function ($location, $stateParams, $anchorScroll, $timeout) {
    				$timeout(function() { 
      				$location.hash($stateParams.scrollTo);
      				$anchorScroll()
    				}, 100)
    			}
			});
		$compileProvider.debugInfoEnabled(false);
	}


}  ) (angular);

(function (angular){	
	angular
		.module('portfolioApp')
		.controller('homeCtrl',homeCtrl);

	function homeCtrl ($scope, $location) {

		var vm = this;
	}
} ) (angular);


(function (angular){	
	angular
		.module('portfolioApp')
		.controller('albumCtrl',albumCtrl);

	function albumCtrl ($scope, $state, $location) {

		var vm = this;

		vm.reloadData = function(){
			$state.reload();
		}
	}
} ) (angular);


(function (angular){
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

//$rootscope,
	function navCtrl ($rootScope, $scope, $location, $anchorScroll){


			$scope.scrollTo = function (id) {
    		var old = $location.hash();
    		$location.hash(id);
    		$anchorScroll();
    		$location.hash(old);
 		} // need these to scroll down

		
		var vm = this;

		vm.currentUrl = currentUrl;

		//Autoscroll on top on statechange
		$rootScope.$on('$stateChangeSuccess', function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

		function currentUrl(urlLocation){
			return urlLocation === $location.url();
		}
// hamburger

// hamburger


	}
} ) (angular);
