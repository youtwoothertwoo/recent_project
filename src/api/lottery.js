import request from '@/utils/request'

let LotteryApi = {
  /*获取数据*/
  getData(data, errorback) {
    return request._get('/shop/plus.lottery/setting', data, errorback);
  },
  /*编辑*/
  EditLottery(data, errorback) {
    return request._post('/shop/plus.lottery/setting', data, errorback);
  },
  /*列表*/
  recordList(data, errorback) {
    return request._post('/shop/plus.lottery/record', data, errorback);
  },
  getAward(data, errorback) {
    return request._post('/shop/plus.lottery/award', data, errorback);
  },
  send(data, errorback) {
    return request._post('/shop/plus.lottery/send', data, errorback);
  },
  detail(data, errorback) {
    return request._post('/shop/plus.lottery/detail', data, errorback);
  },
}

export default LotteryApi;
