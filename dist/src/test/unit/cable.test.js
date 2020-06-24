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
describe('Cable', () => {
    describe('Cable processing', () => {
        it('Should fetch all  cable providers', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.cable.fetchCableProviders();
        }));
        it('Should Get package list on multichoice e.g dstv, gotv', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.cable.multichoiceList("dstv");
        }));
        it('Should fetch Retrieves Addons that can be added along side the selected subscription bundle.', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.cable.multichoiceAddon("dstv", "ACSSE36");
        }));
        it('Should process Cable TV Subscription for Multichoice Only (DSTV, GOTV)', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.cable.multichoiceRequest("dstv", "NLTESE36", 1122334455, 4200, "1", "HDPVRE36", "1", 207, "AX14s63P2k");
        }));
    });
});
//# sourceMappingURL=cable.test.js.map