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
    "revision": "6fd020c6db28de526ad20e39562a3190"
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
    "url": "assets/js/10.97f2f180.js",
    "revision": "3810a102c54d1966f8593235c17f2afb"
  },
  {
    "url": "assets/js/11.82cdc7a4.js",
    "revision": "6467f9615477fbc528a3085f6d132071"
  },
  {
    "url": "assets/js/12.1dfd3cc5.js",
    "revision": "a9b53bc2e5a6c142996d7253c11ca9ca"
  },
  {
    "url": "assets/js/13.10065f6e.js",
    "revision": "1d9ef5513973cf6772fbc329ac89f2f2"
  },
  {
    "url": "assets/js/14.cca9b3f6.js",
    "revision": "a1e7a0a1f5e4e5a3ba51b1d9f70d2ec6"
  },
  {
    "url": "assets/js/15.4f7f1fac.js",
    "revision": "2b2a2ffeb9dafa8ccedb896e2e3ee90c"
  },
  {
    "url": "assets/js/16.44f94ab7.js",
    "revision": "a6695b32c5400a589ee0b8d49211d330"
  },
  {
    "url": "assets/js/17.6d22273c.js",
    "revision": "d52ca70a2bbc889f2c6b1333a82b838a"
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
    "url": "assets/js/20.72744c08.js",
    "revision": "dfa7f6665d4705b4c2b527efcd421e22"
  },
  {
    "url": "assets/js/21.d20fb5ba.js",
    "revision": "75b39219c710ce10d3915c6bafc0aafb"
  },
  {
    "url": "assets/js/22.da50f9e3.js",
    "revision": "f2ac97592413510614357335838b2c71"
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
    "url": "assets/js/9.8147a652.js",
    "revision": "96c2a2511480322bdd4cad4a9280dae8"
  },
  {
    "url": "assets/js/app.2dfc3e42.js",
    "revision": "ec2e20b7c67781bff63bf0c7146f5d2c"
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
    "revision": "178c4c44abf0dd627a4551cc235f5897"
  },
  {
    "url": "tool/index.html",
    "revision": "69962c983cae9673dfc1dc90559e0e94"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "88036664a07f20d41798096bfa547198"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "3b487242a6d0ef80917254a72a1a3cb7"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "3a36fd044c680df767adbe2c3026187f"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "a3fb991614adf004f044b983f51326b6"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "9df7c9a195eeef66573a59b65d82dfa6"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "9ed9841b286ade802b6ffd531b5eb7d1"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "b438e19dc8695c4aee9ae6b8612f7f2d"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "68f8c8c858cfbee11373322a440357a7"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "4138a4a90a3e59f75d812791bf30f895"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "8036bf75b4733d797a1358f677d6aeb1"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "e956960878537cef2f46060effd50c52"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "6140945e57cb7c389b0c18aa3632a2ff"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "0f35b707e6d8401ce34fcf8d3fdf8b08"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "d90a7d0a5aec62149f3220ccfc81206c"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "e2938a0b0f82195b0518701300afc619"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "25a1274f5988fd66e19fae29cc7216de"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "2f489814276299ceccdebcda069f12ab"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "dcf16d3d053836b3c8e337d035e0ca76"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "6d4af8f5fba67697e9d88bff6e0d9a4b"
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
