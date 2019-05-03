// ==UserScript==
// @name     Hide Reddit's promoted posts
// @namespace hide_Reddits_promoted_posts
// @description Hide Reddit's promoted posts
// @include  https://www.reddit.com/
// @include  https://www.reddit.com/r/*
// @version  1
// @grant    none
// ==/UserScript==

function hide_ads() {
    let promoted_links = document.getElementsByClassName("promotedlink")
    for (let promo of promoted_links) {
        promo.style.display = "none"
    }
}

hide_ads()
//Also rerun the code each time document change (i.e new posts are added when user scroll down)
document.addEventListener("DOMNodeInserted", hide_ads)
