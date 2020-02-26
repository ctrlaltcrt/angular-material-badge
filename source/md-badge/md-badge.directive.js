function mdBadge($mdTheming) {
    const directive = {
        link: link,
        replace: true,
        restrict: 'E',
        template: require('./md-badge.html'),
        transclude: true
    };

    return directive;

    function link(scope, element, attributes) {
        $mdTheming(element);
    }
}

mdBadge.$inject = ['$mdTheming'];

export default mdBadge;
