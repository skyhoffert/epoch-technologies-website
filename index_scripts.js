var wait_time = 200;
var fade_time_header = 500;
var fade_time_main_image = 1000;
var fade_time_hi = 1500;
var started_fade = false;
var started_fadeHi = false;
var start_time = 0;

var interval = setInterval(fade, 1000/30);
var inthi = setInterval(fadeHi, 1000/30);

function fade()
{
    // wait until ready
    if (document.readyState != "complete"){ return; }

    // set the start time if not set yet
    if (!started_fade){ start_time = new Date().getTime(); started_fade = true; }

    // find the elapsed time since start
    var elapsed = (new Date().getTime() - start_time);

    // wait for some frames before fading in
    if (elapsed < wait_time){ return; }
    elapsed -= wait_time;

    document.getElementsByClassName("header")[0].style.opacity = elapsed / fade_time_header;

    // wait until header has faded in
    if (elapsed < fade_time_header){ return; }
    elapsed -= fade_time_header;

    document.getElementsByClassName("main_image")[0].style.opacity = elapsed / fade_time_main_image;
    
    // stop running this function when complete
    if (elapsed > fade_time_main_image){ clearInterval(interval); }
}

function fadeHi()
{
    // wait until ready
    if (document.readyState != "complete"){ return; }
    if (!started_fadeHi)
    {
        start_fadeHi = new Date().getTime();
    }
    else
    {
        var elapsed = (new Date().getTime() - start_fadeHi)
        document.getElementsByClassName("hi")[0].style.opacity = elapsed / fade_time_hi;
        
        if (elapsed > fade_time_hi){ clearInterval(inthi); }
    }

    if (document.getElementsByClassName("hi")[0].getBoundingClientRect().top < window.innerHeight)
    {
        started_fadeHi = true;
    }
}
