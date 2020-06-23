'use strict'

import MobileAirtime from "./src/endpoints/vtu";
import Biller from "./src/endpoints/biller";
import Verify from "./src/endpoints/verify"


/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface BaxiPayInterface {
    apiKey: string;
    apiSecret: string
    vtu: MobileAirtime
}
/**
 * @class Baxipay - parent class for all categories of baxipay
 */
class BaxiPay implements BaxiPayInterface {
    public apiKey;
    public apiSecret;
    public vtu;
    public biller
    public account

    constructor (apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
        this.vtu = new MobileAirtime(apiKey, apiSecret)
        this.biller = new Biller(apiKey, apiSecret)
        this.account = new Verify(apiKey, apiSecret)
    }
}

export default BaxiPay;