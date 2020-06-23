import Request from "../request"

/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class Verify {
    apiKey: string;
    apiSecret: string;
    
    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey
        this.apiSecret = apiSecret
    }
    

    /**
     * @method verifyAccount - verifvy an account such as dstv, got
     * @param serviceType - service type e.g dstv
     * @param accountNumber the iuc number / card number
     */
    verifyAccount(serviceType: string, accountNumber: string) {
        const payload: {
            service_type: string,
            account_number: string,
        } = {
            service_type: serviceType,
            account_number: accountNumber
        }

        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/namefinder'
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

export default Verify;