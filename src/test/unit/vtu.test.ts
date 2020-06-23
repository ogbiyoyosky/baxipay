import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59", "hello")


describe('USER', () => {
    describe('GET /Airtime', () => {
        it('Should fetch all vtu airtime provider', async () => {
          
            const result = await baxipay.vtu.fetchProviders();
        });

        it('Should fetch all vtu airtime provider', async () => {
           
            const result = await baxipay.vtu.requestAirtime('07035361770',500,'mtn',207,'prepaid','AX14967P2Z');
            console.log(result)
        });

    })

})
