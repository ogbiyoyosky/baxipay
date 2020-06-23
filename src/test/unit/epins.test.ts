import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")


describe('Epins', () => {
    describe('Epins processing', () => {
        it('Should fetch all epin providers', async () => {
            const result = await baxipay.epin.fetchEpinProviders();
        });

        it('Should fetch Available Epin Bundles for Bundle Providers', async () => {
            const result = await baxipay.epin.fetchEpinBundle("glo");
        });

        it('Should Request data from the provider.', async () => {
            const result = await baxipay.epin.requestEpinBundle("glo",1,100, 100, 207,"AX14s68P2Z");
        });

    })

})
