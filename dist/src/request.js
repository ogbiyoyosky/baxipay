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
/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const axios_1 = __importDefault(require("axios"));
class Request {
    constructor() {
        this._headers = {};
        this._basicAuth = null;
        this._auth = null;
        this._isJson = false;
        this._throwException = true;
    }
    /**
     * Set exception status
     *
     * @method setExceptionStatus
     *
     * @chainable
     */
    setExceptionStatus(status) {
        this._throwException = status;
        return this;
    }
    /**
     * Accept json
     *
     * @method isJson
     *
     * @chainable
     */
    acceptJson() {
        this._isJson = true;
        return this;
    }
    /**
     * Set auth header
     *
     * @method auth
     *
     * @param  {String} val
     *
     * @chainable
     */
    auth(val) {
        this._auth = val;
        return this;
    }
    /**
     * Set basic auth onrequest headers
     *
     * @method basicAuth
     *
     * @param  {String}  val
     *
     * @chainable
     */
    basicAuth(val) {
        this._basicAuth = val;
        return this;
    }
    /**
     * Set headers on request
     *
     * @method headers
     *
     * @param  {Object} headers
     *
     * @chainable
     */
    headers(headers) {
        this._headers = headers;
        return this;
    }
    /**
     * Make a post http request
     *
     * @method post
     *
     * @param  {String} url
     * @param  {Object} body
     *
     * @return {void}
     */
    post(url, body, method = "post") {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = this._auth
                ? Object.assign({ Authorization: this._auth }, this._headers)
                : this._headers;
            let options = {
                headers
            };
            try {
                let response;
                if (method == 'post') {
                    response = yield axios_1.default.post(url, body, options);
                    console.log({ response });
                }
                else {
                    response = yield axios_1.default.get(url, options);
                }
                return response;
            }
            catch ({ response, message }) {
                const error = new Error(message);
                error.name = response ? response.body : {};
                if (this._throwException)
                    throw error;
                return response.body;
            }
        });
    }
}
exports.default = Request;
//# sourceMappingURL=request.js.map