var firstImg = document.getElementsByClassName("first")[0];
var secondImg = document.getElementsByClassName("second")[0];
var thirdImg = document.getElementsByClassName("third")[0];
var fourthImg = document.getElementsByClassName("fourth")[0];
var fifthImg = document.getElementsByClassName("fifth")[0];
var sizthImg = document.getElementsByClassName("sixth")[0];

var allImgs = document.getElementsByClassName("slides");
var sizeImg = allImgs.length;

var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];

var counter = 0;

next.onclick = function()
{
    allImgs[counter].style.display = "none";
    if(counter+1>=sizeImg)
    {
        counter = 0;
    }
    else
    {
        counter=counter+1;
    }
    allImgs[counter].style.display = "inline-block";
};

prev.onclick = function()
{
    allImgs[counter].style.display = "none";
    if(counter-1<0)
    {
        counter=sizeImg-1;
    }
    else
    {
        counter = counter-1;
    }
    allImgs[counter].style.display = "inline-block";
};


// footer now //

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