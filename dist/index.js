'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vtu_1 = __importDefault(require("./src/endpoints/vtu"));
const biller_1 = __importDefault(require("./src/endpoints/biller"));
const verify_1 = __importDefault(require("./src/endpoints/verify"));
const cable_1 = __importDefault(require("./src/endpoints/cable"));
const data_1 = __importDefault(require("./src/endpoints/data"));
const epin_1 = __importDefault(require("./src/endpoints/epin"));
const electricity_1 = __importDefault(require("./src/endpoints/electricity"));
const proxyHandler = {
    get(target, name) {
        if (!target.hasOwnProperty(name)) {
            throw new Error(`${name} is not a vali methos no Baxipay`);
        }
        /**
         * if node is inspecting then stick to target properties
         */
        if (typeof name === "symbol" || name === "inspect") {
            return target[name];
        }
        return target[name];
    },
};
/**
 * @class Baxipay - parent class for all categories of baxipay
 */
class BaxiPay {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.vtu = new vtu_1.default(apiKey);
        this.biller = new biller_1.default(apiKey);
        this.account = new verify_1.default(apiKey);
        this.cable = new cable_1.default(apiKey);
        this.data = new data_1.default(apiKey);
        this.epin = new epin_1.default(apiKey);
        this.electricity = new electricity_1.default(apiKey);
        return new Proxy(this, proxyHandler);
    }
}
exports.default = BaxiPay;
//# sourceMappingURL=index.js.map