angular.module('video-player')

.filter('trustAsResourceUrl', ['$sce', function($sce) {
return function(val) {
  return $sce.trustAsResourceUrl(val);
};
}])
.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: "<"
  },
  controller: function (){
    this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  }
}
});
