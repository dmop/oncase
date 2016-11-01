app.controller('dadosController', function($scope, $http, filterFilter) {
    $scope.app = "Dashboard";
    $scope.parlamentares = [];



    var carregarParlamentares = function() {
        $http.get('db/app.json').success(function(data) {
            $scope.parlamentares = data;

        });
    };

    $scope.getCountPartido = function(strCat) {
        return filterFilter($scope.parlamentares, {
            PARTIDO: strCat
        }).length;
    }

    $scope.getCountEstadoCivil = function(strCat) {
        return filterFilter($scope.parlamentares, {
            ESTADO_CIVIL: strCat
        }).length;
    }

    $scope.getCountVoto = function(strCat) {
        return filterFilter($scope.parlamentares, {
            VOTO: strCat
        }).length;
    }

    $scope.getCountVotoPartido = function(voto, partido) {
        return filterFilter($scope.parlamentares, {
            VOTO: voto,
            PARTIDO: partido
        }).length;
    }


    $scope.getCountVotoRegiao = function(voto, regiao) {
        return filterFilter($scope.parlamentares, {
            VOTO: voto,
            REGIAO: regiao
        }).length;
    }



    $scope.getCountEnsino = function(strCat) {
        return filterFilter($scope.parlamentares, {
            GRAU_INSTRUCAO: strCat
        }).length;
    }

    $scope.getCountFaixa = function(strCat) {
        return filterFilter($scope.parlamentares, {
            FAIXA_ETARIA: strCat
        }).length;
    }

    $scope.getCountSexo = function(strCat) {
        return filterFilter($scope.parlamentares, {
            SEXO: strCat
        }).length;
    }




    carregarParlamentares();



});
