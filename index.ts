'use strict'

import MobileAirtime from "./src/endpoints/vtu"
interface BaxiPayInterface {
    apiKey: string;
    apiSecret: string
    vtu: MobileAirtime
}

class BaxiPay implements BaxiPayInterface {
    public apiKey;
    public apiSecret;
    public vtu;

    constructor (apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
        this.vtu = new MobileAirtime(apiKey, apiSecret)
    }



}

export default BaxiPay;