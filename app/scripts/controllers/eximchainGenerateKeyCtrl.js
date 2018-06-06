module.exports = function eximchainGenerateKeyCtrl($scope) {
  $scope.ajaxReq = ajaxReq;
  $scope.keyGenerated = false;

  $scope.generateKey = function() {
    console.log('generateKey');

    $scope.ajaxReq.generateKey(function(data) {
      if (data.error) {
      } else {
        $scope.keyGenerated = true;
        console.log(data.address);
        $scope.address = data.address;
      }
    });
  };
};
