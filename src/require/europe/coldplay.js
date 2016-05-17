/**
 * Created by Shane on 5/6/16.
 */
var members = {
    leadSinger: 'Chris Martin',
    keyboard: 'Guy Berryman',
    guitar: 'Jonny Buckland',
    drummer: 'Will Champion'
};
define(['music'], function(music){
    var mu = new music();
    var band = function(){
        var _name = "Coldplay";
        this.getSong = function(){
            return mu.getSongs(_name);
        };
        this.getLeadSinger = function(){
            return members.leadSinger;
        };
    };
    return band;
});