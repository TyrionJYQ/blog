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
    "revision": "e86f999904b55f7dc2c1fd5d04bb36d4"
  },
  {
    "url": "assets/css/0.styles.cf2d1d58.css",
    "revision": "5ceeea54f54d260d7b67c82cf40103ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a588fc0.js",
    "revision": "e5615ae934f432086ad0f06acec05fef"
  },
  {
    "url": "assets/js/11.b9eb0f01.js",
    "revision": "7a49a5030e37d71b224ce137375601b8"
  },
  {
    "url": "assets/js/12.69a55ac9.js",
    "revision": "8d7317e425cfdae1c38c7163b077d9f0"
  },
  {
    "url": "assets/js/13.11adfd75.js",
    "revision": "43e2cc86d7d85b7ae618c6ce4e93c5b0"
  },
  {
    "url": "assets/js/14.f41e1413.js",
    "revision": "b632afb0c3aa27592ca2160faea04152"
  },
  {
    "url": "assets/js/15.7f50eb8c.js",
    "revision": "7a27e88989e9b122632b8e2dcb34c0c8"
  },
  {
    "url": "assets/js/16.57a2ba15.js",
    "revision": "4e712bbe200f6df436d3d293a0472787"
  },
  {
    "url": "assets/js/17.51d435f1.js",
    "revision": "2edb778cef644636f04594d07a7bd95e"
  },
  {
    "url": "assets/js/18.37e7d0ba.js",
    "revision": "ed41afa45bc7a9b185969e2cc28b005c"
  },
  {
    "url": "assets/js/19.3a53fa8e.js",
    "revision": "4aeeb919f16a8c74bb040f48dfdde05f"
  },
  {
    "url": "assets/js/2.f3dced1f.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.94462308.js",
    "revision": "cfc93b892c6d58c9fd21f229e6715eee"
  },
  {
    "url": "assets/js/21.ca951ec7.js",
    "revision": "48d8ded9161f7ee2e82c47d07b03df8b"
  },
  {
    "url": "assets/js/22.d6cd96c9.js",
    "revision": "04f7ce9213111e2881814f4157e1976b"
  },
  {
    "url": "assets/js/23.fbfe9c0c.js",
    "revision": "c7b5ddbfd8fecfa8f8e46f5b83276283"
  },
  {
    "url": "assets/js/3.0c12c2b7.js",
    "revision": "a913eb7b30e44e1a8beb1e7d956f1d02"
  },
  {
    "url": "assets/js/4.f63d1e71.js",
    "revision": "761bbe1216827831124eaf8c6a8258e0"
  },
  {
    "url": "assets/js/5.39cd2c93.js",
    "revision": "713bf2960c523eb0c6a2b2c70d54aae8"
  },
  {
    "url": "assets/js/6.032ba3c6.js",
    "revision": "a44c442f68f81e006a429c646262d0aa"
  },
  {
    "url": "assets/js/7.bb87d718.js",
    "revision": "9b889940155e7dce0a53edda9f8832b2"
  },
  {
    "url": "assets/js/8.96303982.js",
    "revision": "b25d8e25a18342f7375b40a1986b2592"
  },
  {
    "url": "assets/js/9.6d9e2089.js",
    "revision": "5549762b22eaadb21248ae50b2091a61"
  },
  {
    "url": "assets/js/app.c6873c76.js",
    "revision": "021445e51b38668ab53f32d9141eaa4a"
  },
  {
    "url": "img/logo.png",
    "revision": "63b5d289a9252547f9a7791db7059fa6"
  },
  {
    "url": "index.html",
    "revision": "799151a0b2280ce04fe7b43815c4e040"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "5f1289cff7d9cc80ca81436c4b8a09a8"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "eac7edf5c0e8f66ddb39bd512fd45deb"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "62ef3f8563e114857dc25a5e58ad643f"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "44556de1d37a69c4b1b9cc2cf9fd0aca"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "a4cc48e7d6e68d82a91f72d164e7b9c8"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "7d8b705af98d6395871b056a28dedb5d"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "23d7da87833ee735e840f01efe6b7a99"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "be7135918d2188172bd62cb2a27dc2fe"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "18d31b03f04a73b9cd2aaa353b26fd8a"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "f9d99785772e84b79314e1c502ded5f4"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "f79cf1da0b1faab3cf48f91fbb67dc11"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "b28328827a60f81c1e90f4fbe109e04b"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "61a9617e947b399bdb1690f13dbdf69f"
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
