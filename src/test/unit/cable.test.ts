import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")


describe('Cable', () => {
    describe('Cable processing', () => {
        it('Should fetch all  cable providers', async () => {
            const result = await baxipay.cable.fetchCableProviders();
        });

        it('Should Get package list on multichoice e.g dstv, gotv', async () => {
            const result = await baxipay.cable.multichoiceList("dstv");
        });

        it('Should fetch Retrieves Addons that can be added along side the selected subscription bundle.', async () => {
            const result = await baxipay.cable.multichoiceAddon("dstv", "ACSSE36");
        });

        it('Should process Cable TV Subscription for Multichoice Only (DSTV, GOTV)', async () => {
            const result = await baxipay.cable.multichoiceRequest("dstv","NLTESE36", 1122334455, 4200, "1","HDPVRE36","1",207,"AX14s63P2k")
        });

    })

})
