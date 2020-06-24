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
class Verify {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @method verifyAccount - verifvy an account such as dstv, got
     * @param serviceType - service type e.g dstv
     * @param accountNumber the iuc number / card number
     */
    verifyAccount(serviceType, accountNumber) {
        const payload = {
            service_type: serviceType,
            account_number: accountNumber
        };
        const url = 'https://payments.baxipay.com.ng/api/baxipay/services/namefinder';
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
exports.default = Verify;
//# sourceMappingURL=verify.js.map