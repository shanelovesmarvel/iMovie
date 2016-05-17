/**
 * Created by Shane on 5/6/16.
 */
define(['music'], function(music){
    var mu = new music();
    var band = function(){
        var _name = "Oasis";
        this.getSong = function(){
            return mu.getSongs(_name);
        };
    };
    return band;
});