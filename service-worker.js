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
    "revision": "f2e261f1a2b00c7e66a40e863ce7f3c0"
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
    "url": "assets/js/14.e4282de0.js",
    "revision": "2e7470506368d0b87410325dc9e873ee"
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
    "url": "assets/js/19.1fbce9d4.js",
    "revision": "3370425fa617d27e83badb2959e57b4b"
  },
  {
    "url": "assets/js/2.c7ebce8d.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.11fb4901.js",
    "revision": "1e9c3272a7256a4d9828e520a9d836e0"
  },
  {
    "url": "assets/js/21.63fc85ed.js",
    "revision": "deee8fd52b175c2db0fdc228b940cfd8"
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
    "url": "assets/js/24.9c87fb23.js",
    "revision": "7cd6fc6da6916fc91da50c442a5485c5"
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
    "url": "assets/js/7.38070785.js",
    "revision": "44512719745edefcd47a88abfb0ede39"
  },
  {
    "url": "assets/js/8.b7aff4b0.js",
    "revision": "0f619468de63f3ac2b1ac8e16ed47c8d"
  },
  {
    "url": "assets/js/9.b5057d66.js",
    "revision": "c1fbee51d217a969a8518ff29e82f566"
  },
  {
    "url": "assets/js/app.ac744fb6.js",
    "revision": "01866d3409180e342708547c3bf9d5c9"
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
    "revision": "99f36cec394b3bb816f8d11b2157e0f5"
  },
  {
    "url": "tool/index.html",
    "revision": "bfabb3905f115b3579173069c69f7bda"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "d348b8c7968410205e64d90c20bd5dfa"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "ec8b06c9f9911658209215ca467fe61e"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "289262a4949e05bb04286a0403582181"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "b717b88b2df4d29c99c4f4d7acbbd838"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "08a597212e4e993f35eef4d174531679"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "6ac81762d1b0207bc3422accee68b73c"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "e226dc953dce092042e79d4d92e7ed0d"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "1b580525afb2a487e0c86129ad81fea3"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "607d5c2b5b4f463a18d6ade9d91172b3"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "f98f00b88be261e45474aff4807bd84c"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "985790973abdc4b2d7aada0b2b1c7994"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "fedc5672959d6185b7da768a98c0c09d"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "a0106e574cdbdc65d9ae440c5c544136"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "a49305d0be6a365930098dc06ae378ec"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "c377c72ede60009e98b95c94159ee47a"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "37a2b0e026bebd7c391887c813428504"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "b1cccf677385e4d8c5c81f962654f220"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "c076664a7c4872ae4a203a1a45814ee9"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "841f765f2e31fdd4b9587b8e6f958c89"
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
