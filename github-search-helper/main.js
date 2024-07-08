// ==UserScript==
// @name         github-search-helper
// @namespace    github.com/leychan
// @version      0.1
// @description  在新标签页打开github搜索结果
// @author       leychan
// @match        https://github.com/trending
// @match        https://github.com/explore
// @match        https://github.com/search*
// @icon         https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png
// @run-at document-end
// @grant        none
// @license       MIT
// ==/UserScript==

(function() {
    'use strict';
  
    const element = document.querySelector('[data-testid="results-list"]');
    if (element) {
        let allSearchResultATag = element.getElementsByTagName('a')
        for (let i = 0 ;i < allSearchResultATag.length; i++) {
            allSearchResultATag[i].setAttribute('target', '_blank')
        }
    }
    
    let allExploreResultATag = exploreResult.getElementsByTagName('a')
    for (let i = 0 ;i < allExploreResultATag.length; i++) {
        allExploreResultATag[i].setAttribute('target', '_blank')
    }

    let allTrendingResultATag = trendingResult.getElementsByTagName('a')
    for (let i = 0 ;i < allTrendingResultATag.length; i++) {
        allTrendingResultATag[i].setAttribute('target', '_blank')
    }
  })();