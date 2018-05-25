angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: "<",
    onClick: "<"
  },
  controller: function () {
    this.onClick = ($index) => {
      console.log("onClick fires")
      $ctrl.selectVideo($index)
    }
  }
});
