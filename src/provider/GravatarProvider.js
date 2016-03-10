/**
 * This file is part of the angular-gravatar package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Gravatar} from "./../model/Gravatar";

export class GravatarProvider {

    constructor() {
        this.config = {
            size: 100,
            defaultImage: 'mm'
        };
    }

    /**
     * Configure.
     *
     * @param {object} params
     */
    configure(params) {
        for (var attr in params) {
            if (params.hasOwnProperty(attr)) {
                this.config[attr] = params[attr];
            }
        }

        return this.config;
    };

    $get() {
        return new Gravatar(this.config.size, this.config.defaultImage);
    }
}
