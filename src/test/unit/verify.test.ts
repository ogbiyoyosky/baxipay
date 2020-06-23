import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")


describe('Account Verification', () => {
    describe('Account Verification', () => {
        it('Should verify an account detail', async () => {
            const result = await baxipay.account.verifyAccount("dstv", "1102003467");
        });
    })

})
