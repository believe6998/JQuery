document.addEventListener('DOMContentLoaded', function () {
    loadSongs();
});

function loadSongs() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var listSong = JSON.parse(this.responseText);
            var content = '';
            for (var i = 0; i < listSong.length; i++) {
                content += '<div class="song-item">';
                content += '<div class="song-index">' + (i + 1) + '</div>';
                content += '<div class="song-thumbnail" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\', \'' + listSong[i].thumbnail + '\')">';
                content += '<img src="' + listSong[i].thumbnail + '" alt="">';
                content += '<i class="far fa-play-circle fa-4x text-hide"></i>';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\', \'' + listSong[i].thumbnail + '\')">' + listSong[i].name + '</div>';
                content += '<div class="song-singer">' + listSong[i].singer + '</div>';
                content += '</div>';
                // content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\', \'' + listSong[i].thumbnail + '\')"><i class="fas fa-play fa-1x "></i></div>';
                content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '"><i class="fas fa-info-circle fa-1x "></i></a></div>';
                content += '<div class="song-control"><a href="' + listSong[i].link + '"><i class="fas fa-download fa-1x "></i></a></div>';
                content += '</div>';
            }
            document.getElementById('list-song').innerHTML = content;
        } else if (this.readyState == 4 && (this.status == 401 || this.status == 403)) {
            alert('This page required logged in to continue!')
            $('#login-modal').modal('show');
        }
    }
    xmlHttpRequest.open('GET', MY_SONG_API, true);
    xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
    xmlHttpRequest.send();
}

function playSong(link, name, singer, thumbnail) {
    $('#my-mp3').attr("src", link);
    $('#current-play-title').text('Current playing: ' + name + " - " + singer);
    document.getElementById('current-play-img').src = thumbnail;

}




