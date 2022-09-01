import axios from 'axios';
import qs from 'qs';

let baseURL = 'https://paydapp.payx.cc/app/';

if (location.origin.indexOf('//dapp.payx.cc') > -1 ) {
    if (location.origin.indexOf('https') > -1) {
        baseURL = 'https://dapp.payx.cc/app/';
    } else {
        baseURL = 'http://dapp.payx.cc/app/';
    }
}




const httpInstance = axios.create({
    // baseURL: baseUrl,
    responseType: 'json',
    timeout: 5000000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    params: {},
    data: {},
    validateStatus(status) {
        return status >= 200 && status < 300;
    },
})

httpInstance.interceptors.request.use((config) => {
        const configs = config;
        if (localStorage.getItem('dapp_token')) {
            if (configs.method === "post") {
                configs.headers.token = localStorage.getItem('dapp_token')
            } else
            if (configs.method === "get") {
                configs.headers.token = localStorage.getItem('dapp_token')
            }
        }
        if (config.method === 'post') {
            configs.data = qs.stringify(config.data);
        }
        return configs;
    },
    error => Promise.reject(error),
);

httpInstance.interceptors.response.use((response) => {
    if (response.status == 200) {
        // console.log(response.data)
        if (response.data.code === 40008) {
            localStorage.removeItem('dapp_token')
            router.replace('/login');
        }
        return response.data
    }
}, (err) => {
    return Promise.reject(err)
})

function request(baseURL) {
    return {
      get(url, params = null, config = {}) {
          const options = {
              method: 'GET',
              url,
              params,
              ...config,
          }
          if (baseURL) options.baseURL = baseURL;
          return httpInstance(options);
      },
      post(url, data = null, config = {
          errorSelfProcessing: false,
      }) {
        const options = {
            method: 'POST',
            url,
            data,
            ...config,
        }
        if (baseURL) options.baseURL = baseURL;
        return httpInstance(options);
      },
    }
}

export const $http = request(baseURL)
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: $http,
            writable: false,
        })
    },
}