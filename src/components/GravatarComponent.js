/**
 * This file is part of the angular-gravatar package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {GravatarController} from "./../controllers/GravatarController";

export class GravatarComponent {
    constructor() {
        this.bindings = {
            email: '=',
            size: '@?'
        };
        this.template = require('./../views/gravatar.html');
        this.controller = GravatarController;
    }
}