angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: "<",
    onClick: "<"
  },
  // controller: function () {
  //   this.onClick = () => {
  //     console.log("onClick fires")
  //     $ctrl.selectVideo($index)
  //   }
  // }
});
