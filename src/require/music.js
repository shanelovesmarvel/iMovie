/**
 * Created by Shane on 5/6/16.
 */
var bands = [
    {band: "Coldplay", song: "Yellow"},
    {band: "Oasis", song: "Whatever"},
    {band: "One Direction", song:"What makes you beautiful"},
    {band: "Green Day", song:"Boulevard of broken dreams"},
    {band: "Simple Plan", song: "Welcome to my life"},
    {band: "Coldplay", song: "Viva La Vida"},
];
define([], function(){
    var  music= function(band){
        this.getSongs = function(band){
            var songs = [];
            for(var i = 0; i < bands.length; i++){
                if(bands[i].band === band){
                    songs.push(bands[i].song);
                }
            }
            return songs;
        };
    };
    return music;
});