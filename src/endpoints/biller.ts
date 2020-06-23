import Request from "../request"

/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class Biller {
    apiKey: string;
    apiSecret: string;
    
    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey
        this.apiSecret = apiSecret
    }

    /**
     * @method fetchBillerCategories - fetch all biller providers
     * @return <Promise>
     */
    fetchBillerProviders() {
        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/billers/provider/all'
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
     * @method fetchBillerServiceList - fetch all biller service list
     * @return <Promise>
     */
    fetchBillerServiceList() {
        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/billers/services/list'
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
     * @method fetchBillerCategories - fetch all biller Categories
     * @return <Promise>
     */
    fetchBillerCategories() {
        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/billers/category/all'
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
     * @method fetchProductByCategory - fetch aproduct by category
     * @return <Promise>
     */
    fetchProductByCategory(serviceType: string) {
        const payload: {
            service_type: string,
        } = {
            service_type: serviceType
        }

        const url: string = 'https://payments.baxipay.com.ng/api/baxipay/billers/services/category'
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

export default Biller;