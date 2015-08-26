'use strict';

angular.module('yoFoodFlagApp')
    .controller('AllergiesCtrl', function ($scope, FURL, $location, Auth, toaster) {

        $scope.currentUser = Auth.user;
        $scope.signedIn = Auth.signedIn;
        console.log("AllergiesCtrl: Auth.user=", Auth.user);

        $scope.allergens = [
            {order: 1, category: 'Milk Products', item: 'Casein (Cows Milk)', item_name: 'caseinCowsMilk'},
            {order: 2, category: 'Milk Products', item: 'Goat Milk', item_name: 'goatMilk'},
            {order: 3, category: 'Cereals', item: 'Buckwheat', item_name: 'buckwheat'},
            {order: 4, category: 'Cereals', item: 'Rye', item_name: 'rye'},
            {order: 5, category: 'Misc', item: 'Brewers Yeast', item_name: 'brewersYeast'},
            {order: 6, category: 'Misc', item: 'Malt', item_name: 'malt'},
            {order: 7, category: 'Vegetables', item: 'Carrot', item_name: 'carrot'},
            {order: 8, category: 'Vegetables', item: 'Celery', item_name: 'celery'},
            {order: 9, category: 'Vegetables', item: 'Cucumber', item_name: 'cucumber'},
            {order: 10, category: 'Vegetables', item: 'Eggplant', item_name: 'eggplant'},
            {order: 11, category: 'Vegetables', item: 'Lettuce', item_name: 'lettuce'},
            {order: 12, category: 'Vegetables', item: 'Asparagus', item_name: 'asparagus'},
            {order: 13, category: 'Vegetables', item: 'Olive, Green', item_name: 'oliveGreen'},
            {order: 14, category: 'Vegetables', item: 'Brussel Sprouts', item_name: 'brusselSprouts'},
            {order: 15, category: 'Vegetables', item: 'Squash', item_name: 'squash'},
            {order: 16, category: 'Vegetables', item: 'Sweet Potato', item_name: 'sweetPotato'},
            {order: 17, category: 'Vegetables', item: 'Pea', item_name: 'pea'},
            {order: 18, category: 'Fruits', item: 'Blackberry', item_name: 'blackberry'},
            {order: 19, category: 'Fruits', item: 'Cranberry', item_name: 'cranberry'},
            {order: 20, category: 'Fruits', item: 'Raspberry', item_name: 'raspberry'},
            {order: 21, category: 'Fruits', item: 'Cherry', item_name: 'cherry'},
            {order: 22, category: 'Fruits', item: 'Peach', item_name: 'peach'},
            {order: 23, category: 'Fruits', item: 'Apricot', item_name: 'apricot'},
            {order: 24, category: 'Fruits', item: 'Watermelon', item_name: 'watermelon'},
            {order: 25, category: 'Fruits', item: 'Lemon', item_name: 'lemon'},
            {order: 26, category: 'Fruits', item: 'Grape', item_name: 'grape'},
            {order: 27, category: 'Nuts & Seeds', item: 'Brazil Nut', item_name: 'brazilNut'},
            {order: 28, category: 'Nuts & Seeds', item: 'Coconut', item_name: 'coconut'},
            {order: 29, category: 'Nuts & Seeds', item: 'Hazelnut', item_name: 'hazelnut'},
            {order: 30, category: 'Nuts & Seeds', item: 'Pistachio', item_name: 'pistachio'},
            {order: 31, category: 'Nuts & Seeds', item: 'Pecan', item_name: 'pecan'},
            {order: 32, category: 'Nuts & Seeds', item: 'Sunflower Seed', item_name: 'sunflowerSeed'},
            {order: 33, category: 'Nuts & Seeds', item: 'Dill Seed', item_name: 'dillSeed'},
            {order: 34, category: 'Herbs & Spices', item: 'Oregano', item_name: 'oregano'},
            {order: 35, category: 'Herbs & Spices', item: 'Parsely', item_name: 'parsely'},
            {order: 36, category: 'Herbs & Spices', item: 'Paprika', item_name: 'paprika'},
            {order: 37, category: 'Herbs & Spices', item: 'Basil', item_name: 'basil'},
            {order: 38, category: 'Herbs & Spices', item: 'Thyme', item_name: 'thyme'},
            {order: 39, category: 'Herbs & Spices', item: 'Black Pepper', item_name: 'blackPepper'},
            {order: 40, category: 'Herbs & Spices', item: 'Garlic', item_name: 'garlic'},
            {order: 41, category: 'Herbs & Spices', item: 'Ginger', item_name: 'ginger'},
            {order: 42, category: 'Herbs & Spices', item: 'Sage', item_name: 'sage'},
            {order: 43, category: 'Herbs & Spices', item: 'Vanilla', item_name: 'vanilla'},
            {order: 44, category: 'Herbs & Spices', item: 'Nutmeg', item_name: 'nutmeg'},
            {order: 45, category: 'Bean', item: 'Lentil', item_name: 'lentil'},
            {order: 46, category: 'Bean', item: 'Navy', item_name: 'navy'},
            {order: 47, category: 'Fish', item: 'Flounder', item_name: 'flounder'},
            {order: 48, category: 'Fish', item: 'Trout', item_name: 'trout'},
            {order: 49, category: 'Fish', item: 'Catfish', item_name: 'catfish'},
            {order: 50, category: 'Fish', item: 'Halibut', item_name: 'halibut'},
            {order: 51, category: 'Fish', item: 'Mackerel', item_name: 'mackerel'},
            {order: 52, category: 'Fish', item: 'Perch', item_name: 'perch'},
            {order: 53, category: 'Shellfish', item: 'Clam', item_name: 'clam'},
            {order: 54, category: 'Shellfish', item: 'Scallop', item_name: 'scallop'},
            {order: 55, category: 'Eggs', item: 'Egg White', item_name: 'eggWhite'},
            {order: 56, category: 'Eggs', item: 'Egg Yolk', item_name: 'eggYolk'},
            {order: 57, category: 'Milk Products', item: 'Whole Milk (Cows Milk)', item_name: 'wholeMilkCowsMilk'},
            {order: 58, category: 'Cereals', item: 'Barley', item_name: 'barley'},
            {order: 59, category: 'Cereals', item: 'Corn', item_name: 'corn'},
            {order: 60, category: 'Cereals', item: 'Oats', item_name: 'oats'},
            {order: 61, category: 'Cereals', item: 'Rice (Brown)', item_name: 'riceBrown'},
            {order: 62, category: 'Cereals', item: 'Wheat', item_name: 'wheat'},
            {order: 63, category: 'Misc', item: 'Cocoa', item_name: 'cocoa'},
            {order: 64, category: 'Misc', item: 'Hops', item_name: 'hops'},
            {order: 65, category: 'Nuts & Seeds', item: 'Almond', item_name: 'almond'},
            {order: 66, category: 'Nuts & Seeds', item: 'Cashew', item_name: 'cashew'},
            {order: 67, category: 'Nuts & Seeds', item: 'Sesame', item_name: 'sesame'},
            {order: 68, category: 'Nuts & Seeds', item: 'Walnut', item_name: 'walnut'},
            {order: 69, category: 'Herbs & Spices', item: 'Cinnamon', item_name: 'cinnamon'},
            {order: 70, category: 'Herbs & Spices', item: 'Mustard', item_name: 'mustard'},
            {order: 71, category: 'Fish', item: 'Bass', item_name: 'bass'},
            {order: 72, category: 'Fish', item: 'Cod', item_name: 'cod'},
            {order: 73, category: 'Fish', item: 'Salmon', item_name: 'salmon'},
            {order: 74, category: 'Fish', item: 'Tuna', item_name: 'tuna'},
            {order: 75, category: 'Shellfish', item: 'Crab', item_name: 'crab'},
            {order: 76, category: 'Shellfish', item: 'Lobster', item_name: 'lobster'},
            {order: 77, category: 'Shellfish', item: 'Oyster', item_name: 'oyster'},
            {order: 78, category: 'Shellfish', item: 'Shrimp', item_name: 'shrimp'},
            {order: 79, category: 'Vegetables', item: 'Avocado', item_name: 'avocado'},
            {order: 80, category: 'Vegetables', item: 'Broccoli', item_name: 'broccoli'},
            {order: 81, category: 'Vegetables', item: 'Cabbage', item_name: 'cabbage'},
            {order: 82, category: 'Vegetables', item: 'Cauliflower', item_name: 'cauliflower'},
            {order: 83, category: 'Vegetables', item: 'Green Pepper', item_name: 'greenPepper'},
            {order: 84, category: 'Vegetables', item: 'Kidney Bean', item_name: 'kidneyBean'},
            {order: 85, category: 'Vegetables', item: 'Mushroom', item_name: 'mushroom'},
            {order: 86, category: 'Vegetables', item: 'Onion', item_name: 'onion'},
            {order: 87, category: 'Vegetables', item: 'Peanut', item_name: 'peanut'},
            {order: 88, category: 'Vegetables', item: 'Pinto Bean', item_name: 'pintoBean'},
            {order: 89, category: 'Fruits', item: 'Apple', item_name: 'apple'},
            {order: 90, category: 'Fruits', item: 'Banana', item_name: 'banana'},
            {order: 91, category: 'Fruits', item: 'Blueberry', item_name: 'blueberry'},
            {order: 92, category: 'Fruits', item: 'Cantaloupe', item_name: 'cantaloupe'},
            {order: 93, category: 'Fruits', item: 'Grapefruit', item_name: 'grapefruit'},
            {order: 94, category: 'Fruits', item: 'Honeydew Melon', item_name: 'honeydewMelon'},
            {order: 95, category: 'Fruits', item: 'Orange', item_name: 'orange'},
            {order: 96, category: 'Fruits', item: 'Papaya', item_name: 'papaya'},
            {order: 97, category: 'Fruits', item: 'Pineapple', item_name: 'pineapple'},
            {order: 98, category: 'Fruits', item: 'Strawberry', item_name: 'strawberry'},
            {order: 99, category: 'Vegetables', item: 'Potato', item_name: 'potato'},
            {order: 100, category: 'Vegetables', item: 'Soybean', item_name: 'soybean'},
            {order: 101, category: 'Vegetables', item: 'Spinach', item_name: 'spinach'},
            {order: 102, category: 'Vegetables', item: 'Stringbean', item_name: 'stringbean'},
            {order: 103, category: 'Vegetables', item: 'Tomato', item_name: 'tomato'},
            {order: 104, category: 'Meat & Poultry', item: 'Beef', item_name: 'beef'},
            {order: 105, category: 'Meat & Poultry', item: 'Chicken', item_name: 'chicken'},
            {order: 106, category: 'Meat & Poultry', item: 'Lamb', item_name: 'lamb'},
            {order: 107, category: 'Meat & Poultry', item: 'Pork', item_name: 'pork'},
            {order: 108, category: 'Meat & Poultry', item: 'Turkey', item_name: 'turkey'}
        ];

        $scope.reactions = [
            {level: 0, name: '0 - No Reaction', color: 'inherit'},
            {level: 1, name: '1 - Equivocal', color: 'lime'},
            {level: 2, name: '2 - Small Reaction', color: 'greenyellow'},
            {level: 3, name: '3 - Moderate Reaction', color: 'yellow'},
            {level: 4, name: '4 - Large Reaction', color: 'orange'},
            {level: 5, name: '5 - Very Large Reaction', color: 'hotpink'}
        ];

        $scope.allergies = {
            caseinCowsMilk: $scope.reactions[0],
            goatMilk: $scope.reactions[0],
            buckwheat: $scope.reactions[0],
            rye: $scope.reactions[0],
            brewersYeast: $scope.reactions[0],
            malt: $scope.reactions[0],
            carrot: $scope.reactions[0],
            celery: $scope.reactions[0],
            cucumber: $scope.reactions[0],
            eggplant: $scope.reactions[0],
            lettuce: $scope.reactions[0],
            asparagus: $scope.reactions[0],
            oliveGreen: $scope.reactions[0],
            brusselSprouts: $scope.reactions[0],
            squash: $scope.reactions[0],
            sweetPotato: $scope.reactions[0],
            pea: $scope.reactions[0],
            blackberry: $scope.reactions[0],
            cranberry: $scope.reactions[0],
            raspberry: $scope.reactions[0],
            cherry: $scope.reactions[0],
            peach: $scope.reactions[0],
            apricot: $scope.reactions[0],
            watermelon: $scope.reactions[0],
            lemon: $scope.reactions[0],
            grape: $scope.reactions[0],
            brazilNut: $scope.reactions[0],
            coconut: $scope.reactions[0],
            hazelnut: $scope.reactions[0],
            pistachio: $scope.reactions[0],
            pecan: $scope.reactions[0],
            sunflowerSeed: $scope.reactions[0],
            dillSeed: $scope.reactions[0],
            oregano: $scope.reactions[0],
            parsely: $scope.reactions[0],
            paprika: $scope.reactions[0],
            basil: $scope.reactions[0],
            thyme: $scope.reactions[0],
            blackPepper: $scope.reactions[0],
            garlic: $scope.reactions[0],
            ginger: $scope.reactions[0],
            sage: $scope.reactions[0],
            vanilla: $scope.reactions[0],
            nutmeg: $scope.reactions[0],
            lentil: $scope.reactions[0],
            navy: $scope.reactions[0],
            flounder: $scope.reactions[0],
            trout: $scope.reactions[0],
            catfish: $scope.reactions[0],
            halibut: $scope.reactions[0],
            mackerel: $scope.reactions[0],
            perch: $scope.reactions[0],
            clam: $scope.reactions[0],
            scallop: $scope.reactions[0],
            eggWhite: $scope.reactions[0],
            eggYolk: $scope.reactions[0],
            wholeMilkCowsMilk: $scope.reactions[0],
            barley: $scope.reactions[0],
            corn: $scope.reactions[0],
            oats: $scope.reactions[0],
            riceBrown: $scope.reactions[0],
            wheat: $scope.reactions[0],
            cocoa: $scope.reactions[0],
            hops: $scope.reactions[0],
            almond: $scope.reactions[0],
            cashew: $scope.reactions[0],
            sesame: $scope.reactions[0],
            walnut: $scope.reactions[0],
            cinnamon: $scope.reactions[0],
            mustard: $scope.reactions[0],
            bass: $scope.reactions[0],
            cod: $scope.reactions[0],
            salmon: $scope.reactions[0],
            tuna: $scope.reactions[0],
            crab: $scope.reactions[0],
            lobster: $scope.reactions[0],
            oyster: $scope.reactions[0],
            shrimp: $scope.reactions[0],
            avocado: $scope.reactions[0],
            broccoli: $scope.reactions[0],
            cabbage: $scope.reactions[0],
            cauliflower: $scope.reactions[0],
            greenPepper: $scope.reactions[0],
            kidneyBean: $scope.reactions[0],
            mushroom: $scope.reactions[0],
            onion: $scope.reactions[0],
            peanut: $scope.reactions[0],
            pintoBean: $scope.reactions[0],
            apple: $scope.reactions[0],
            banana: $scope.reactions[0],
            blueberry: $scope.reactions[0],
            cantaloupe: $scope.reactions[0],
            grapefruit: $scope.reactions[0],
            honeydewMelon: $scope.reactions[0],
            orange: $scope.reactions[0],
            papaya: $scope.reactions[0],
            pineapple: $scope.reactions[0],
            strawberry: $scope.reactions[0],
            potato: $scope.reactions[0],
            soybean: $scope.reactions[0],
            spinach: $scope.reactions[0],
            stringbean: $scope.reactions[0],
            tomato: $scope.reactions[0],
            beef: $scope.reactions[0],
            chicken: $scope.reactions[0],
            lamb: $scope.reactions[0],
            pork: $scope.reactions[0],
            turkey: $scope.reactions[0]
        };

        $scope.numInCategory = function (category) {
            var allergenCtr;
            var cntShowInCategory = 0;
            var itemLevel;
            for (allergenCtr = 0; allergenCtr < $scope.allergens.length; allergenCtr++) {
                if ($scope.allergens[allergenCtr].category == category) {
                    itemLevel = $scope.allergies[$scope.allergens[allergenCtr].item_name].level;
                    if ($scope.showItem(itemLevel)) {
                        cntShowInCategory += 1;
                    }
                }
            }

            return cntShowInCategory;
        };

        $scope.orderBy = '';
        $scope.catSort = "['category','item']";
        $scope.lastCategory = '';
        $scope.showCategory = function (category, orderBy) {
            /*console.log("showCategory: category=" + category + ", orderBy=" + orderBy);*/
            var showTitle = false;
            if ((orderBy === "item") || (orderBy === "")) {
                showTitle = false;   // Don't show categories on alphabetical or nosort listing
            } else {
                showTitle = ((category != $scope.lastCategory) && ($scope.numInCategory(category) > 0));
                $scope.lastCategory = category;
            }
            return showTitle;
        };

        $scope.showLevel = {
            level0: true,
            level1: true,
            level2: true,
            level3: true,
            level4: true,
            level5: true
        };

        $scope.showItem = function (level) {
            /*console.log("showItem: level=" + level);*/
            var showIt = false;
            switch (level) {
                case 0:
                    if ($scope.showLevel.level0) {
                        showIt = true;
                    }
                    break;
                case 1:
                    if ($scope.showLevel.level1) {
                        showIt = true;
                    }
                    break;
                case 2:
                    if ($scope.showLevel.level2) {
                        showIt = true;
                    }
                    break;
                case 3:
                    if ($scope.showLevel.level3) {
                        showIt = true;
                    }
                    break;
                case 4:
                    if ($scope.showLevel.level4) {
                        showIt = true;
                    }
                    break;
                case 5:
                    if ($scope.showLevel.level5) {
                        showIt = true;
                    }
                    break;
                default:
                    showIt = false;
                    break;
            }
            return showIt;
        };

        $scope.resetAllergies = function () {
            var allergenCtr;
            var allergy;
            var userLevel;

            console.log("resetAllergies: signedIn=" + $scope.signedIn());
            if ($scope.signedIn()) {
                for (allergenCtr = 0; allergenCtr < $scope.allergens.length; allergenCtr++) {
                    allergy = $scope.allergens[allergenCtr].item_name;
                    userLevel = $scope.currentUser.profile.allergies[allergy];
                    if (userLevel == 'undefined') {
                        console.log("resetAllergies: undefined");
                        userLevel = 0;
                    }
                    if (userLevel === '') {
                        userLevel = 0;
                    }
                    $scope.allergies[allergy] = $scope.reactions[userLevel];
                }
            }

        };

        $scope.addAllergies = function () {

            var allergy;
            var userLevel;

            var profile = {
                uid: $scope.currentUser.profile.uid,
                name: $scope.currentUser.profile.name,
                email: $scope.currentUser.profile.email,
                gravatar: $scope.currentUser.profile.gravatar,
                provider: $scope.currentUser.profile.provider,
                allergies: {}
            };

            for (allergy in $scope.allergies) {
                userLevel = $scope.allergies[allergy].level;
                profile.allergies[allergy] = userLevel;
            }

            console.log("addAllergies: profile=", profile);
            console.log("addAllergies: uid=", $scope.currentUser.profile.uid);

            var profileRef = new Firebase(FURL + "profile/");
            profileRef.child($scope.currentUser.profile.uid).set(profile);
            toaster.pop('success', "Allergies Changed successfully");
        }

        $scope.resetAllergies();

    })
;
