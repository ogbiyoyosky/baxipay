import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")


describe('USER', () => {
    describe('Airtime Processing', () => {
        it('Should fetch all vtu airtime provider', async () => {
            const result = await baxipay.vtu.fetchProviders();
        });

        it('Should request airtime for a number', async () => {
            const result = await baxipay.vtu.requestAirtime('07035361770',500,'mtn',207,'prepaid','AX497P2Z');
        });

    })
})
