angular.module('video-player', [])

.component('app', {
  templateUrl: 'src/templates/app.html',
})

.controller('AppCtrl', function() {
  this.videos = exampleVideoData;
  this.currentVideo = this.videos[0];
  this.handleVideoEntryClick = (video) => {
    this.currentVideo = video;
  }
});
