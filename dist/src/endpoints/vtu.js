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
class MobileAirtime {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @method fetchProviders - fetch all providers for airtime
     */
    fetchProviders() {
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/airtime/providers';
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
     * @method requestAirtime - recharge a phone number with airtime
     * @param phone {String} - phone number
     * @param amount {Number} amount
     * @param serviceType {String} service type e.g mtn
     * @param agentId {Number} agent code
     * @param plan {String} plan e.g prepaid
     * @param agentReference {String} generate reference
     */
    requestAirtime(phone, amount, serviceType, agentId, plan, agentReference) {
        const payload = {
            phone,
            amount,
            service_type: serviceType,
            plan,
            agentId,
            agentReference
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/airtime/request';
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
exports.default = MobileAirtime;
//# sourceMappingURL=vtu.js.map