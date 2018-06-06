var eximchain = function() {};

eximchain.generateKey = function(callback) {
  callback({
    error: false,
    address: '0x9193d626a1A3668AAdeaFF4fda44A3a52A784021'
  });
};

eximchain.getAddress = function() {
  console.log('getAddress');
};

eximchain.getCurrentBlock = function(callback) {};

eximchain.getBalance = function(addr, callback) {};

eximchain.getTransaction = function(txHash, callback) {};

eximchain.getTransactionData = function(addr, callback) {};

eximchain.sendRawTx = function(rawTx, callback) {};

eximchain.getEstimatedGas = function(txobj, callback) {};

eximchain.getEthCall = function(txobj, callback) {};

eximchain.queuePost = function() {};

eximchain.post = function(data, callback) {};

module.exports = eximchain;
