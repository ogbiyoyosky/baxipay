"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("../request"));
/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class Biller {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @method fetchBillerCategories - fetch all biller providers
     * @return <Promise>
     */
    fetchBillerProviders() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/billers/provider/all';
        return new Promise((resolve, reject) => {
            return new request_1.default()
                .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
            })
                .acceptJson()
                .post(url, {}, 'get')
                .then(resolve)
                .catch(reject);
        });
    }
    /**
     * @method fetchBillerServiceList - fetch all biller service list
     * @return <Promise>
     */
    fetchBillerServiceList() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/billers/services/list';
        return new Promise((resolve, reject) => {
            return new request_1.default()
                .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
            })
                .acceptJson()
                .post(url, {}, 'get')
                .then(resolve)
                .catch(reject);
        });
    }
    /**
     * @method fetchBillerCategories - fetch all biller Categories
     * @return <Promise>
     */
    fetchBillerCategories() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/billers/category/all';
        return new Promise((resolve, reject) => {
            return new request_1.default()
                .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
            })
                .acceptJson()
                .post(url, {}, 'get')
                .then(resolve)
                .catch(reject);
        });
    }
    /**
    * @method fetchProductByCategory - fetch aproduct by category
    * @return <Promise>
    */
    fetchProductByCategory(serviceType) {
        const payload = {
            service_type: serviceType
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/billers/services/category';
        return new Promise((resolve, reject) => {
            return new request_1.default()
                .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
                "X-CSRF-Token": "",
            })
                .acceptJson()
                .post(url, payload)
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.default = Biller;
//# sourceMappingURL=biller.js.map