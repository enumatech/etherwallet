var eximchain = function() {};

eximchain.getAddress = function() {};

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
