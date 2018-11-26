$(document).ready(function () {
        $.ajax(
            {
                url: LIST_SONG_API,
                type: 'GET',
                // contentType: "application/json; charset=utf-8",
                success: function (data, textStatus, jqXHR) {
                    console.log('success');
                    console.log(data);
                    console.log('-----');
                    console.log(data.responseText);
                    console.log('-----');
                    console.log(textStatus);
                    console.log('-----');
                    console.log(jqXHR);
                    var content = '';
                    for (var i = 0; i < data.length; i++) {
                        content += '<div class="song-item">';
                        content += '<div class="song-index">' + (i + 1) + '</div>';
                        content += '<div class="song-thumbnail" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\', \'' + data[i].thumbnail + '\')">';
                        content += '<img src="' + data[i].thumbnail + '" alt="">';
                        content += '<i class="far fa-play-circle fa-4x text-hide"></i>';
                        content += '</div>';
                        content += '<div class="song-infor">';
                        content += '<div class="song-name" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\', \'' + data[i].thumbnail + '\')">' + data[i].name + '</div>';
                        content += '<div class="song-singer">' + data[i].singer + '</div>';
                        content += '</div>';
                        content += '<div class="song-control" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\', \'' + data[i].thumbnail + '\')"><i class="fas fa-play fa-1x "></i></div>';
                        content += '<div class="song-control"><a href="song-detail.html?id=' + data[i].id + '"><i class="fas fa-info-circle fa-1x "></i></a></div>';
                        content += '<div class="song-control"><a href="' + data[i].link + '"><i class="fas fa-download fa-1x "></i></a></div>';
                        content += '</div>';
                    }
                    $('#list-song').html(content);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('error');
                    console.log(jqXHR);
                    console.log('-----');
                    console.log(jqXHR.responseText);
                    console.log('-----');
                    console.log(jqXHR.responseJSON.error);
                    console.log('-----');
                    console.log(textStatus);
                    console.log('-----');
                    console.log(errorThrown);

                }
            }
        )
    }
);

function playSong(link, name, singer, thumbnail) {
    $('#my-mp3').attr("src", link);
    $('#current-play-title').text('Current playing: ' + name + " - " + singer);
    document.getElementById('current-play-img').src = thumbnail;

}


$('.song-thumbnail').hover(
    function () {
        $('i').removeClass('text-hide');
    }
);
