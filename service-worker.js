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
    "revision": "d203dcf4b50275936cfd6f978f3f65c0"
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
    "url": "assets/js/10.4169dc6b.js",
    "revision": "f292dd9978368a693f972f7977a7fd92"
  },
  {
    "url": "assets/js/11.cfa30c7f.js",
    "revision": "56841fe932779be501448f59026d1ca7"
  },
  {
    "url": "assets/js/12.fce56bdd.js",
    "revision": "b2a62761acd9ed08d71d32d09216a77f"
  },
  {
    "url": "assets/js/13.ca24e514.js",
    "revision": "e273206f74823488edad5afe5fe6a616"
  },
  {
    "url": "assets/js/14.ae3105f9.js",
    "revision": "e7288b50d9e0324d248d07fca06bd950"
  },
  {
    "url": "assets/js/15.2cd0b5c8.js",
    "revision": "42bf92867e137b915075df9205af5160"
  },
  {
    "url": "assets/js/16.b8e91dd0.js",
    "revision": "229726654fd258c4f34c08d4fb19a965"
  },
  {
    "url": "assets/js/17.0e0dc638.js",
    "revision": "cd4859075561c998d675e1dbcd15cbb8"
  },
  {
    "url": "assets/js/18.0bd4777b.js",
    "revision": "19f121ab12d8b5492209edb476963ee4"
  },
  {
    "url": "assets/js/19.eb487620.js",
    "revision": "51b54deaf1679a3c0fddb0ae81e7d0ef"
  },
  {
    "url": "assets/js/2.c7ebce8d.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.ce9a5fbf.js",
    "revision": "eac64985f01c5aa5d5d7ef70cbb66795"
  },
  {
    "url": "assets/js/21.29f49d3b.js",
    "revision": "5824cdbafbe3974f06bc5b2cd8cc35a5"
  },
  {
    "url": "assets/js/22.9a8f80d6.js",
    "revision": "f9f420a02372a1e517eb67894b30a471"
  },
  {
    "url": "assets/js/23.e191501a.js",
    "revision": "b030d0ce5b420c11e1af360133911f43"
  },
  {
    "url": "assets/js/24.67644f1f.js",
    "revision": "98959813416719f23a82d2a94f78fdaa"
  },
  {
    "url": "assets/js/25.b442748d.js",
    "revision": "99424650ac31c96e1f53ad3ee87092a5"
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
    "url": "assets/js/8.6ee7eed6.js",
    "revision": "cdbc1b6ce86bdab2f62599407d417823"
  },
  {
    "url": "assets/js/9.488332a3.js",
    "revision": "bb705d86b999f98753ab7c6c545de385"
  },
  {
    "url": "assets/js/app.95402cc3.js",
    "revision": "7737278dab6f5b5e58a025535ca31c6f"
  },
  {
    "url": "img/logo.png",
    "revision": "63b5d289a9252547f9a7791db7059fa6"
  },
  {
    "url": "img/logo.svg",
    "revision": "1e9be442929fd12220286d784c3d5375"
  },
  {
    "url": "index.html",
    "revision": "2b7ec4ad2944ec087155121fb6a649a4"
  },
  {
    "url": "tool/index.html",
    "revision": "5c94f1054cbec18e02bf88d4921b10b9"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "1400de59e22009ee33e11a609206d84e"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "495aa3f63a8d0440cfee683414e9d32e"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "c758391595275da7ecaaa01c33987023"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "519ca9dcc3f7c809f1d90dad2f348ca9"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "bfb48d82af755b3b1da2f62fa33346a2"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "4dc782095bb61dad818291b1d9e52998"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "891591ed7e1f7f510b80eb1b0f6bcdf9"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "2c342588d4741e1ba361bf92c57b5a16"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "177e52fc7f8b417c8383d68fa77be477"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "c9ae3b753f5a4d43d911a4b280745598"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "fa8a2d8ad8e8e4e8fef3348747e8736f"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "ebeea3d9706e8b2b601e658d535360c0"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "f7536ffbc7adb86c0f9bada3b38da8b2"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "cf05946495a46752bdc8c16b3e00f884"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "558aa6e0eed52de9d1a25ef49e885841"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "b04e8543386aa7f2ac9888cfd0ef3416"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "77f3126767400ce218d68bc11f77adb0"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "9e198f757324da831535dc8f7bcbcb94"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "d0a41510011e4dd37ecc7455ecf43d28"
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
