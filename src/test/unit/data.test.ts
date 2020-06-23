import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")


describe('Data', () => {
    describe('Data processing', () => {
        it('Should fetch all  data bundle provider', async () => {
            const result = await baxipay.data.fetchDataBundleProviders();
        });

        it('Should fetch data bundle from provider', async () => {
            const result = await baxipay.data.fetchDataBundle("mtn");
        });

        it('Should Request data from the provider.', async () => {
            const result = await baxipay.data.requestDataBundle("07035361770", 200, "mtn", "200", 207,"AX14s68P2Z");
        });


    })

})
