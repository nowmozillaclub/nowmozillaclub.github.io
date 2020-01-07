
var secondContentH1 = document.getElementsByClassName("second-content")[0].getElementsByTagName("h1")[0];
var iSymbol = document.getElementsByClassName('i-symbol')[0];
var textspan = secondContentH1.getElementsByTagName("span")[1];

secondContentH1.onmouseover = function()
{
    textspan.style.left = "10px";
    iSymbol.style.opacity = "1";
    iSymbol.style.left = "10px";
}
secondContentH1.onmouseout = function()
{
    textspan.style.left = "0px";
    iSymbol.style.opacity = "0";
    iSymbol.style.left = "-10px";
}

//---------------Another one-------------//
var mozImg = document.getElementById("mozilla-icon");
var spanMozImg = document.getElementById("after-icon");

mozImg.onmouseover = function()
{
    // spanMozImg.style.opacity = "1";
    spanMozImg.className = "welp";
}
mozImg.onmouseout = function()
{
    // spanMozImg.style.opacity = "0";
    spanMozImg.className = "";
}

// --- animating the hamburger icon to do a dropdown --- //

var hamburger = document.getElementById("hamburger");
var navbarSect = document.getElementById("navbar-button");
var dropdown = false;

hamburger.onclick = function()
{
    if(dropdown==false)
    {
        navbarSect.className = "expand";
        navbarSect.style.display = "block";
        dropdown = true;
    }
    else
    {
        navbarSect.className = "collapse";
        navbarSect.style.display = "none";
        dropdown = false;
    }
};

//---------quote section----------//
var getAll = document.getElementsByClassName("quote")[0].getElementsByTagName("p");
var getAllSpans = document.getElementsByClassName("quote")[0].getElementsByTagName("span");

var index = 0;

function mytry()
{
    if(index<=4)
    {
        if(index!=0)
        {
            getAll[index-1].style.display = "none";
            getAll[index-1].className = " ";
            getAllSpans[index-1].style.display = "none";
            getAllSpans[index-1].className = " ";
        }
        else
        {}

        if(index!=4)
        {
            getAll[index].style.display = "inline-block";
            getAll[index].className = "addAnimations";
            getAllSpans[index].style.display = "inline-block";
            getAllSpans[index].className = "anotherone";
            ++index;
        }
        else
        {
            index=0;
        }
    }
}

setInterval(mytry,3500);

// --- styling them social buttons now --- //


// -- getting the icons -- //
var getFacebook = document.getElementsByClassName("fab fa-facebook-f")[0];
var getInsta = document.getElementsByClassName("fab fa-instagram")[0];
var getTwitter = document.getElementsByClassName("fab fa-twitter")[0];
var getWhatsapp = document.getElementsByClassName("fab fa-whatsapp")[0];
var getGithub = document.getElementsByClassName("fab fa-github")[0];

// -- getting the respective parent elements -- //

var getFaceDiv = document.getElementById("faceDiv");
var getInstaDiv = document.getElementById("instaDiv");
var getTwitterDiv = document.getElementById("twitterDiv");
var getWhatsappDiv = document.getElementById("whatsappDiv");
var getGithubDiv = document.getElementById("githubDiv");

getFaceDiv.onmouseover = function()
{
    getFacebook.className = "fab fa-facebook-f" + " peekaboo";
};
getFaceDiv.onmouseout = function()
{
    getFacebook.className = "fab fa-facebook-f" +" unpeekaboo";
};

getTwitterDiv.onmouseover = function()
{
    getTwitter.className = "fab fa-twitter" + " peekaboo";
};
getTwitterDiv.onmouseout = function()
{
    getTwitter.className = "fab fa-twitter" +" unpeekaboo";
};

getGithubDiv.onmouseover = function()
{
    getGithub.className = "fab fa-github" + " peekaboo";
};
getGithubDiv.onmouseout = function()
{
    getGithub.className = "fab fa-github" +" unpeekaboo";
};

getWhatsappDiv.onmouseover = function()
{
    getWhatsapp.className = "fab fa-whatsapp" + " turn";
};
getWhatsappDiv.onmouseout = function()
{
    getWhatsapp.className = "fab fa-whatsapp" +" deturn";
};

getInstaDiv.onmouseover = function()
{
    getInsta.className = "fab fa-instagram" + " turn";
};
getInstaDiv.onmouseout = function()
{
    getInsta.className = "fab fa-instagram" +" deturn";
};


