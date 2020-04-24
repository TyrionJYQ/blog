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
    "revision": "35cb519d150736cf5ad217fb1c96a548"
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
    "url": "assets/js/10.01d5f328.js",
    "revision": "19d892bcf86cbf6c8e16f50bab85a3e7"
  },
  {
    "url": "assets/js/11.3a7b4689.js",
    "revision": "469c43521ff8d365fd490ca4b246d550"
  },
  {
    "url": "assets/js/12.b23bc729.js",
    "revision": "aea222aebda513b4491859304313f00f"
  },
  {
    "url": "assets/js/13.0f2acac2.js",
    "revision": "d27cbb3dcb1fad53fe3587d30fcda433"
  },
  {
    "url": "assets/js/14.5f5e67d4.js",
    "revision": "c9339495162b6431cd9536efa38a3ff7"
  },
  {
    "url": "assets/js/15.4c5b4de3.js",
    "revision": "e418f624cec22959fcecf47557e640b3"
  },
  {
    "url": "assets/js/16.e0a2f185.js",
    "revision": "f8448009df208e212299e51aac71fdfc"
  },
  {
    "url": "assets/js/17.684a6b26.js",
    "revision": "4f900478354035ca7d337bbafa29c440"
  },
  {
    "url": "assets/js/18.f43feb16.js",
    "revision": "141e570f250d396f750546b7a8b72dca"
  },
  {
    "url": "assets/js/19.ef9a1676.js",
    "revision": "c96a4926d2d187d15c121ceb1896189c"
  },
  {
    "url": "assets/js/2.c7ebce8d.js",
    "revision": "4c21c7a793a97001154e921878d39114"
  },
  {
    "url": "assets/js/20.e76726dc.js",
    "revision": "2272a59fc6fdda3423c2fd67ce3b2f7f"
  },
  {
    "url": "assets/js/21.689abde1.js",
    "revision": "eafb8a858a41a4ef4591d7dbc90d8b45"
  },
  {
    "url": "assets/js/22.9055b1ba.js",
    "revision": "49bfc8cfc2be74b3b06ce8d89bdbe0cc"
  },
  {
    "url": "assets/js/23.531b93f8.js",
    "revision": "8e268dafaf43677505c16ca7e6710b5e"
  },
  {
    "url": "assets/js/24.2c58187c.js",
    "revision": "952c1f5005915661f6869618da584505"
  },
  {
    "url": "assets/js/25.fbdd3a01.js",
    "revision": "1744753d8f05cc297d62ed4c2ddef035"
  },
  {
    "url": "assets/js/26.31609bde.js",
    "revision": "5fdbdcc62fd95e7147462103bcb807cf"
  },
  {
    "url": "assets/js/27.5b3a9536.js",
    "revision": "6c6f11682f2866b5704c84a5923a2d43"
  },
  {
    "url": "assets/js/28.1dd1c007.js",
    "revision": "edde4bfb4e8ba52280f9eb0ca0385d3d"
  },
  {
    "url": "assets/js/29.099e9772.js",
    "revision": "57cf1ea5461b21af519a503a2952565c"
  },
  {
    "url": "assets/js/3.6401d0a2.js",
    "revision": "de19ccf2f389a4a46c8a796250ed52cc"
  },
  {
    "url": "assets/js/30.7716dbe9.js",
    "revision": "d5b1dadf10ec3d876e7e13258aa54e8c"
  },
  {
    "url": "assets/js/31.8b9f9843.js",
    "revision": "7589a97871ceb68e1e888bd69d282f4e"
  },
  {
    "url": "assets/js/32.fb43c2d3.js",
    "revision": "b68e19a606f163b450d18146c99a0b7c"
  },
  {
    "url": "assets/js/33.7c56bc23.js",
    "revision": "f5c8ff62042745b215948722ac8af3be"
  },
  {
    "url": "assets/js/34.eba1f2f0.js",
    "revision": "1f8917ec3bc9a2d7715282f52fe96e85"
  },
  {
    "url": "assets/js/35.976fb74c.js",
    "revision": "3928edb8c6506c75b6c61d1f87248db3"
  },
  {
    "url": "assets/js/36.98d6bf54.js",
    "revision": "cc96528b8f39342e42694aa28931a543"
  },
  {
    "url": "assets/js/37.7e718e27.js",
    "revision": "657a28dca23111397133c416c773a360"
  },
  {
    "url": "assets/js/38.ebd03acf.js",
    "revision": "04fbf23db423b2f58b4c944e482a9868"
  },
  {
    "url": "assets/js/39.484c2704.js",
    "revision": "d0137036932da042c7f0cc9244e8ef48"
  },
  {
    "url": "assets/js/4.35e4773b.js",
    "revision": "ccf9b94008bec19088d134db95fb66d7"
  },
  {
    "url": "assets/js/40.022fbbc3.js",
    "revision": "23656b7f4a5f7437c096ae09fa572349"
  },
  {
    "url": "assets/js/41.49cee2d3.js",
    "revision": "0bbae27441e2ae419b4858be277f459d"
  },
  {
    "url": "assets/js/42.3d0a8b18.js",
    "revision": "27f38730b200bdd2ac8b6fd54a5fe1cd"
  },
  {
    "url": "assets/js/43.34a10402.js",
    "revision": "c5f61bf9b1357214646b22c630d2d08f"
  },
  {
    "url": "assets/js/44.399bc4d8.js",
    "revision": "22c3f709209bfba25cba45d4cf8036b2"
  },
  {
    "url": "assets/js/45.0ba483f5.js",
    "revision": "1e50265861d60699ab10f45395b6b879"
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
    "url": "assets/js/7.2569d073.js",
    "revision": "361fbff58458eef61eed1d6c685cdb22"
  },
  {
    "url": "assets/js/8.165ed02c.js",
    "revision": "b2d677ffe319a924fdb1994fd98b7eef"
  },
  {
    "url": "assets/js/9.629b3554.js",
    "revision": "a235099adad9a1c063174a6344e4246c"
  },
  {
    "url": "assets/js/app.5984855e.js",
    "revision": "2f731a61ec4d2e790ff70e789452c3ed"
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
    "revision": "6927afae54c9a46cc8e1333f5d7c60be"
  },
  {
    "url": "javascript/01字符串replace方法的妙用.html",
    "revision": "7e184d564caee7e9e541c9a4cd504059"
  },
  {
    "url": "javascript/index.html",
    "revision": "39db934c6924fb34a25b6602d96ccd9e"
  },
  {
    "url": "node/index.html",
    "revision": "2bd19f9cf75cb37348d48de712a49c95"
  },
  {
    "url": "node/npm/01npm之package.json.html",
    "revision": "3b8e942b1f1a179e059c417dd2f62011"
  },
  {
    "url": "node/npm/index.html",
    "revision": "16a77aeeaa3992432d541a0abc6a2389"
  },
  {
    "url": "tool/cli/01tj-cli.html",
    "revision": "f2834ebed46841a39908956ccfc2d625"
  },
  {
    "url": "tool/cli/index.html",
    "revision": "c323454573e7543c5215f671f771ee3e"
  },
  {
    "url": "tool/index.html",
    "revision": "3b10861c737fa14c1d47b5da78655e52"
  },
  {
    "url": "tool/rollup/index.html",
    "revision": "4bea4bad3a14bfb7bb3b903cba712340"
  },
  {
    "url": "tool/webpack/01entry.html",
    "revision": "278bc5a489babb3bcc3bf9e131c20a61"
  },
  {
    "url": "tool/webpack/02output.html",
    "revision": "59f6e129b4d25714e157fe7142deae0a"
  },
  {
    "url": "tool/webpack/03loader.html",
    "revision": "2ecf006ca62b5b12670f4b4a606105d9"
  },
  {
    "url": "tool/webpack/04plugin.html",
    "revision": "69aaac8f7348fe597565e42a87ab168e"
  },
  {
    "url": "tool/webpack/05区分开发和生产.html",
    "revision": "f426aa664d1664d0b761c4b67b9bdf59"
  },
  {
    "url": "tool/webpack/index.html",
    "revision": "e0bcbe8154c307bef60206b311ee1d13"
  },
  {
    "url": "vue/sourcecode/01.html",
    "revision": "62315c02c71f9b5059fc964c66ad04b9"
  },
  {
    "url": "vue/sourcecode/02.html",
    "revision": "d8905dd0e6536600e1cd954b5c8614dd"
  },
  {
    "url": "vue/sourcecode/03.html",
    "revision": "5c3b22a9af09a04c45b8e1fe9e7c8992"
  },
  {
    "url": "vue/sourcecode/04.html",
    "revision": "05b1bb7cce4939e3c97334f106f5d9cd"
  },
  {
    "url": "vue/sourcecode/05.html",
    "revision": "e05d7282e4f88392df94f70a2e26eee1"
  },
  {
    "url": "vue/sourcecode/06.html",
    "revision": "d2a5a3612149d45c6654a5b0e986b246"
  },
  {
    "url": "vue/sourcecode/07.html",
    "revision": "0474e7b1e8fcb172cb29a1ec4169f83e"
  },
  {
    "url": "vue/sourcecode/08.html",
    "revision": "13e85843a5d71dbc885dc9a15c028702"
  },
  {
    "url": "vue/sourcecode/09.html",
    "revision": "d843d7cf9c1717c985c50ff2fa78f35a"
  },
  {
    "url": "vue/sourcecode/10.html",
    "revision": "f23351bce10a7b0b13e2a27b4fdd3061"
  },
  {
    "url": "vue/sourcecode/11.html",
    "revision": "078330758fa479750f6bf838181b02e4"
  },
  {
    "url": "vue/sourcecode/12.html",
    "revision": "5577832b2082a52c2d42b75b104d7363"
  },
  {
    "url": "vue/sourcecode/13.html",
    "revision": "c5e0d2e1e47f3d1b302982565dbb49d7"
  },
  {
    "url": "vue/sourcecode/14.html",
    "revision": "07fa8632b566789787dc0ec412da5ca5"
  },
  {
    "url": "vue/sourcecode/15.html",
    "revision": "04b85237faee08d8dc47fea676d60a8d"
  },
  {
    "url": "vue/sourcecode/16.html",
    "revision": "abe37d5bc3918031bb582abac2dab156"
  },
  {
    "url": "vue/sourcecode/17.html",
    "revision": "6c4bd796f573c138f63a016dc3db11ea"
  },
  {
    "url": "vue/sourcecode/18.html",
    "revision": "400616539ae103e01364cd9c24e070e0"
  },
  {
    "url": "vue/sourcecode/index.html",
    "revision": "58ea3e4a65c864395f33cc5e0a4ea74b"
  },
  {
    "url": "vue/vuepress/index.html",
    "revision": "bdee6ba9fbd3d22279c2ba008d8c47f8"
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
