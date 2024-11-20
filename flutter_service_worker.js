'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "741f39421d46cbb35fd6c639a47cf952",
"version.json": "faf065a7adfe6b40cccc25e1d53c3763",
"index.html": "f37a40fc869f503bbd20624d2b36d4b2",
"/": "f37a40fc869f503bbd20624d2b36d4b2",
"main.dart.js": "f4597baeb5ca3fb7f7ca9af25a898803",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3239835719d29aea01c8d933a9d83e7b",
".git/config": "356fa8d5a2b52db58c0f19262ebd00de",
".git/objects/59/6a3e031f6a5aba6eecd0ad7eac0f8dd53b7251": "271ca9db6722e021bd6dfa90aa72259b",
".git/objects/92/4bbd8fa36b683722dc9e973edf55747f6358a9": "484f2f24f6f0a42c69592a4ad9d69879",
".git/objects/66/0e57b63729a94b7790059a0aa9293b82dcfc23": "f9df70fee2b26e152f1c53edbad39e6f",
".git/objects/68/8a574802ebba83f1283fb19103c80cbf02de5c": "0d2939f38af1a4bf76b80398fc8c49ae",
".git/objects/57/5b02e1fab06bf31993dd3a1ec86d4d592c0e3e": "ca89c075c9b82c482ce07fba522438ad",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/51/f5e342336f46b19b590cdfd8e4da43e62e3aed": "e938b61ead6e673164b8bc091183e60e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/a56da5021914a714fdc0af7fa1ed092fa74df3": "9f6c78fadc10cd9b9975af28819104f6",
".git/objects/94/65b30d83a96133275c1c47b87fb84ff00fb54b": "004cf9246524d9d6dd6d7c513d064c24",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/4d9384cae02909b71dd95a4cade8711360d4e3": "2aa4372246f98b086e03cc04fca7ef32",
".git/objects/5f/b04f61cf9d40ab463ac15b58dd652e43743527": "546cd2bcfee4eab1fe400400fe951c7f",
".git/objects/05/3c3f3e00c11dec52b767827534d28f7af826c2": "78ea1eaeafe9fe851ec5e7d7bf99d93a",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/8cfbed9839f60cdcf2cf9fa8c190b57d3c2e6a": "3aa59757a24961710305bc86e9a2455c",
".git/objects/a4/77b05a3a16cecdf7b6c0029afa09077f46bc90": "31d38b87a178d49ad85e5791281dbe06",
".git/objects/ac/c57308fba1b3fddd2cd507ed5856ec625ec094": "97aa9f13a74724f071e9c493a5a7a6df",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/f92aa539a69dca82312a858e38e114845b0df3": "ab8a9799dd9a31ef5e59f71d93bd6f17",
".git/objects/b4/9f033adf41dc3381ff6b71a69d75f97b2e4623": "41f5c6dff9b64564b925a17913c4d10c",
".git/objects/a2/c35a326c73983332d096388326816bf3ef78c6": "0932282ee148f6e6502ede7563f57635",
".git/objects/bd/52c965396820fbf969bd51f5a7f659d2755414": "15761ca8283ab04ff7356fa67ee0f8e4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/2dd194f1cc5c2e9326974cd72d8adc04ea79f6": "ae7e5c4f1222c23b05ac80fddc3767dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/9696e41c0bc49af7034100c67357472b0228d4": "c1e355afb77846c4f7a385c6cd00dad5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/b0bf141d7616c09d1f54b0358e1dcf68342705": "b1b71d74b0c9450e704507937d823dc0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/7e21938ec79897333252cab39d7197223556b7": "a827afdaeaec6361f2c74003ceacbd55",
".git/objects/fb/2a0a8f0008e907a16d5ddf72032b4ba2510869": "5a1a29d0ad22ade0d2c519f3f77aa9ad",
".git/objects/fb/ca413066f07dfdf253ea56cabf03106eba5fad": "317443f13010e6d34bef4a85d1e0163d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/55be4a5708a50441feb6ad33c584d700e0b4da": "9ff4f0897e8991eea5763fa58fa0274a",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/301ad7b254dde17f4d1564cdc4db521e8a141d": "f2e083d350de722fd279432251fb1366",
".git/objects/89/02a401538a7a0fb80ce9018de9a7913fa45e75": "53eee5911e3b5af14f0e5f8648cb3424",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/b9fc9f5ba0574226f90fb9ee4538df1d08cff5": "66f8e97f1d23ac023f36eab3953e18d3",
".git/objects/9a/a3faf1356b018fd612a4f98e36a20eb7edf24e": "a1c3448b8ca5729fb848c658eecf0c30",
".git/objects/37/1ef405b276b2fea46e0f1ba4bc0923fe97030d": "26671c609c85154b31b8ce1aa8186cb3",
".git/objects/52/ef6a516b4bb0ac5aa4cae27e65b7507ebfd7d8": "65defe44d7d9574c3661b6cfe8da8b5d",
".git/objects/63/3c9dd6a9f60146bf11ec74171168d94f7282b7": "316e5dfa43cf4707674ff042f8185ba8",
".git/objects/d3/51d335a042029d223a63e5e5b46b6efa51d760": "6f3b25127bcbede6a229984c4c4a4f3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/1183fae1bb8e25fdba24b72ff861ae9e02d004": "87f622f290971442327b755aef12009b",
".git/objects/a9/eee4e149a3573c2bf6b9bff4ac952f3a723934": "756e9335653112a31319b0ef87f13d54",
".git/objects/a9/cbdd25027042dd9bb81c1f36377988631dc478": "c8646340ffd8495fb8c3de6177379765",
".git/objects/aa/4a529b010cc784f8a7723f5fb2aa5fceff555f": "0e305f01c38af95dda0b51e97964c344",
".git/objects/af/605cb0342e1b48e94dc0e527bf3420d04581ea": "656879a76f8043099742fb21ad81f1f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/4b8f248fd14965666f8c66a777c9a681081d19": "a0ce019cdf8e558af1697146098238e9",
".git/objects/db/d7dc45f09ac6420100a8a706d8cb6939bf1665": "87b09acb05c51d447eb96f39e46fc7b0",
".git/objects/f9/2fd8f65dd3a897467ace0338285ff5b7879563": "e98e8f37cb8a787f1ce3a71b680be363",
".git/objects/e9/ca56c5b1f8977c782393c043d9021ae128ddb5": "f50c7b2d304910b1e032c284e54ee7cb",
".git/objects/cb/73544c4f8abd4b3603e2d4c9c421ad240ee0c9": "ecac83aafa9620e9363661645d35e842",
".git/objects/cb/6f537e9a1bb8d718555000c0552a3c6cf67922": "faee9cbdac9f82bda624e4c571e62d8b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/15/a7f5a9b34312233243f7fda4fb94c6d64b8b4a": "3888be67e3ebafa0f0611004e846d196",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d90cd2819ff610df43f1b4ac5181ee7b",
".git/logs/refs/heads/master": "866c4437665c07a20206ee385876b3f9",
".git/logs/refs/heads/main": "7c6eb0c0899e819d6eeb774b370edac9",
".git/logs/refs/remotes/origin/main": "ded1ee291b9e936936427280be884708",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "863a12689b127c005ddddec770e1d240",
".git/refs/heads/main": "966da54faf1bf624820de9774401aa49",
".git/refs/remotes/origin/main": "966da54faf1bf624820de9774401aa49",
".git/index": "e339c9e9223323cfc6f56fc09a46c2f0",
".git/COMMIT_EDITMSG": "3129f4093ce2363ccf65f982ae5388c3",
".git/FETCH_HEAD": "5c697d5afef87f6c70cf154e458f46dd",
"assets/AssetManifest.json": "c5de2573b604d9fc1903a11d7f0e8f33",
"assets/NOTICES": "b59d2b93efcb5d7bacc2a6daf7b4e756",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2def40d569cdd5d503defcdbfa8bd7b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9fb7744dc96418afb30c36d09e40c20a",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/assets/images/aiTeacher.png": "d32cb83294081e7ecc523398a46faabb",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
