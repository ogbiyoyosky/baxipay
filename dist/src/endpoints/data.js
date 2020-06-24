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
class Data {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
    * @method fetchaDataBundleProviders - fetch all data bundle providers
    * @return <Promise>
    */
    fetchDataBundleProviders() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/databundle/providers';
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
     * @method fetchDataBundle -Fetches Available Network Bundles for Bundle Providers
     * @param serviceType - This is the service you are trying fetch its bundles e.g mtn, airtel, glo, 9mobile
     */
    fetchDataBundle(serviceType) {
        const payload = {
            service_type: serviceType
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/databundle/bundles';
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
    /**
     * @method requestDataBundle  Purchase data bundle from MTN, AIRTEL, GLO, 9MOBILE, SMILE
     * @param {String} phone
     * @param {Number} amount
     * @param {String} serviceType
     * @param {String} dataCode
     * @param {Number} agentId
     * @param {String} agentReference
     */
    requestDataBundle(phone, amount, serviceType, dataCode, agentId, agentReference) {
        const payload = {
            service_type: serviceType,
            phone,
            amount,
            datacode: dataCode,
            agentId,
            agentReference
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/multichoice/addons';
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
exports.default = Data;
//# sourceMappingURL=data.js.map