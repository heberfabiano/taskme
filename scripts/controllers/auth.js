'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

	if (Auth.signedIn()) {
		$location.path('/');
	}

	$scope.register = function(user) {
		Auth.register(user).then(function() {
			toaster.pop('success', "Registrado com sucesso.");
			//console.log("Registrado com sucesso");
			$location.path('/');
		}, function(err) {
			toaster.pop('error', "Ops, algo deu errado!");
			//console.log("Erro no registro...");
		});
	}

	$scope.facebookRegister = function() {
		Auth.facebookRegister();
	}

	$scope.login = function(user) {
		Auth.login(user)
			.then(function() {
				toaster.pop('success', "Login realizado com sucesso.");
				//console.log("Logado com sucesos");
				$location.path('/');
			}, function(err) {
				toaster.pop('error', "Ops, algo deu errado!");
				//console.log("Erro no login...");
			});
	}

	$scope.changePassword = function(user) {
		Auth.changePassword(user)
			.then(function() {

				// As change password view is a modal, reset form
				$scope.user.email = '';
				$scope.user.oldPass = '';
				$scope.user.newPass = '';

				toaster.pop('success', "Senha alterada com sucesso.");
				//console.log("Senha alterada com sucesso");
			}, function(err) {
				toaster.pop('error', "Ops, algo deu errado!");
				//console.log("Erro na alteração da senha");
			});
	}

})