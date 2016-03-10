/**
 * This file is part of the angular-gravatar package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {GravatarProvider} from "./provider/GravatarProvider";
import {GravatarComponent} from "./components/GravatarComponent";

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = factory(require('angular'));
    } else {
        return factory(root.angular);
    }
}(this, repository));

function repository(angular) {
    'use strict';

    var moduleName = 'vGravatar';

    angular
        .module(moduleName, [])
        .provider('Gravatar', GravatarProvider)
        .component("gravatar", new GravatarComponent())
    ;

    return moduleName;
}