"use strict";

/*
 * baxipay
 *
 * (c) Emmanuel Ogbiyoyo <nuel@nueljoe.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import axios from 'axios';
import {RequestInterface} from './interfaces/request.interface'

class Request implements RequestInterface {
    private _headers
    private _basicAuth
    private _auth
    private _isJson
    private _throwException

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
  async post(url: string, body, method = "post") {
    const headers = this._auth
      ? Object.assign({ Authorization: this._auth }, this._headers)
      : this._headers;

      let options: Object = {
        headers
      }
      
    try {
      let response
      if(method == 'post') {
        response = await axios.post(url, body, options, )
        console.log({response})
      } else {
       
        response = await axios.get(url, options)
      }
    
      return response;
    } catch ({ response, message }) {

      const error = new Error(message);
      error.name = response ? response.body : {};
      if (this._throwException) throw error;
      return response.body;
    }
  }
}

export default Request
