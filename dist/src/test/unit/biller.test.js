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
describe('Billers', () => {
    describe('Billers Processing', () => {
        it('Should fetch all billers providers', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.biller.fetchBillerProviders();
        }));
        it('Should fetch all billers categories', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.biller.fetchBillerCategories();
        }));
        it('Should fetch all billers service list', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.biller.fetchBillerServiceList();
        }));
        it('Should Gets billers products by category', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.biller.fetchProductByCategory('airtime');
        }));
    });
});
//# sourceMappingURL=biller.test.js.map