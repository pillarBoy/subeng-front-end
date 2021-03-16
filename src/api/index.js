import axios from 'axios';

const instance = axios.create({
    timeout: 10000,
    baseURL: '/api',
    headers: {
        post: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        Accept: 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    },
    validateStatus(status) {
        return status >= 200 && status < 300;
    }
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // common request
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        if (response && response.data) {
            const { code, msg } = response.data

            if (+code >= 500) {
                showMsg('Server Error')
            } else if (code !== 200) {
                showMsg(msg)
            }
            return response.data;
        } else {
            alert('no response data');
            return Promise.reject({
                message: 'no response data'
            })
        }
    },
    err => {
        if (axios.isCancel(err)) {
            if (process.env.NODE_ENV !== 'production') {
              
            }
        // time out
        } else if (err.code === 'ECONNABORTED') {
            showMsg('Time Out')
        } else {
            showMsg(err.message)
        }
        return Promise.reject(err);
    }
)

export default instance;
