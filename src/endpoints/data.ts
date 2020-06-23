import Request from "../request"

/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class Data {
    apiKey: string;
  
    
    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

     /**
     * @method fetchaDataBundleProviders - fetch all data bundle providers
     * @return <Promise>
     */
    fetchaDataBundleProviders() {
        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/databundle/providers'
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
     * @method fetchDataBundle -Fetches Available Network Bundles for Bundle Providers
     * @param serviceType - This is the service you are trying fetch its bundles e.g mtn, airtel, glo, 9mobile
     */
    fetchDataBundle(serviceType: string) {
        const payload: {
            service_type: string

        } = {
            service_type: serviceType
        }

        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/databundle/bundles'
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



    /**
     * @method requestDataBundle  Purchase data bundle from MTN, AIRTEL, GLO, 9MOBILE, SMILE
     * @param {String} phone 
     * @param {Number} amount 
     * @param {String} serviceType 
     * @param {String} dataCode 
     * @param {Number} agentId 
     * @param {String} agentReference 
     */
    requestDataBundle(phone: string, amount: string, serviceType: string,dataCode: string, agentId: number, agentReference: string) {
        const payload ={
            service_type: serviceType,
            phone,
            amount,
            datacode: dataCode,
            agentId,
            agentReference

        }

        console.log(payload)

        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/services/multichoice/addons'
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

export default Data;