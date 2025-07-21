// ==UserScript==
// @name         byrutgame.org
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://byrutgame.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=byrutgame.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 获取页面中所有的 <a> 标签
    const links = document.querySelectorAll("a");

    // 遍历每个 <a> 标签
    links.forEach(link => {
        const href = link.href;

        // 判断链接是否包含旧域名 a.com
        if (href.includes("://byrutgame.org.") || href.includes("//byrutgame.org.")) {
            // 将 a.com 替换为 b.com
            const newHref = href.replace(/:\/\/byrutgame\.org\.|\/\/byrutgame\.org\./g, match => {
                return match.replace("byrutgame.org.", "byrutgame.org");
            });

            // 更新 href 属性
            link.href = newHref;
        }
    });
})();