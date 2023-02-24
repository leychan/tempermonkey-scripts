 // ==UserScript==
// @name         google-search-helper
// @namespace    github.com/leychan
// @version      0.6
// @description  在新标签页打开google搜索结果
// @author       leychan
// @match        https://www.google.com.hk/search*
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @license       MIT
// ==/UserScript==

(function() {
    'use strict';

    let result = document.getElementById('search')


    let allATag = result.getElementsByTagName('a')
    for (let i = 0 ;i < allATag.length; i++) {
      allATag[i].setAttribute('target', '_blank')
      //console.log(allATag[i])

    }
})();