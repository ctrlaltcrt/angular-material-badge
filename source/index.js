import ngMaterial from 'angular-material';

import mdBadge from './md-badge/md-badge.directive';

export default window.angular.module('klickspace.ngMdBadge', [ngMaterial])
    .directive('mdBadge', mdBadge).name
