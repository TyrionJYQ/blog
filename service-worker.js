/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "dc581110077f94244b3058ea19ed69b8"
  },
  {
    "url": "assets/css/0.styles.0456758e.css",
    "revision": "fe7457da39d32555c0195dc1b49e3ef7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d25f7c94.js",
    "revision": "6a0925fa4e53c81e4d9eb77dc12ac26f"
  },
  {
    "url": "assets/js/11.a8ea9eb8.js",
    "revision": "6cdbe9d7ea0c6bbbb44b5a0114210267"
  },
  {
    "url": "assets/js/12.1dfd3cc5.js",
    "revision": "a9b53bc2e5a6c142996d7253c11ca9ca"
  },
  {
    "url": "assets/js/13.11282020.js",
    "revision": "9ba2248b1f5133883e5cdccc214ead1b"
  },
  {
    "url": "assets/js/14.ae3105f9.js",
    "revision": "e7288b50d9e0324d248d07fca06bd950"
  },
  {
    "url": "assets/js/15.4f7f1fac.js",
    "revision": "2b2a2ffeb9dafa8ccedb896e2e3ee90c"
  },
  {
    "url": "assets/js/16.81f07af8.js",
    "revision": "0e8e7c6bc87ea79e1461c58c4439ffd6"
  },
  {
    "url": "assets/js/17.e986c085.js",
    "revision": "cf5d78f424412d87373178feff61e2d4"
  },
  {
    "url": "assets/js/18.9ec0cd9a.js",
    "revision": "5b46091576ddd9d8d80ebc977bf172c3"
  },
  {
    "url": "assets/js/19.eb487620.js",
    "revision": "51b54deaf1679a3c0fddb0ae81e7d0ef"
  },
  {
    "url": "assets/js/2.6c69ec42.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.67a409b5.js",
    "revision": "7206552229f4eed007bb2745d5907755"
  },
  {
    "url": "assets/js/21.d20fb5ba.js",
    "revision": "75b39219c710ce10d3915c6bafc0aafb"
  },
  {
    "url": "assets/js/22.1a688b42.js",
    "revision": "c2c382446337bc418e72bbb4774b58a7"
  },
  {
    "url": "assets/js/23.e191501a.js",
    "revision": "b030d0ce5b420c11e1af360133911f43"
  },
  {
    "url": "assets/js/24.0736ecba.js",
    "revision": "903df84e6a9b4126c22707806bb5ab36"
  },
  {
    "url": "assets/js/25.5e548658.js",
    "revision": "83ffc84f318aed375aec43914326eb1f"
  },
  {
    "url": "assets/js/26.17a93149.js",
    "revision": "c9e0d61b4fe2a93b2f5407b03fa248d1"
  },
  {
    "url": "assets/js/27.3db7610d.js",
    "revision": "f45e54dbf2149608dda8dd49d5db33b5"
  },
  {
    "url": "assets/js/28.8453c7e4.js",
    "revision": "ea4727c90ae6b6658b75d448c155d9b0"
  },
  {
    "url": "assets/js/29.ee710925.js",
    "revision": "911e15a2d1144c099828cc08c55f7c7f"
  },
  {
    "url": "assets/js/3.ab2d297e.js",
    "revision": "a913eb7b30e44e1a8beb1e7d956f1d02"
  },
  {
    "url": "assets/js/30.f13c0792.js",
    "revision": "45c179baf428fa5c08c947265217696d"
  },
  {
    "url": "assets/js/4.c7a753b6.js",
    "revision": "e99e92524227847e8f3fb19e7a705e53"
  },
  {
    "url": "assets/js/5.6b4a64af.js",
    "revision": "713bf2960c523eb0c6a2b2c70d54aae8"
  },
  {
    "url": "assets/js/6.2b7fa477.js",
    "revision": "a44c442f68f81e006a429c646262d0aa"
  },
  {
    "url": "assets/js/7.ea8a5d8f.js",
    "revision": "fe99d46311482d1a74d0a1e7a02c5bec"
  },
  {
    "url": "assets/js/8.bd946061.js",
    "revision": "b8444a590aabd330223d8af75ac0478d"
  },
  {
    "url": "assets/js/9.b5057d66.js",
    "revision": "c1fbee51d217a969a8518ff29e82f566"
  },
  {
    "url": "assets/js/app.24e1c12e.js",
    "revision": "6f550f440f38f8254ad853f247247b7b"
  },
  {
    "url": "img/logo.png",
    "revision": "63b5d289a9252547f9a7791db7059fa6"
  },
  {
    "url": "img/logo.svg",
    "revision": "dd8ff01a1c7952a2a1aa762002134175"
  },
  {
    "url": "index.html",
    "revision": "f387f4792028017310842e250050515f"
  },
  {
    "url": "tool/index.html",
    "revision": "d0d9d44c8fd5dd4452f3be19fb57bb2d"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "b4ec9600d83cc3aa9e60f4dfc05c2a8c"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "892d0869e9f416aec3d6a8fc4a2e46e6"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "0de552b52c456abfe3694e0284b7d0d7"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "436c3810da66819740644ff90a1f6fb2"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "ef6ff7f1e9e1c871ab9547296c13db9e"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "666af54690c3c580a9c43067e6e732cb"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "db3ff99c6f5778349a4f98cb850bfddf"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "388d1b00bd0cf8d3c5a4340c2d9043de"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "cba4bdebb7b5b85a6e65b0ef3eb23a4e"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "bc809df2998e4b126dcc538bfc250ead"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "c22a09e399ef700d5476530c48849fb5"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "0fdf4c0e71bbd2f40ce75d868f4f7496"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "378ddd68a3e4ac6b6cb8aba6a6b96354"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "963aad2c315b60cac4423a66bc2d3fe6"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "3c0dc52c3c1e117e6632b2239b13100a"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "bafa5cfb6812ef14bccee01f3a18ca79"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "861165bf83c551fe0a8cc4799b9838ea"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "df63d28aed37ca56f1f144307abfa2ea"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "c09fafe460a5a81122c130bc8aacef6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
