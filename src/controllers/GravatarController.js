/**
 * This file is part of the angular-gravatar package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {md5} from "./../services/Hash";

GravatarController.$inject = ['$scope', 'Gravatar'];

export class GravatarController {

    /**
     * @param $scope
     * @param Gravatar
     */
    constructor($scope, Gravatar) {
        this.model = Gravatar;
        this.size = this.size || this.model.size;
        this.$scope = $scope;

        if (this.email) {
            this.src = 'http://www.gravatar.com/avatar/' + md5(this.email) + '?s=' + this.size + '&d=' + this.model.defaultImage;
        }

        this.$scope.$watch(() => {
            return this.email
        }, this.onEmailChange.bind(this));
    }

    onEmailChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.src = 'http://www.gravatar.com/avatar/' + md5(newValue) + '?s=' + this.size + '&d=' + this.model.defaultImage;
        }
    }
}

