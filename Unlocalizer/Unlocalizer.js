// Encoding: UTF-8 without BOM (auto-detect: °°°°°)

// ==UserScript==
// @namespace http://adilsonjr.com/
// @name Display websites content in English
// @name:pt Exibe conteúdo de sites em inglês
// @description Redirects regional websites to the en-US original site to prevent annoying translation elements to appear.
// @description:pt Redireciona websites localizados para a versão original em ingles, para evitar traduções de má qualidade. 
// @version 2017.1.1
// @include http://msdn.microsoft.com/*
// @include https://msdn.microsoft.com/*
// @include http://azure.microsoft.com/*
// @include https://azure.microsoft.com/*
// @include http://docs.microsoft.com/*
// @include https://docs.microsoft.com/*
// @include https://developer.mozilla.org/*
// @include http://developer.mozilla.org/*
// @include https://aws.amazon.com/*
// @run-at document-start
// ==/UserScript==

(function() {
	var matches = location.pathname.match(/^\/([a-z]{2}-[a-z]{2})\//i);
	if (matches)
	{
		var locale = matches[1];
		if (locale && !locale.match(/en-us/i))
		{
			var newUrl = location.href.replace("/" + locale + "/", "/en-us/");
			location.replace(newUrl);
			return;
		}
	}

})()
