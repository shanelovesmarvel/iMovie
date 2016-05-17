/**
 * Created by Shane on 5/6/16.
 */
require(['music','europe/coldplay', 'europe/oasis'], function(music, coldplay, oasis){
    var cp = new coldplay();
    var oa = new oasis();
    setTimeout(function(){
        document.getElementById("oa").innerHTML = oa.getSong();
    }, 0);
    document.getElementById("cp").innerHTML = "The songs are: " + cp.getSong() +
        "<br>" + "Lead singer is: " + cp.getLeadSinger();

});