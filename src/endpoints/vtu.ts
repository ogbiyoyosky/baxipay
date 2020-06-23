import Request from "../request"
class MobileAirtime {
    apiKey: string;
    apiSecret: string;
    
    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey
        this.apiSecret = apiSecret
    }

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

        console.log(payload)

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