## Baxipay

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/circleci/circleci-docs)
![GitHub repo size](https://img.shields.io/github/repo-size/Vectormike/baxipay)
![GitHub contributors](https://img.shields.io/github/contributors/Vectormike/baxipay)
![Twitter Follow](https://img.shields.io/twitter/follow/Vectormike_?style=social)

<a href="https://www.npmjs.com/package/baxipay" target="_blank"><img src="https://img.shields.io/npm/v/baxipay.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/baxipay" target="_blank"><img src="https://img.shields.io/npm/dm/baxipay.svg" alt="NPM Downloads" /></a>

Nodejs API wrapper for [Baxipay]()

## Baxipay Endpoints/Services exposed by the library

- VTU
- Biller
- Verify
- Cable
- Data
- Electricity
- ePin
- Verify

Visit the [Baxipay Website](https://www.baxipay.com.ng/) to get a full overview of the services listed above.

## Get Started

### Installation

`npm install baxipay`

### Usage

To get Live API Key, you will have to [contact support](https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Adev%40baxi.com.ng).
For Test key, go [here](https://payments.baxipay.com.ng//api/documentation)

`const Baxipay = require('baxipay'); const baxipay = new Baxipay(API_KEY);`

#### VTU

Operations relating to Airtime recharge

###### Fetching a list of available network providers integrated

`const result = await baxipay.vtu.fetchProviders();`

###### Recharge mobile airtime from MTN, AIRTEL, GLO, 9-MOBILE, SMILE

`const result = await baxipay.vtu.requestAirtime('07035361770',500,'mtn',207,'prepaid','AX497P2Z');`

#### Biller

Activities that has to do basic information about billers

###### Gets the list of all billers

`const result = await baxipay.biller.fetchBillerProviders();`

###### Gets the list of all biller products.

`const result = await baxipay.biller.fetchBillerServiceList();`

###### Gets various types of billers category

`const result = await baxipay.biller.fetchBillerCategories();`

#### Cable

Operations relating to Cable TV Subscriptions

###### Retrieves cable tv providers and thier codes

`const result = await baxipay.cable.fetchCableProviders();`

###### Retrieves subscription bundles for Cable TV product

`const result = await baxipay.cable.multichoiceList("dstv");`

###### Retrieves Addons that can be added along side the selected subscription bundle.

`const result = await baxipay.cable.multichoiceAddon("dstv", "ACSSE36");`

###### Cable TV Subscription for Multichoice Only (DSTV, GOTV)

`const result = await baxipay.cable.multichoiceRequest("dstv","NLTESE36", 1122334455, 4200, "1","HDPVRE36","1",207,"AX14s63P2k");`

### Data Bundle

Operations relating to Data Bundles

###### Retrieves databundle providers and their codes

`const result = await baxipay.data.fetchDataBundleProviders();`

###### Fetches Available Network Bundles for Bundle Providers

`const result = await baxipay.data.fetchDataBundle("mtn");`

###### Purchase data bundle from MTN, AIRTEL, GLO, 9MOBILE, SMILE

`const result = await baxipay.data.requestDataBundle("07035361770", 200, "mtn", "200", 207,"AX14s68P2Z");`

### Electricity

Operations relating to purchase of electricity services

###### Gets various types of electricity billers

`const result = await baxipay.electricity.fetchDataElectricityProviders();`

###### Retrieves available pin bundle types (9Mobile, Glo, Waec, Bulksms, Spectranet)

`const result = await baxipay.electricity.verifyAccount("ikeja_electric_prepaid","04042404048");`

###### Purchase available pin bundle types (9Mobile, Glo, Waec, Bulksms, Spectranet)

`const result = await baxipay.electricity.requestElectricity("04042404048", 2000, "08012345678", "ikeja_electric_prepaid", 205,"ASF33309d458");`

### ePin

Operations relating to purchase of ePin services

###### Retrieves epin providers and their service type codes

`const result = await baxipay.epin.fetchEpinProviders();`

###### Retrieves available pin bundle types (9Mobile, Glo, Waec, Bulksms, Spectranet)

`const result = await baxipay.epin.fetchEpinBundle("glo");`

###### Purchase available pin bundle types (9Mobile, Glo, Waec, Bulksms, Spectranet)

`const result = await baxipay.epin.requestEpinBundle("glo",1,100, 100, 207,"AX14s68P2Z");`

### Contributing

- You can contribute by extending the README file to contain more examples and explanations of how to use the package.

### Authors

- [Emmanuel Ogbiyoyo](https://www.linkedin.com/in/emmanuel-ogbiyoyo-36b044168/?originalSubdomain=ng)
  nuel@nueljoe.com
- [Victor Jonah](https://www.linkedin.com/in/victor-jonah/) victorjonah199@gmail.com

### License

The code is available as open source under the terms of the
[MIT License](https://opensource.org/licenses/MIT)
