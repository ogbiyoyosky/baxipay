
interface BaxiPayInterface {
    apiKey: string;
    apiSecret: string
}

class BaxiPay implements BaxiPayInterface {
    public apiKey;
    public apiSecret;

    constructor (apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
    }



}

export default BaxiPay;