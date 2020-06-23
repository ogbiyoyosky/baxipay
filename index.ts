'use strict'

import MobileAirtime from "./src/endpoints/vtu";
import Biller from "./src/endpoints/biller";
import Verify from "./src/endpoints/verify"
import Cable from "./src/endpoints/cable";
import Data from "./src/endpoints/data";
import Epin from "./src/endpoints/epin";
import Electricity from "./src/endpoints/electricity";


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


const proxyHandler = {
  get(target, name) {
      if(!target.hasOwnProperty(name)) {
          throw new Error(`${name} is not a vali methos no Baxipay`)
      }
    /**
     * if node is inspecting then stick to target properties
     */
    if (typeof name === "symbol" || name === "inspect") {
      return target[name];
    }

    return target[name];
  },
};


/**
 * @class Baxipay - parent class for all categories of baxipay
 */

 
class BaxiPay implements BaxiPayInterface {
    public apiKey;
    public apiSecret;
    public vtu;
    public biller
    public account
    public cable
    public data
    public epin
    public electricity

    constructor (apiKey: string) {
        this.apiKey = apiKey;
        this.vtu = new MobileAirtime(apiKey)
        this.biller = new Biller(apiKey)
        this.account = new Verify(apiKey)
        this.cable = new Cable(apiKey)
        this.data = new Data(apiKey)
        this.epin = new Epin(apiKey)
        this.electricity = new Electricity(apiKey)
        return new Proxy(this, proxyHandler);

    }
}

export default BaxiPay;



