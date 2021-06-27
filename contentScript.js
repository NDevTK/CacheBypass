'use strict';
let URI = new URL(location);
URI.searchParams.delete("cachebypasstime");
window.history.replaceState(0, document.title, URI.href);
