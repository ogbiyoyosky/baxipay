"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
require('ts-mocha');
const baxipay = new index_1.default("5adea9-044a85-708016-7ae662-646d59");
describe('Data', () => {
    describe('Data processing', () => {
        it('Should fetch all  data bundle provider', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.data.fetchDataBundleProviders();
        }));
        it('Should fetch data bundle from provider', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.data.fetchDataBundle("mtn");
        }));
        it('Should Request data from the provider.', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.data.requestDataBundle("07035361770", 200, "mtn", "200", 207, "AX14s68P2Z");
        }));
    });
});
//# sourceMappingURL=data.test.js.map