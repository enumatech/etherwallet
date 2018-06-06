var api = {};
var eximchain = {};

api.post = function(url, data, cb) {
  return ajaxReq.http.post(ajaxReq.service + url, data, config).then(
    function(resp) {
      cb(resp.data);
    },
    function() {
      cb({ err: true, msg: 'connection error', data: '' });
    }
  );
};

api.generateKey = function(cb) {
  return api.post('/generate-key', {}, function(data) {
    cb({
      error: false,
      address: '0x9193d626a1A3668AAdeaFF4fda44A3a52A784021'
    });
  });
};

api.executeTransaction = function(params, cb) {
  return api.post(
    '/execute-transaction',
    {
      from: params.from,
      to: params.to,
      amount: params.amount,
      gas_limit: params.gasLimit,
      gas_prices: params.gasPrice,
      data: params.data
    },
    function(resp) {}
  );
};

api.getBalance = function(params, cb) {
  return api.post('/get-balance', { address: params.address }, function(resp) {
    cb();
  });
};

eximchain.generateKey = function() {
  console.log('generateKey');
}

eximchain.getAddress = function() {
  console.log('getAddress');
};

eximchain.getCurrentBlock = function(cb) {
  console.log('getCurrentBlock');
  cb({});
};

eximchain.getBalance = function(addr, cb) {
  console.log('getBalance', addr);
  cb();
};

eximchain.getTransaction = function(txHash, cb) {
  console.log('getTransaction');
  cb();
};

eximchain.getTransactionData = function(addr, cb) {
  console.log('getTransactionData');
  cb();
};

eximchain.sendRawTx = function(rawTx, cb) {
  console.log('sendRawTx');
  cb();
};

eximchain.getEstimatedGas = function(txobj, cb) {
  console.log('getEstimatedGas');
  cb();
};

eximchain.getEthCall = function(txobj, cb) {
  console.log('getEthCall');
  cb();
};

eximchain.queuePost = function() {
  console.log('queuePost');
  cb();
};

eximchain.post = function(data, cb) {
  console.log('post');
  cb();
};

module.exports = eximchain;
