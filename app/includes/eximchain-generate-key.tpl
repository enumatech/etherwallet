<main
  class="tab-pane block--container active"
  ng-controller='eximchainGenerateKeyCtrl'
  ng-if="globalService.currentTab == globalService.tabs.generateWallet.id && globalService.curNode == 'eximchain'"
>
  <div ng-if="!keyGenerated">
    <a tabindex="0" role="button" class="btn btn-primary" ng-click="generateKey()">
      Generate Key
    </a>
  </div>

  <div ng-if="keyGenerated">
    <textarea>{{address}}</textarea>
  </div>
</main>
