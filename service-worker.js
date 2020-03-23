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
    "revision": "a5bfdbce8c04d16e1b237b319ad7ecc3"
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
    "url": "assets/js/11.cfa30c7f.js",
    "revision": "56841fe932779be501448f59026d1ca7"
  },
  {
    "url": "assets/js/12.87548b23.js",
    "revision": "b2af3d713fa8f39599a94f4ecb70c239"
  },
  {
    "url": "assets/js/13.73e663ed.js",
    "revision": "46aa08765b4bb56ec03f27fadaac3362"
  },
  {
    "url": "assets/js/14.fff8406a.js",
    "revision": "1314f9acb82f3467d1c715920c61005b"
  },
  {
    "url": "assets/js/15.ddf0bb36.js",
    "revision": "b78f51b10470a65c79068ae6f74e621e"
  },
  {
    "url": "assets/js/16.6ab4e08a.js",
    "revision": "15aacb00a5d1e623f92d02006209d7e3"
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
    "url": "assets/js/19.96ad20eb.js",
    "revision": "304c2ecbcca1cf925af8c0cf9cce3e46"
  },
  {
    "url": "assets/js/2.6c69ec42.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.901010b6.js",
    "revision": "df8c40eedeadafe0ea7c58f17e97ff5a"
  },
  {
    "url": "assets/js/21.29f49d3b.js",
    "revision": "5824cdbafbe3974f06bc5b2cd8cc35a5"
  },
  {
    "url": "assets/js/22.76ace6cf.js",
    "revision": "4c020e3fe9a1a7ff8361b4d508261075"
  },
  {
    "url": "assets/js/23.e191501a.js",
    "revision": "b030d0ce5b420c11e1af360133911f43"
  },
  {
    "url": "assets/js/24.3101f5bb.js",
    "revision": "175317d07bb0365dc0600078965cb64c"
  },
  {
    "url": "assets/js/25.1ece7df4.js",
    "revision": "6305635f3b701f1411aa57b91f7b2788"
  },
  {
    "url": "assets/js/26.17a93149.js",
    "revision": "c9e0d61b4fe2a93b2f5407b03fa248d1"
  },
  {
    "url": "assets/js/27.5a6dfbfa.js",
    "revision": "7baf99550f24d2f32d6b5d462cb59651"
  },
  {
    "url": "assets/js/28.fd22d303.js",
    "revision": "ca676413dca5581a87afabe7e8af0e4d"
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
    "url": "assets/js/9.7e732975.js",
    "revision": "919d2ee9bd64189af49e9c2c75f59010"
  },
  {
    "url": "assets/js/app.721cbaf0.js",
    "revision": "fb9a0cde84a00b953dcf017472afa54a"
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
    "revision": "84fdaf4b5db85cbb6c1e161249ddfa80"
  },
  {
    "url": "tool/index.html",
    "revision": "0c9fafbf54a889033aa21e9d6c173ed1"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "a748ce693ff56748acef0b80ede91015"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "59e5bd5452b9155c6362f918e6cdd2c6"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "277c9ec46915741a7e6d4b722e4b6cf4"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "1f99949ac1e95157ee0a587daf2a1e93"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "23c7ae66624c5f28f73d01a5aa6b6a34"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "d7136c764012f90765c6ddb1c8bd7513"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "fce4a28fc97859721530ebfdb08529e2"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "62ea5c08b944bf25d806dbabcc793da3"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "46f13caa8e1500da3f01ca7c4628e53e"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "80efdf7e01890c5359d2bee163d2f002"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "1768205832d17568c18b04efae86edc1"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "1a40a1534f3701d2035b6bb004d5e2f0"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "f44240e94b019cdf00297fec16794170"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "38b6421151310277c698e6a3036f9f0d"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "065b5fda4b44bd2ce23ce5083c57d1ad"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "fb5e0dd318b14a56ff12aa733a3357a7"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "7fb926df50f3d8608f1069fb0d7d6d80"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "477453d428299ba7511b157d3db5ab8f"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "0278a3d91e4ff6051390c02adca5fcaf"
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
