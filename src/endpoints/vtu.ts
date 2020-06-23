import Request from "../request"

/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class MobileAirtime {
    apiKey: string;
    
    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

    /**
     * @method fetchProviders - fetch all providers for airtime
     */
    fetchProviders() {
        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/airtime/providers'
        return new Promise((resolve, reject ) => {
            return new Request()
            .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
              })
            .acceptJson()
            .post(url, {}, 'get')
            .then(resolve)
            .catch(reject);
        })
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
    requestAirtime(phone: string, amount: number, serviceType: string, agentId: number, plan: string, agentReference: string) {
        const payload: {
            phone: string,
            amount: number,
            service_type: string,
            plan: string,
            agentId: number
            agentReference: string
        } = {
            phone,
            amount,
            service_type: serviceType,
            plan,
            agentId,
            agentReference
        }

        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/airtime/request'
        return new Promise((resolve, reject ) => {
            return new Request()
            .headers({
                "Baxi-date": new Date().toISOString(),
                "x-api-key": this.apiKey,
                "X-CSRF-Token": "",
              })
            .acceptJson()
            .post(url, payload)
            .then(resolve)
            .catch(reject);
        })
    }
}

export default MobileAirtime;