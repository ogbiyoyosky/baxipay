import { expect } from 'chai';
import BaxiPay from "../../../index"
require('ts-mocha');
const baxipay = new BaxiPay("5adea9-044a85-708016-7ae662-646d59")

describe('Electricity', () => {
    describe('Electricity processing', () => {
        it('Should fetch all  data bundle provider', async () => {
            const result = await baxipay.electricity.fetchDataElectricityProviders();
        });

        it('Should fetch data bundle from provider', async () => {
            const result = await baxipay.electricity.verifyAccount("ikeja_electric_prepaid","04042404048");
        });

        it('Should Request data from the provider.', async () => {
            const result = await baxipay.electricity.requestElectricity("04042404048", 2000, "08012345678", "ikeja_electric_prepaid", 205,"ASF33309d458");
        });
    })
})
