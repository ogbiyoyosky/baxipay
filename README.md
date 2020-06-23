# Baxipay Nodejs Library

## Baxipay Endpoints/Services exposed by the library

- VTU
- Biller
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

### Contributing

- You can contribute by extending the README file to contain more examples and explanations of how to use the package
