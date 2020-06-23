import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59", "hello")


describe('Billers', () => {
    describe('GET /Billers', () => {
        it('Should fetch all billers providers', async () => {
            const result = await baxipay.biller.fetchBillerProviders();
        });

        it('Should fetch all billers categories', async () => {
            const result = await baxipay.biller.fetchBillerCategories();
        });

        it('Should fetch all billers service list', async () => {
            const result = await baxipay.biller.fetchBillerServiceList();
        });

        it('Should Gets billers products by category', async () => {
            const result = await baxipay.biller.fetchProductByCategory('airtime');
        });

    })

})
