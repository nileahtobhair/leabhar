"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["../leabhar/index.html","f6bcc6442396e8b4749247d0f8ad3f20"],["../leabhar/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["../leabhar/static/js/main.45a9a4db.js","03ceff6733a52798c0eb3530a895676b"],["../leabhar/static/media/amsterdam.7fcde79a.png","7fcde79a0f924c7572034755e4ddf0ee"],["../leabhar/static/media/bind_assassin.ebf54707.png","ebf5470728cac71b2f71adb143475206"],["../leabhar/static/media/bone_people.e3723abd.png","e3723abd9e64be3889e59ea00c3ae3f4"],["../leabhar/static/media/bring_bodies.d2d226c8.png","d2d226c8aba04ac4e9c26c1b146b0be7"],["../leabhar/static/media/close_icon.f911134f.svg","f911134f5b704ad58ad04a017f2af677"],["../leabhar/static/media/conservationist.68c02439.png","68c02439e25bf032590e3bb3eafb38a3"],["../leabhar/static/media/day_remains.faa5ced2.png","faa5ced2f8141c6640a1121652f7f5ba"],["../leabhar/static/media/disgrace.fbed938e.png","fbed938e11dc6318b203e88db6501307"],["../leabhar/static/media/du_lac.7532d71d.png","7532d71d944c6982613a9590ecf3747a"],["../leabhar/static/media/english_patient.55cff84e.png","55cff84ef14b2c50329710623caa7911"],["../leabhar/static/media/famished_road.ae81e2f5.png","ae81e2f5fbe3a181a6a6c9eb93b2c8e3"],["../leabhar/static/media/finkler_question.d014bf85.png","d014bf85b53ff54900ab928afd9bf802"],["../leabhar/static/media/ghost_road.fd9c0d44.png","fd9c0d448a76554af9ab3e1e6011da4a"],["../leabhar/static/media/heat_dust.d337dcbe.png","d337dcbe5721047f9b228b928c44baf1"],["../leabhar/static/media/holiday.c4dfae21.png","c4dfae218e0c73de4452587766f47c39"],["../leabhar/static/media/how_late.a1252fa2.png","a1252fa26b20f038a30ccd7548e01f42"],["../leabhar/static/media/inheritance_loss.33e5f660.png","33e5f66090d058c45394cb518b0cccbe"],["../leabhar/static/media/jackets.0d6d048e.png","0d6d048ead037453d09fe0214416332c"],["../leabhar/static/media/kelly_gang.4c5cd1ae.png","4c5cd1ae66a26f27f12456a880ef45e5"],["../leabhar/static/media/kelly_gang.jpg.eaf865bd.png","eaf865bd34eca6e1e54287525a6f6e81"],["../leabhar/static/media/last_orders.c6e894bd.png","c6e894bd794dd9a8eef53e0246e7accd"],["../leabhar/static/media/life_of_pie.2fa9128b.png","2fa9128bcd812fb6698ed05bdf85eed5"],["../leabhar/static/media/life_times.ecd4e1a0.png","ecd4e1a028a345d1675c06db930fe6d3"],["../leabhar/static/media/line_of_beauty.32048068.png","32048068779f805f53d7906b7f756930"],["../leabhar/static/media/logo.de805543.png","de805543f8936c4a4a68c5628ed49d0f"],["../leabhar/static/media/luminaries.2fa502da.png","2fa502dac5c27c50767e4801edb6e91a"],["../leabhar/static/media/midnights_children.d36f4404.png","d36f440463687beb31702210745f5d44"],["../leabhar/static/media/moon_tiger.5a545709.png","5a545709f041f28438666fe3e65d2164"],["../leabhar/static/media/narrow_road.43bc0b5a.png","43bc0b5a5b3398927d69819de66a24aa"],["../leabhar/static/media/offshore.6884aef8.png","6884aef82982918237b3a5ad3a47608f"],["../leabhar/static/media/old_devils.b5f32f2a.png","b5f32f2ae01b798b4ebda34688a8cd2a"],["../leabhar/static/media/oscar_lucinda.09987e6e.png","09987e6e00144d92dbace57034951033"],["../leabhar/static/media/paddy_clarke.c9dd9c2e.png","c9dd9c2e783c66d12ab4535e24f7e684"],["../leabhar/static/media/picturehousecentral.01af36f9.png","01af36f987a909698dbd62865f820d82"],["../leabhar/static/media/possession.803b081e.png","803b081ea4623d85d5d8f78bdbe8542e"],["../leabhar/static/media/rites_passage.01473e10.png","01473e106fc94870c9ca384bdd1342d8"],["../leabhar/static/media/sacred_hunger.5ad4fa32.png","5ad4fa327b912e5d7bed4aead5fe593c"],["../leabhar/static/media/saville.29ec070a.png","29ec070a8866d0eb42dcf763444362e8"],["../leabhar/static/media/schindlers_ark.ff22d85a.png","ff22d85a64598f2e5f9ac7d2236fe163"],["../leabhar/static/media/search_icon.4aaac801.svg","4aaac801144b8feb0496938eebda9b5d"],["../leabhar/static/media/sellout.912d1feb.png","912d1febab54e6db546498c0262cde16"],["../leabhar/static/media/sense_ending.6dafc135.png","6dafc135ac0ca6fadc653e95cb8e323e"],["../leabhar/static/media/seven_killings.b0c720c9.png","b0c720c9ed00c11c948991617d79d083"],["../leabhar/static/media/siege_krishnapur.2bfa6717.png","2bfa67172abb8f7b661bec9cb46776c9"],["../leabhar/static/media/small_things.2bc0eb35.png","2bc0eb35c44839553069e41da217bb27"],["../leabhar/static/media/staying_on.8a980af9.png","8a980af9f93d68f650657f355a11a48c"],["../leabhar/static/media/the_gathering.ef7d97a6.png","ef7d97a680cf52b9d74cf77d9eee521b"],["../leabhar/static/media/the_sea.21cbbae9.png","21cbbae9cbde7e2c8df6d127f047ce42"],["../leabhar/static/media/the_sea_the.b35322ec.png","b35322ec8b575a3c6e2d6e3e45afc8d8"],["../leabhar/static/media/vernon_god_little.a7c9bdb3.png","a7c9bdb337c1d71cdd65e0bcbe914b41"],["../leabhar/static/media/white_tiger.e556bb42.png","e556bb42423144d703d51ab136efe7f5"],["../leabhar/static/media/wolf_hall.619eb3ac.png","619eb3aca2003f54b191f4bf2b00ca5b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("../leabhar/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});