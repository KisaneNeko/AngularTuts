/**
 * Created by nowacki on 17.02.2016.
 */
angular.module('app', [])
    .controller('superHeroCtrl', function() {
        this.heroList = [
            'superman', 'batman', 'hulk', 'flash'
        ];
    });