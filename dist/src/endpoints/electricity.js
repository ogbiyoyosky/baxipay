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
class Electricity {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
    * @method fetchDataElectricityProviders - Gets various types of electricity billers
    * @return <Promise>
    */
    fetchDataElectricityProviders() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/electricity/billers';
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
     * @method fetchDataBundle -Verify a user before making an electricity payment
     * @param serviceType - This is the service you are trying fetch its bundles e.g mtn, airtel, glo, 9mobile
     * @param accountNumber - User Meter Number
     */
    verifyAccount(serviceType, accountNumber) {
        const payload = {
            service_type: serviceType,
            account_number: accountNumber
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/electricity/verify';
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
     * @method requestElectricity - Make an electricity purchase request
     * @param {String} accountNumber -
     * @param {Number} amount
     * @param {String} phone
     * @param {String} serviceType
     * @param {Number} agentId
     * @param {String} agentReference
     */
    requestElectricity(accountNumber, amount, phone, serviceType, agentId, agentReference) {
        const payload = {
            account_number: accountNumber,
            service_type: serviceType,
            phone,
            amount,
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
exports.default = Electricity;
//# sourceMappingURL=electricity.js.map