'use strict';

angular.module('yoFoodFlagApp')
    .controller('AllergiesCtrl', function ($scope, FURL, $location, Auth, toaster) {

        $scope.currentUser = Auth.user;
        console.log("addAllergies: Auth.user=", Auth.user);

        $scope.addAllergies = function () {

            var profile = {
                uid: $scope.currentUser.profile.uid,
                name: $scope.currentUser.profile.name,
                email: $scope.currentUser.profile.email,
                gravatar: $scope.currentUser.profile.gravatar,
                provider: $scope.currentUser.profile.provider,
                milk: $scope.allergies.milk,
                soy: $scope.allergies.soy,
                wheat: $scope.allergies.wheat,
                egg: $scope.allergies.egg,
                peanut: $scope.allergies.peanut,
                tree_nut: $scope.allergies.tree_nut,
                fish: $scope.allergies.fish,
                shellfish: $scope.allergies.shellfish
            };

            console.log("addAllergies: profile=", profile);
            console.log("addAllergies: uid=", $scope.currentUser.profile.uid);

            var profileRef = new Firebase(FURL + "profile/");
            profileRef.child($scope.currentUser.profile.uid).set(profile);
            toaster.pop('success', "Allergies Changed successfully");
        }

    });
