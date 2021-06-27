'use strict';
const bypass = "cachebypasstime";

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	let url = new URL(details.url);
	if (!url.searchParams.has(bypass)) {
		url.searchParams.append(bypass, new Date().getTime());
		return {redirectUrl: url.href };
	}
},{urls: ["<all_urls>"]}, ["blocking"]);
