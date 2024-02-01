// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jsjL6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _diagnostic = require("@parcel/diagnostic");
var _diagnosticDefault = parcelHelpers.interopDefault(_diagnostic);
var _incodeJs = require("./components/incode.js");
var _pagesJs = require("./components/pages.js");
var _stylesCss = require("./styles.css");
let onBoarding;
let session;
const container = document.getElementById("incode-container");
const app = function() {
    container.innerHTML = `<p>Creando la sesi\xf3n...</p>`;
    try {
        onBoarding = (0, _incodeJs.createOnBoarding)(); // initialize the instance
        /**
     * The Incode Web SDK components encapsulate different 
     * functionalities that use a common set of models that need to be pre-loaded.
     */ onBoarding.warmup();
        (0, _incodeJs.createSession)(onBoarding).then((session)=>{
            container.innerHTML = `<h3>Sesi\xf3n</h3>
      <p><strong>token:</strong> ${session.token}</p>
      <p><strong>interviewId:</strong> ${session.interviewId}</p>
      <p><strong>clientId:</strong> ${session.clientId}</p>`;
            (0, _incodeJs.sendGeolocation)(onBoarding, session.token).then((res)=>{
                container.innerHTML = `<h3>Ubicaci\xf3n</h3>
        <p><strong>Ubicaci\xf3n:</strong> ${res.location}</p>
        <p><strong>token:</strong> ${session.token}</p>`;
                (0, _incodeJs.renderFrontIDCamera)(onBoarding, container, session);
            });
        });
    } catch (e) {
        console.dir(e);
        container.innerHTML = `<p>Something went wrong</p>`;
        throw e;
    }
};
document.addEventListener("DOMContentLoaded", app);

},{"./components/incode.js":"gkxih","./components/pages.js":"hwgt3","./styles.css":"lW6qc","@parcel/diagnostic":"63MN6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkxih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "createOnBoarding", ()=>createOnBoarding);
parcelHelpers.export(exports, "createSession", ()=>createSession);
parcelHelpers.export(exports, "sendGeolocation", ()=>sendGeolocation);
parcelHelpers.export(exports, "renderFrontIDCamera", ()=>renderFrontIDCamera);
parcelHelpers.export(exports, "renderBackIDCamera", ()=>renderBackIDCamera);
parcelHelpers.export(exports, "processId", ()=>processId);
var _constantsJs = require("../constants.js");
const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));
const createOnBoarding = function() {
    const incodeConfig = {
        apiKey: (0, _constantsJs.apiKey),
        apiURL: (0, _constantsJs.apiURL),
        lang: "es",
        encrypt: true
    };
    return window.OnBoarding.create(incodeConfig);
};
const createSession = function(onBoarding1) {
    return onBoarding1.createSession("MX", null, {
        "configurationId": (0, _constantsJs.apiConfigurationId)
    });
};
const sendGeolocation = function(onBoarding1, token) {
    return onBoarding1.sendGeolocation({
        token
    });
};
const showError = function(container) {
    container.innerHTML = `<p>Alg\xfan error...</p>`;
};
const renderFrontIDCamera = async function(onBoarding1, container, session1) {
    await delay(5000);
    onBoarding1.renderCamera("front", container, {
        onSuccess: (result)=>{
            renderBackIDCamera(onBoarding1, container, session1);
        },
        onError: showError,
        numberOfTries: 3,
        token: session1,
        showTutorial: true
    });
};
const renderBackIDCamera = function(onBoarding1, container, session1) {
    onBoarding1.renderCamera("back", container, {
        onSuccess: (result)=>{
            processId(onBoarding1, container, session1);
        },
        onError: showError,
        token: session1,
        numberOfTries: 3,
        showTutorial: true
    });
};
const processId = function(onBoarding1, container, session1) {
    container.innerHTML = "<p>Cargando...</p>";
    onBoarding1.processId({
        token: session1.token
    }).then(()=>{
        container.innerHTML = "<p>Procesando...</p>";
        renderPoa(onBoarding1, container, session1);
    });
};
const renderPoa = function(onBoarding1, container, session1) {
    onBoarding1.renderCamera("document", container, {
        onSuccess: (result)=>{
            renderSelfieCamera(onBoarding1, container, session1);
        },
        onError: showError,
        numberOfTries: 3,
        onLog: ()=>{},
        token: session1,
        permissionBackgroundColor: "#696969",
        sendBase64: false,
        nativeCamera: false
    });
};
const renderSelfieCamera = function(onBoarding1, container, session1) {
    onBoarding1.renderCamera("selfie", container, {
        onSuccess: ()=>{
            renderSignature(onBoarding1, container, session1);
        },
        onError: showError,
        token: session1,
        numberOfTries: 3,
        showTutorial: true
    });
};
const renderSignature = function(onBoarding1, container, session1) {
    onBoarding1.renderSignature(container, {
        onSuccess: renderVideoConference,
        token: session1.token
    });
};
const renderVideoConference = function(container) {
    onBoarding.renderConference(container, {
        token: session,
        showOTP: false
    }, {
        onSuccess: (status)=>{
            console.log("success");
            container.innerHTML = `<p>Exitoso con estatus: ${status}</p>`;
        },
        onError: (error)=>{
            console.log("error", error);
            container.innerHTML = `<p>Error con estatus: ${error}</p>`;
        },
        onLog: (...params)=>console.log("onLog", ...params)
    });
};

},{"../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3huJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apiURL", ()=>apiURL);
parcelHelpers.export(exports, "apiKey", ()=>apiKey);
parcelHelpers.export(exports, "apiConfigurationId", ()=>apiConfigurationId);
const apiURL = "https://demo-api.incodesmile.com/";
const apiKey = "52b140ad469e89a8895d27879631e53708d6cf7f";
const apiConfigurationId = "63adbdcfc5f5289ebdf56ae4";
const container = document.getElementById("incode-container");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hwgt3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderWelcomePage", ()=>renderWelcomePage);
var _incodeJs = require("./incode.js");
const renderWelcomePage = async function(onBoarding, container, session) {
    container.innerHTML = "<p>P\xe1gina de inicio...</p>";
    await (0, _incodeJs.delay)(5000);
    (0, _incodeJs.renderFrontIDCamera)(onBoarding, container, session);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./incode.js":"gkxih"}],"lW6qc":[function() {},{}],"63MN6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anyToDiagnostic = anyToDiagnostic;
exports.convertSourceLocationToHighlight = convertSourceLocationToHighlight;
exports.default = void 0;
exports.encodeJSONKeyComponent = encodeJSONKeyComponent;
exports.errorToDiagnostic = errorToDiagnostic;
exports.escapeMarkdown = escapeMarkdown;
exports.generateJSONCodeHighlights = generateJSONCodeHighlights;
exports.getJSONHighlightLocation = getJSONHighlightLocation;
exports.getJSONSourceLocation = getJSONSourceLocation;
exports.md = md;
function _assert() {
    const data = _interopRequireDefault(require("2b1993393b8f2387"));
    _assert = function() {
        return data;
    };
    return data;
}
function _nullthrows() {
    const data = _interopRequireDefault(require("53db920670fed439"));
    _nullthrows = function() {
        return data;
    };
    return data;
}
function _jsonSourcemap() {
    const data = require("998face932638030");
    _jsonSourcemap = function() {
        return data;
    };
    return data;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** These positions are 1-based (so <code>1</code> is the first line/column) */ /**
 * Note: A tab character is always counted as a single character
 * This is to prevent any mismatch of highlighting across machines
 */ /**
 * Describes how to format a code frame.
 * A code frame is a visualization of a piece of code with a certain amount of
 * code highlights that point to certain chunk(s) inside the code.
 */ /**
 * A style agnostic way of emitting errors, warnings and info.
 * Reporters are responsible for rendering the message, codeframes, hints, ...
 */ // This type should represent all error formats Parcel can encounter...
/** Something that can be turned into a diagnostic. */ /** Normalize the given value into a diagnostic. */ function anyToDiagnostic(input) {
    if (Array.isArray(input)) return input;
    else if (input instanceof ThrowableDiagnostic) return input.diagnostics;
    else if (input instanceof Error) return errorToDiagnostic(input);
    else if (typeof input === "string") return [
        {
            message: input
        }
    ];
    else if (typeof input === "object") return [
        input
    ];
    else return errorToDiagnostic(input);
}
/** Normalize the given error into a diagnostic. */ function errorToDiagnostic(error, defaultValues) {
    var _defaultValues$origin2, _ref4, _error$highlightedCod;
    let codeFrames = undefined;
    if (typeof error === "string") {
        var _defaultValues$origin;
        return [
            {
                origin: (_defaultValues$origin = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _defaultValues$origin !== void 0 ? _defaultValues$origin : "Error",
                message: escapeMarkdown(error)
            }
        ];
    }
    if (error instanceof ThrowableDiagnostic) return error.diagnostics.map((d)=>{
        var _ref, _d$origin;
        return {
            ...d,
            origin: (_ref = (_d$origin = d.origin) !== null && _d$origin !== void 0 ? _d$origin : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _ref !== void 0 ? _ref : "unknown"
        };
    });
    if (error.loc && error.source != null) {
        var _ref2, _ref3, _error$filePath;
        codeFrames = [
            {
                filePath: (_ref2 = (_ref3 = (_error$filePath = error.filePath) !== null && _error$filePath !== void 0 ? _error$filePath : error.fileName) !== null && _ref3 !== void 0 ? _ref3 : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.filePath) !== null && _ref2 !== void 0 ? _ref2 : undefined,
                code: error.source,
                codeHighlights: [
                    {
                        start: {
                            line: error.loc.line,
                            column: error.loc.column
                        },
                        end: {
                            line: error.loc.line,
                            column: error.loc.column
                        }
                    }
                ]
            }
        ];
    }
    return [
        {
            origin: (_defaultValues$origin2 = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _defaultValues$origin2 !== void 0 ? _defaultValues$origin2 : "Error",
            message: escapeMarkdown(error.message),
            name: error.name,
            stack: codeFrames == null ? (_ref4 = (_error$highlightedCod = error.highlightedCodeFrame) !== null && _error$highlightedCod !== void 0 ? _error$highlightedCod : error.codeFrame) !== null && _ref4 !== void 0 ? _ref4 : error.stack : undefined,
            codeFrames
        }
    ];
}
/**
 * An error wrapper around a diagnostic that can be <code>throw</code>n (e.g. to signal a
 * build error).
 */ class ThrowableDiagnostic extends Error {
    constructor(opts){
        var _diagnostics$0$stack, _diagnostics$0$name;
        let diagnostics = Array.isArray(opts.diagnostic) ? opts.diagnostic : [
            opts.diagnostic
        ];
        // Construct error from diagnostics
        super(diagnostics[0].message);
        // @ts-ignore
        this.stack = (_diagnostics$0$stack = diagnostics[0].stack) !== null && _diagnostics$0$stack !== void 0 ? _diagnostics$0$stack : super.stack;
        // @ts-ignore
        this.name = (_diagnostics$0$name = diagnostics[0].name) !== null && _diagnostics$0$name !== void 0 ? _diagnostics$0$name : super.name;
        this.diagnostics = diagnostics;
    }
}
/**
 * Turns a list of positions in a JSON5 file with messages into a list of diagnostics.
 * Uses <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>.
 *
 * @param code the JSON code
 * @param ids A list of JSON keypaths (<code>key: "/some/parent/child"</code>) with corresponding messages, \
 * <code>type</code> signifies whether the key of the value in a JSON object should be highlighted.
 */ exports.default = ThrowableDiagnostic;
function generateJSONCodeHighlights(data, ids) {
    let map = typeof data == "string" ? (0, _jsonSourcemap().parse)(data, undefined, {
        dialect: "JSON5",
        tabWidth: 1
    }) : data;
    return ids.map(({ key, type, message })=>{
        let pos = (0, _nullthrows().default)(map.pointers[key]);
        return {
            ...getJSONHighlightLocation(pos, type),
            message
        };
    });
}
/**
 * Converts entries in <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>'s
 * <code>result.pointers</code> array.
 */ function getJSONHighlightLocation(pos, type) {
    let key = "key" in pos ? pos.key : undefined;
    let keyEnd = "keyEnd" in pos ? pos.keyEnd : undefined;
    if (!type && key && pos.value) // key and value
    return {
        start: {
            line: key.line + 1,
            column: key.column + 1
        },
        end: {
            line: pos.valueEnd.line + 1,
            column: pos.valueEnd.column
        }
    };
    else if (type == "key" || !pos.value) {
        (0, _assert().default)(key && keyEnd);
        return {
            start: {
                line: key.line + 1,
                column: key.column + 1
            },
            end: {
                line: keyEnd.line + 1,
                column: keyEnd.column
            }
        };
    } else return {
        start: {
            line: pos.value.line + 1,
            column: pos.value.column + 1
        },
        end: {
            line: pos.valueEnd.line + 1,
            column: pos.valueEnd.column
        }
    };
}
/** Result is 1-based, but end is exclusive */ function getJSONSourceLocation(pos, type) {
    let v = getJSONHighlightLocation(pos, type);
    return {
        start: v.start,
        end: {
            line: v.end.line,
            column: v.end.column + 1
        }
    };
}
function convertSourceLocationToHighlight({ start, end }, message) {
    return {
        message,
        start,
        end: {
            line: end.line,
            column: end.column - 1
        }
    };
}
/** Sanitizes object keys before using them as <code>key</code> in generateJSONCodeHighlights */ function encodeJSONKeyComponent(component) {
    return component.replace(/~/g, "~0").replace(/\//g, "~1");
}
const escapeCharacters = [
    "\\",
    "*",
    "_",
    "~"
];
function escapeMarkdown(s) {
    let result = s;
    for (const char of escapeCharacters)result = result.replace(new RegExp(`\\${char}`, "g"), `\\${char}`);
    return result;
}
const mdVerbatim = Symbol();
function md(strings, ...params) {
    let result = [];
    for(let i = 0; i < params.length; i++){
        result.push(strings[i]);
        let param = params[i];
        if (Array.isArray(param)) for(let j = 0; j < param.length; j++){
            var _param$j$mdVerbatim, _param$j;
            result.push((_param$j$mdVerbatim = (_param$j = param[j]) === null || _param$j === void 0 ? void 0 : _param$j[mdVerbatim]) !== null && _param$j$mdVerbatim !== void 0 ? _param$j$mdVerbatim : escapeMarkdown(`${param[j]}`));
            if (j < param.length - 1) result.push(", ");
        }
        else {
            var _param$mdVerbatim;
            result.push((_param$mdVerbatim = param === null || param === void 0 ? void 0 : param[mdVerbatim]) !== null && _param$mdVerbatim !== void 0 ? _param$mdVerbatim : escapeMarkdown(`${param}`));
        }
    }
    return result.join("") + strings[strings.length - 1];
}
md.bold = function(s) {
    // $FlowFixMe[invalid-computed-prop]
    return {
        [mdVerbatim]: "**" + escapeMarkdown(`${s}`) + "**"
    };
};
md.italic = function(s) {
    // $FlowFixMe[invalid-computed-prop]
    return {
        [mdVerbatim]: "_" + escapeMarkdown(`${s}`) + "_"
    };
};
md.underline = function(s) {
    // $FlowFixMe[invalid-computed-prop]
    return {
        [mdVerbatim]: "__" + escapeMarkdown(`${s}`) + "__"
    };
};
md.strikethrough = function(s) {
    // $FlowFixMe[invalid-computed-prop]
    return {
        [mdVerbatim]: "~~" + escapeMarkdown(`${s}`) + "~~"
    };
};

},{"2b1993393b8f2387":"f3tT4","53db920670fed439":"2WlVY","998face932638030":"4ip6R"}],"f3tT4":[function(require,module,exports) {
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("17530e9a8e9dd8de");
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require("67930e3bebc18ea9"), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require("11bdd262fb706a54");
var _require2 = require("d61a3396666721b6"), inspect = _require2.inspect;
var _require$types = require("d61a3396666721b6").types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = require("fe81af847d362e93")();
var objectIs = require("4ad4507c8e372c71")();
var RegExpPrototypeTest = require("11f208d8f2e10b17")("RegExp.prototype.test");
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require("131e25d2408617a4");
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
}
// Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "",
    "",
    "\\u000b",
    "\\f",
    "",
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false;
// The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {};
// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = "Failed";
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? "fail" : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail;
// The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: "==",
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
}
// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok;
// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "==",
        stackStartFn: equal
    });
};
// The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "!=",
        stackStartFn: notEqual
    });
};
// The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepEqual",
        stackStartFn: deepEqual
    });
};
// The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "strictEqual",
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
    });
};
var Comparison = /*#__PURE__*/ _createClass(function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
});
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison(actual, keys);
            var b = new Comparison(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
        if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
        // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
        ], expected);
        // Handle primitives properly.
        if (_typeof(actual) !== "object" || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected);
        // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push("name", "message");
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    }
    // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({}, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn();
            // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], error);
        if (_typeof(actual) === "object" && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") throw new ERR_INVALID_ARG_TYPE("error", [
        "Object",
        "Error",
        "Function",
        "RegExp"
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = "ifError got unwanted exception: ";
        if (_typeof(err) === "object" && typeof err.message === "string") {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: "ifError",
            message: message,
            stackStartFn: ifError
        });
        // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === "string") {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split("\n");
            tmp2.shift();
            // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split("\n");
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
    }
};
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function internalMatch(string, regexp, message, fn, fnName) {
    if (!isRegExp(regexp)) throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
    var match = fnName === "match";
    if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
        if (message instanceof Error) throw message;
        var generatedMessage = !message;
        // 'The input was expected to not match the regular expression ' +
        message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
        var err = new AssertionError({
            actual: string,
            expected: regexp,
            message: message,
            operator: fnName,
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
}
assert.match = function match(string, regexp, message) {
    internalMatch(string, regexp, message, match, "match");
};
assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
    internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
};
// Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"17530e9a8e9dd8de":"d5jf4","67930e3bebc18ea9":"cwQVR","11bdd262fb706a54":"lQlQt","d61a3396666721b6":"cxohQ","fe81af847d362e93":"ajEZo","4ad4507c8e372c71":"ezjA5","11f208d8f2e10b17":"5yYiF","131e25d2408617a4":"d5TM9"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"cwQVR":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ "use strict";
// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
var codes = {};
// Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        var _super = _createSuper(NodeError);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _super.call(this, getMessage(arg1, arg2, arg3));
            _this.code = code;
            return _this;
        }
        return _createClass(NodeError);
    }(Base);
    codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(typeof name === "string", "'name' must be a string");
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if (util === undefined) util = require("1fd472100fa8826f");
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
}, TypeError);
createErrorType("ERR_MISSING_ARGS", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
        return '"'.concat(a, '"');
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(", ");
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"f73a3052b95b9ed":"f3tT4","1fd472100fa8826f":"cxohQ"}],"cxohQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("bc23a3ea4a141c0b");
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === "%%") return "%";
        if (i >= len) return x;
        switch(x){
            case "%s":
                return String(args[i++]);
            case "%d":
                return Number(args[i++]);
            case "%j":
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return "[Circular]";
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if (isNull(x) || !isObject(x)) str += " " + x;
    else str += " " + inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === "undefined") return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
            };
        } else debugs[set] = function() {};
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    "bold": [
        1,
        22
    ],
    "italic": [
        3,
        23
    ],
    "underline": [
        4,
        24
    ],
    "inverse": [
        7,
        27
    ],
    "white": [
        37,
        39
    ],
    "grey": [
        90,
        39
    ],
    "black": [
        30,
        39
    ],
    "blue": [
        34,
        39
    ],
    "cyan": [
        36,
        39
    ],
    "green": [
        32,
        39
    ],
    "magenta": [
        35,
        39
    ],
    "red": [
        31,
        39
    ],
    "yellow": [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return "\x1b[" + inspect.colors[style][0] + "m" + str + "\x1b[" + inspect.colors[style][1] + "m";
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if (isError(value)) return formatError(value);
    }
    var base = "", array = false, braces = [
        "{",
        "}"
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            "[",
            "]"
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = " " + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        else return ctx.stylize("[Object]", "special");
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
    }
    if (isNumber(value)) return ctx.stylize("" + value, "number");
    if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize("null", "null");
}
function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push("");
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
        else str = ctx.stylize("[Getter]", "special");
    } else if (desc.set) str = ctx.stylize("[Setter]", "special");
    if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf("\n") > -1) {
                if (array) str = str.split("\n").map(function(line) {
                    return "  " + line;
                }).join("\n").slice(2);
                else str = "\n" + str.split("\n").map(function(line) {
                    return "   " + line;
                }).join("\n");
            }
        } else str = ctx.stylize("[Circular]", "special");
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
        }
    }
    return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require("6a1c15bae847a134");
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require("a42137cd7fc8700d");
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(":");
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(" ");
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require("a792e8e3e2aa1973");
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"bc23a3ea4a141c0b":"d5jf4","6a1c15bae847a134":"bnQvf","a42137cd7fc8700d":"inNNy","a792e8e3e2aa1973":"bRL3M"}],"bnQvf":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
var isArgumentsObject = require("6b5f9ae3e436d527");
var isGeneratorFunction = require("285c2b8081bf4b68");
var whichTypedArray = require("e95b88ccd80e1671");
var isTypedArray = require("7db151546a22c2a8");
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== "undefined";
var SymbolSupported = typeof Symbol !== "undefined";
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === "Uint8Array";
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === "Uint8ClampedArray";
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === "Uint16Array";
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === "Uint32Array";
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === "Int8Array";
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === "Int16Array";
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === "Int32Array";
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === "Float32Array";
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === "Float64Array";
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === "BigInt64Array";
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === "BigUint64Array";
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
}
isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === "undefined") return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
}
isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === "undefined") return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
}
isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === "undefined") return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
}
isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
}
isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
}
isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === "undefined") return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") return false;
    if (typeof isSharedArrayBufferToString.working === "undefined") isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + " is not supported in userland");
        }
    });
});

},{"6b5f9ae3e436d527":"czr4n","285c2b8081bf4b68":"2XUdn","e95b88ccd80e1671":"lVUO7","7db151546a22c2a8":"1ihkG"}],"czr4n":[function(require,module,exports) {
"use strict";
var hasToStringTag = require("e2b01ce809f132fb")();
var callBound = require("649cbf9949986a39");
var $toString = callBound("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $toString(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"e2b01ce809f132fb":"9LdQ9","649cbf9949986a39":"5yYiF"}],"9LdQ9":[function(require,module,exports) {
"use strict";
var hasSymbols = require("2ef89576d4959bff");
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"2ef89576d4959bff":"euYk7"}],"euYk7":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"5yYiF":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var hasProto = require("23730654306aa64c")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("af36d49b4b8c6c7c");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","af36d49b4b8c6c7c":"9Wb6f"}],"3dK91":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"euYk7"}],"6eZiF":[function(require,module,exports) {
"use strict";
var test = {
    foo: {}
};
var $Object = Object;
module.exports = function hasProto() {
    return ({
        __proto__: test
    }).foo === test.foo && !(({
        __proto__: null
    }) instanceof $Object);
};

},{}],"6J4ob":[function(require,module,exports) {
"use strict";
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = "";
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"9Wb6f":[function(require,module,exports) {
"use strict";
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {(o: {}, p: PropertyKey) => p is keyof o} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"6J4ob"}],"bfo8D":[function(require,module,exports) {
"use strict";
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var setFunctionLength = require("f4b53071c102d4e");
var $TypeError = GetIntrinsic("%TypeError%");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05","f4b53071c102d4e":"9IKoX"}],"9IKoX":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b1c9107ef1524f2");
var define = require("37dd1486f0f556ef");
var hasDescriptors = require("6a9d2b46085df706")();
var gOPD = require("2d412b0f532d1834");
var $TypeError = GetIntrinsic("%TypeError%");
var $floor = GetIntrinsic("%Math.floor%");
/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
    if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) define(/** @type {Parameters<define>[0]} */ fn, "length", length, true, true);
        else define(/** @type {Parameters<define>[0]} */ fn, "length", length);
    }
    return fn;
};

},{"8b1c9107ef1524f2":"dZb05","37dd1486f0f556ef":"6cEff","6a9d2b46085df706":"esBLZ","2d412b0f532d1834":"eOTQB"}],"6cEff":[function(require,module,exports) {
"use strict";
var hasPropertyDescriptors = require("1ed580143eb408b3")();
var GetIntrinsic = require("971d0ad91a472750");
var $defineProperty = hasPropertyDescriptors && GetIntrinsic("%Object.defineProperty%", true);
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
var $SyntaxError = GetIntrinsic("%SyntaxError%");
var $TypeError = GetIntrinsic("%TypeError%");
var gopd = require("3f9bd39335781ec7");
/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
    if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
};

},{"1ed580143eb408b3":"esBLZ","971d0ad91a472750":"dZb05","3f9bd39335781ec7":"eOTQB"}],"esBLZ":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("b0bf8b8435d3abc");
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($defineProperty) try {
        $defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!hasPropertyDescriptors()) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"b0bf8b8435d3abc":"dZb05"}],"eOTQB":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("693e651525841e04");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"693e651525841e04":"dZb05"}],"2XUdn":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require("b42ab74c25dbb155")();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function("return function*() {}")();
    } catch (e) {}
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === "[object GeneratorFunction]";
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"b42ab74c25dbb155":"9LdQ9"}],"lVUO7":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("2941d48f36957e3c");
var availableTypedArrays = require("beaf5502a5823cce");
var callBind = require("e5d203a1b4c809f9");
var callBound = require("83f633f9b335db8f");
var gOPD = require("ce6b45c571ba4e3e");
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("9e7ef6c88184c56")();
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound("String.prototype.slice");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var cache = {
    __proto__: null
};
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        cache["$" + typedArray] = callBind(descriptor.get);
    }
});
else forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) cache["$" + typedArray] = callBind(fn);
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var found = false;
    forEach(cache, function(getter, typedArray) {
        if (!found) try {
            if ("$" + getter(value) === typedArray) found = $slice(typedArray, 1);
        } catch (e) {}
    });
    return found;
};
var trySlices = function tryAllSlices(value) {
    var found = false;
    forEach(cache, function(getter, name) {
        if (!found) try {
            getter(value);
            found = $slice(name, 1);
        } catch (e) {}
    });
    return found;
};
module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if ($indexOf(typedArrays, tag) > -1) return tag;
        if (tag !== "Object") return false;
        // node < 0.6 hits here on real Typed Arrays
        return trySlices(value);
    }
    if (!gOPD) return null;
     // unknown engine
    return tryTypedArrays(value);
};

},{"2941d48f36957e3c":"1Sol9","beaf5502a5823cce":"kfela","e5d203a1b4c809f9":"bfo8D","83f633f9b335db8f":"5yYiF","ce6b45c571ba4e3e":"eOTQB","9e7ef6c88184c56":"9LdQ9"}],"1Sol9":[function(require,module,exports) {
"use strict";
var isCallable = require("e50ebc24bbb25feb");
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if (hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if (toStr.call(list) === "[object Array]") forEachArray(list, iterator, receiver);
    else if (typeof list === "string") forEachString(list, iterator, receiver);
    else forEachObject(list, iterator, receiver);
};
module.exports = forEach;

},{"e50ebc24bbb25feb":"9ocyk"}],"9ocyk":[function(require,module,exports) {
"use strict";
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") try {
    badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
            throw isCallableMarker;
        }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function() {
        throw 42;
    }, null, badArrayLike);
} catch (_) {
    if (_ !== isCallableMarker) reflectApply = null;
}
else reflectApply = null;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) return false;
        fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]"; // IE 11
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
             || str === objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        reflectApply(value, null, badArrayLike);
    } catch (e) {
        if (e !== isCallableMarker) return false;
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if (hasToStringTag) return tryFunctionObject(value);
    if (isES6ClassFn(value)) return false;
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
    return tryFunctionObject(value);
};

},{}],"kfela":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var /** @type {ReturnType<import('.')>} */ possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
];
var g = typeof globalThis === "undefined" ? global : globalThis;
/** @type {import('.')} */ module.exports = function availableTypedArrays() {
    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === "function") // @ts-expect-error
    out[out.length] = possibleNames[i];
    return out;
};

},{}],"1ihkG":[function(require,module,exports) {
"use strict";
var whichTypedArray = require("ccf73e5f240c2b8");
module.exports = function isTypedArray(value) {
    return !!whichTypedArray(value);
};

},{"ccf73e5f240c2b8":"lVUO7"}],"inNNy":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"lQlQt":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var process = require("228da2c254a5e871");
"use strict";
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _require = require("9984e91d63ed614c"), inspect = _require.inspect;
var _require2 = require("1670766d7c5cef96"), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = "";
var green = "";
var red = "";
var white = "";
var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
};
// Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) operator = "strictEqualObject";
    // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length;
        // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== "strictEqualObject") {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(" ", i), "^");
                    i = 0;
                }
            }
        }
    }
    // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split("\n");
        // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            }
            // Mark the current line as the last diverging one.
            lastPos = i;
            // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++;
        // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            }
            // Mark the current line as the last diverging one.
            lastPos = i;
            // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++;
        // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i];
            // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
            // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ",";
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                }
                // Mark the current line as the last diverging one.
                lastPos = i;
                // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2;
            // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = "";
                // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        }
        // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError = /*#__PURE__*/ function(_Error, _inspect$custom) {
    _inherits(AssertionError, _Error);
    var _super = _createSuper(AssertionError);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== "object" || options === null) throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _super.call(this, String(message));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1b[34m";
                    green = "\x1b[32m";
                    white = "\x1b[39m";
                    red = "\x1b[31m";
                } else {
                    blue = "";
                    green = "";
                    white = "";
                    red = "";
                }
            }
            // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === "deepStrictEqual" || operator === "strictEqual") _this = _super.call(this, createErrDiff(actual, expected, operator));
            else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split("\n");
                // In case "actual" is an object, it should not be reference equal.
                if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) base = kReadableOperator.notStrictEqualObject;
                // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                }
                // Only print a single input.
                if (res.length === 1) _this = _super.call(this, "".concat(base, " ").concat(res[0]));
                else _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
            } else {
                var _res = inspectValue(actual);
                var other = "";
                var knownOperators = kReadableOperator[operator];
                if (operator === "notDeepEqual" || operator === "notEqual") {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === "deepEqual" || operator === "equal") _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _super.call(this, "".concat(_res).concat(other));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), "name", {
            value: "AssertionError [ERR_ASSERTION]",
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
        // Create error message including the error code in the name.
        _this.stack;
        // Reset the name.
        _this.name = "AssertionError";
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: _inspect$custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(/*#__PURE__*/ _wrapNativeSuper(Error), inspect.custom);
module.exports = AssertionError;

},{"228da2c254a5e871":"d5jf4","9984e91d63ed614c":"cxohQ","1670766d7c5cef96":"cwQVR"}],"ajEZo":[function(require,module,exports) {
"use strict";
var implementation = require("b7e83063a8ec29e5");
var lacksProperEnumerationOrder = function() {
    if (!Object.assign) return false;
    /*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */ var str = "abcdefghijklmnopqrst";
    var letters = str.split("");
    var map = {};
    for(var i = 0; i < letters.length; ++i)map[letters[i]] = letters[i];
    var obj = Object.assign({}, map);
    var actual = "";
    for(var k in obj)actual += k;
    return str !== actual;
};
var assignHasPendingExceptions = function() {
    if (!Object.assign || !Object.preventExtensions) return false;
    /*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */ var thrower = Object.preventExtensions({
        1: 2
    });
    try {
        Object.assign(thrower, "xy");
    } catch (e) {
        return thrower[1] === "y";
    }
    return false;
};
module.exports = function getPolyfill() {
    if (!Object.assign) return implementation;
    if (lacksProperEnumerationOrder()) return implementation;
    if (assignHasPendingExceptions()) return implementation;
    return Object.assign;
};

},{"b7e83063a8ec29e5":"jttW1"}],"jttW1":[function(require,module,exports) {
"use strict";
// modified from https://github.com/es-shims/es6-shim
var objectKeys = require("334c0bea01e613e6");
var hasSymbols = require("1964e25feb5e87a1")();
var callBound = require("6fb85b5b56dcab21");
var toObject = Object;
var $push = callBound("Array.prototype.push");
var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
    if (target == null) throw new TypeError("target must be an object");
    var to = toObject(target); // step 1
    if (arguments.length === 1) return to; // step 2
    for(var s = 1; s < arguments.length; ++s){
        var from = toObject(arguments[s]); // step 3.a.i
        // step 3.a.ii:
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
            var syms = getSymbols(from);
            for(var j = 0; j < syms.length; ++j){
                var key = syms[j];
                if ($propIsEnumerable(from, key)) $push(keys, key);
            }
        }
        // step 3.a.iii:
        for(var i = 0; i < keys.length; ++i){
            var nextKey = keys[i];
            if ($propIsEnumerable(from, nextKey)) {
                var propValue = from[nextKey]; // step 3.a.iii.2.a
                to[nextKey] = propValue; // step 3.a.iii.2.b
            }
        }
    }
    return to; // step 4
};

},{"334c0bea01e613e6":"eNyf4","1964e25feb5e87a1":"euYk7","6fb85b5b56dcab21":"5yYiF"}],"eNyf4":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("93e8460f624c96f4");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("344bb0d7b2568e03");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"93e8460f624c96f4":"1HhOq","344bb0d7b2568e03":"aV01q"}],"1HhOq":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"aV01q":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("b0d8c8b84be91ffd"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"b0d8c8b84be91ffd":"1HhOq"}],"ezjA5":[function(require,module,exports) {
"use strict";
var implementation = require("ff80ab827617d6fd");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation;
};

},{"ff80ab827617d6fd":"WLxcH"}],"WLxcH":[function(require,module,exports) {
"use strict";
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"d5TM9":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require("3addb16fbdd05c1c");
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require("a27e57a3fd2e2e23");
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require("4940125679601087").types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    }
    // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
}
// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3;
// Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
}
// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    }
    // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== "object") return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== "object" || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== "object") {
            if (val2 === null || _typeof(val2) !== "object") // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== "object") return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === "[object Object]") {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
        // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2);
        // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    }
    // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
    // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
}
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case "undefined":
            return null;
        case "object":
            // Only pass in null as object!
            return undefined;
        case "symbol":
            return false;
        case "string":
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case "number":
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i];
        // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === "object" && val !== null) {
            if (set === null) set = new Set();
            // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false;
            // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i];
            // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === "object" && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === "object" && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false;
                // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(_key) === "object" && _key !== null) {
                if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
    // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key2 = keys[i];
        if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"3addb16fbdd05c1c":"k2tpA","a27e57a3fd2e2e23":"hY4fH","4940125679601087":"cxohQ"}],"k2tpA":[function(require,module,exports) {
"use strict";
var define = require("7a0bb7df335a6af");
var callBind = require("794ce1103c4a65ba");
var implementation = require("f52a71fcf365d3bd");
var getPolyfill = require("59addbaef079e040");
var shim = require("c0e8b0f7342ba484");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"7a0bb7df335a6af":"6eq5U","794ce1103c4a65ba":"bfo8D","f52a71fcf365d3bd":"WLxcH","59addbaef079e040":"ezjA5","c0e8b0f7342ba484":"9p2yJ"}],"6eq5U":[function(require,module,exports) {
"use strict";
var keys = require("7ff177585d1618f0");
var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = require("84ca194f5a28ce70");
var isFunction = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
};
var supportsDescriptors = require("c52d62086511583f")();
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) return;
        } else if (!isFunction(predicate) || !predicate()) return;
    }
    if (supportsDescriptors) defineDataProperty(object, name, value, true);
    else defineDataProperty(object, name, value);
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"7ff177585d1618f0":"eNyf4","84ca194f5a28ce70":"6cEff","c52d62086511583f":"esBLZ"}],"9p2yJ":[function(require,module,exports) {
"use strict";
var getPolyfill = require("f188d636391a5061");
var define = require("155865cffc557cd");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"f188d636391a5061":"ezjA5","155865cffc557cd":"6eq5U"}],"hY4fH":[function(require,module,exports) {
"use strict";
var callBind = require("8bc778ead6edc2b");
var define = require("1e9a111647ec40d6");
var implementation = require("db9e8266e38a0a1c");
var getPolyfill = require("37ae20d268339d21");
var shim = require("9fe13ad91d3d9c68");
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"8bc778ead6edc2b":"bfo8D","1e9a111647ec40d6":"6eq5U","db9e8266e38a0a1c":"lxsrq","37ae20d268339d21":"h00Nr","9fe13ad91d3d9c68":"cr2es"}],"lxsrq":[function(require,module,exports) {
"use strict";
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"h00Nr":[function(require,module,exports) {
"use strict";
var implementation = require("e25466f067cfd8fc");
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
    return implementation;
};

},{"e25466f067cfd8fc":"lxsrq"}],"cr2es":[function(require,module,exports) {
"use strict";
var define = require("6e613ddb8bace1c6");
var getPolyfill = require("f2ce5ac0488eb372");
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"6e613ddb8bace1c6":"6eq5U","f2ce5ac0488eb372":"h00Nr"}],"2WlVY":[function(require,module,exports) {
"use strict";
function nullthrows(x, message) {
    if (x != null) return x;
    var error = new Error(message !== undefined ? message : "Got unexpected " + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
}
module.exports = nullthrows;
module.exports.default = nullthrows;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

},{}],"4ip6R":[function(require,module,exports) {
var $hlrUL$lezercommon = require("32e083962c5beec2");
var $hlrUL$json5 = require("b903550402c07972");
var $hlrUL$lezerlr = require("f3a7f9ed834169da");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "parse", ()=>$83c796b2b9543406$export$98e6a39c04603d36);
// This file was generated by lezer-generator. You probably shouldn't edit it.
const $1adaef8fb7bb1497$export$8f49e4af10703ce3 = (0, $hlrUL$lezerlr.LRParser).deserialize({
    version: 14,
    states: "%QO]QPOOOOQO'#Cd'#CdOtQQO'#CgO!PQPO'#ClOOQO'#Cs'#CsQOQPOOOOQO'#Ci'#CiO!WQPO'#ChO!]QPO'#CuOOQO,59R,59RO!eQPO,59ROOQO'#Cm'#CmO!jQPO'#CyOOQO,59W,59WO!rQPO,59WO]QPO,59SO!wQQO,59aO#SQPO,59aOOQO1G.m1G.mO#[QPO,59eO#cQPO,59eOOQO1G.r1G.rOOQO1G.n1G.nOOQO,59Y,59YO#kQQO1G.{OOQO-E6l-E6lOOQO,59Z,59ZO#vQPO1G/POOQO-E6m-E6mPwQQO'#CnP]QPO'#Co",
    stateData: "$R~OfOSPOSQOS~OSSOTSOUSOVSOYQO_ROhPO~OXXOhUOjUO~O^]O~P]Ok_O~Ol`OXiX~OXbO~OlcO^mX~O^eO~OhUOjUOXia~OlhOXia~O^ma~P]OlkO^ma~OhUOjUOXii~O^mi~P]OPQj~",
    goto: "!}nPPPPPPPPoPPow!PPPo!V!_!ePPP!kP!wPPP!z]SOR_cknQWQVg`hmXVQ`hmQ[RVjcknQaWRiaQd[RldQTOWZRcknRf_RYQR^R",
    nodeNames: "\u26A0 LineComment BlockComment JsonText True False Null Number String } { Object Property PropertyName ] [ Array ArrayValue",
    maxTerm: 29,
    nodeProps: [
        [
            "group",
            -7,
            4,
            5,
            6,
            7,
            8,
            11,
            16,
            "Value"
        ],
        [
            "openedBy",
            9,
            "{",
            14,
            "["
        ],
        [
            "closedBy",
            10,
            "}",
            15,
            "]"
        ]
    ],
    skippedNodes: [
        0,
        1,
        2
    ],
    repeatNodeCount: 2,
    tokenData: "!!`~R!OXY$RYZ$RZ[$R[]$R]^$Rpq$Rrs$Wtu.Xwx0b{|2Y|}6p}!O2Y!O!P2l!P!Q6u!Q!R3l!R![5Q![!]8t!c!k.X!k!l8y!l!p.X!p!q@}!q!}.X!}#OB|#O#P/S#P#QCR#R#S.X#T#Y.X#Y#ZCW#Z#b.X#b#cHU#c#h.X#h#iLU#i#o.X#o#p!!U#q#r!!Z$f$g$R$g$IV.X$IV$IW$R$IW$I|.X$I|$I}$R$I}$JO$R$JU;'S.X;'S;=`0[<%l?HT.X?HT?HU$R?HUO.X~$WOf~~$ZXOp$vpq$Wqr$Wrs%`s#O$W#O#P&s#P;'S$W;'S;=`.R<%lO$W~$yVOr$vrs%`s#O$v#O#P%e#P;'S$v;'S;=`&m<%lO$v~%eOh~~%haYZ$v]^$vrs$vwx$v!Q!R$v#O#P$v#T#U$v#U#V$v#Y#Z$v#b#c$v#f#g$v#h#i$v#i#j$v#j#k$v#l#m$v$I|$I}$v$I}$JO$v~&pP;=`<%l$v~&vbYZ$v]^$vrs$Wwx$v!P!Q(O!Q!R$v#O#P$W#T#U$v#U#V$W#Y#Z$W#b#c$W#f#g$W#h#i$W#i#j*c#j#k$v#l#m$v$I|$I}$v$I}$JO$v~(RWpq(Oqr(Ors%`s#O(O#O#P(k#P;'S(O;'S;=`*]<%lO(O~(nXrs(O!P!Q(O#O#P(O#U#V(O#Y#Z(O#b#c(O#f#g(O#h#i(O#i#j)Z~)^R!Q![)g!c!i)g#T#Z)g~)jR!Q![)s!c!i)s#T#Z)s~)vR!Q![*P!c!i*P#T#Z*P~*SR!Q![(O!c!i(O#T#Z(O~*`P;=`<%l(O~*f]Or$vrs%`s!Q$v!Q![+_![!c$v!c!i+_!i#O$v#O#P%e#P#T$v#T#Z+_#Z;'S$v;'S;=`&m<%lO$v~+b]Or$vrs%`s!Q$v!Q![,Z![!c$v!c!i,Z!i#O$v#O#P%e#P#T$v#T#Z,Z#Z;'S$v;'S;=`&m<%lO$v~,^]Or$vrs%`s!Q$v!Q![-V![!c$v!c!i-V!i#O$v#O#P%e#P#T$v#T#Z-V#Z;'S$v;'S;=`&m<%lO$v~-Y]Or$vrs%`s!Q$v!Q![$W![!c$v!c!i$W!i#O$v#O#P%e#P#T$v#T#Z$W#Z;'S$v;'S;=`&m<%lO$v~.UP;=`<%l$WQ.^[jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XQ/VP#i#j/YQ/]R!Q![/f!c!i/f#T#Z/fQ/iR!Q![/r!c!i/r#T#Z/rQ/uR!Q![0O!c!i0O#T#Z0OQ0RR!Q![.X!c!i.X#T#Z.XQ0_P;=`<%l.X~0eVOw0bwx%`x#O0b#O#P0z#P;'S0b;'S;=`2S<%lO0b~0}aYZ0b]^0brs0bwx0b!Q!R0b#O#P0b#T#U0b#U#V0b#Y#Z0b#b#c0b#f#g0b#h#i0b#i#j0b#j#k0b#l#m0b$I|$I}0b$I}$JO0b~2VP;=`<%l0bP2]T!O!P2l!Q!R3l!R![5Q!k!l5c!p!q6dP2oP!Q![2rP2wRVP!Q![2r!g!h3Q#X#Y3QP3TR{|3^}!O3^!Q![3dP3aP!Q![3dP3iPVP!Q![3dP3qTVP!O!P2r!Q![4Q!g!h3Q#X#Y3Q#l#m4fP4TQ!O!P4Z!Q![4QP4`QVP!g!h3Q#X#Y3QP4iR!Q![4r!c!i4r#T#Z4rP4wRVP!Q![4r!c!i4r#T#Z4rP5VSVP!O!P2r!Q![5Q!g!h3Q#X#Y3QP5fP#b#c5iP5lP#Y#Z5oP5rP#]#^5uP5xP#b#c5{P6OP#]#^6RP6UP#h#i6XP6[P#m#n6_P6dOVPP6gP#T#U6jP6mP!p!q6_~6uOl~~6xQz{7O!P!Q8V~7RTOz7Oz{7b{;'S7O;'S;=`8P<%lO7O~7eVOz7Oz{7b{!P7O!P!Q7z!Q;'S7O;'S;=`8P<%lO7O~8POQ~~8SP;=`<%l7O~8[UP~OY8VZ]8V^$I|8V$JO;'S8V;'S;=`8n<%lO8V~8qP;=`<%l8V~8yOk~R9O^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#b.X#b#c9z#c#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR:P^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#Y.X#Y#Z:{#Z#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR;Q^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#].X#]#^;|#^#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR<R^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#b.X#b#c<}#c#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR=S^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#].X#]#^>O#^#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR>T^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#h.X#h#i?P#i#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR?U^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#m.X#m#n@Q#n#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR@X[VPjQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRAS]jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#UA{#U#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRBQ^jQtu.X!Q![.X!c!p.X!p!q@Q!q!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.X~CRO_~~CWO^~RC]]jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#UDU#U#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRDZ^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#`.X#`#aEV#a#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRE[^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#g.X#g#hFW#h#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRF]^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#X.X#X#YGX#Y#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRG`[TPjQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRHZ^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#i.X#i#jIV#j#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRI[^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#`.X#`#aJW#a#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRJ]^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#`.X#`#aKX#a#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRK`[UPjQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRLZ^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#f.X#f#gMV#g#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRM[^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#i.X#i#jNW#j#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XRN]^jQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#X.X#X#Y! X#Y#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.XR! `[SPjQtu.X!Q![.X!c!}.X#O#P/S#R#S.X#T#o.X$g$IV.X$IW$I|.X$JU;'S.X;'S;=`0[<%l?HT.X?HUO.X~!!ZOY~~!!`OX~",
    tokenizers: [
        0,
        1
    ],
    topRules: {
        "JsonText": [
            0,
            3
        ]
    },
    dialects: {
        json5: 137
    },
    tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const $121152950f502dea$export$e6476262d0d4122e = 1, $121152950f502dea$export$33c356ab5b93be35 = 2, $121152950f502dea$export$8bc1c2b4dd1e923b = 3, $121152950f502dea$export$4bc0976997a4d94e = 4, $121152950f502dea$export$5d3e9aafef2fffbe = 5, $121152950f502dea$export$26c9c3a80cd996ae = 6, $121152950f502dea$export$fffa67e515d04022 = 7, $121152950f502dea$export$89b8e0fa65f6a914 = 8, $121152950f502dea$export$164a3ab98abb171d = 11, $121152950f502dea$export$41b04b3a73e7216d = 12, $121152950f502dea$export$e546d8cfcc0684e2 = 13, $121152950f502dea$export$c4be6576ca6fe4aa = 16, $121152950f502dea$export$f06b0ce79fd44095 = 17, $121152950f502dea$export$386a487b17ea4d92 = 0;
function $83c796b2b9543406$export$98e6a39c04603d36(input, reviver, { dialect: dialect = "json", tabWidth: tabWidth = 4 } = {}) {
    // Let these parsers throw any errors about invalid input
    let data = dialect === "JSON5" ? $parcel$interopDefault($hlrUL$json5).parse(input, reviver) : JSON.parse(input, reviver);
    let tree = $1adaef8fb7bb1497$export$8f49e4af10703ce3.configure({
        strict: true,
        dialect: dialect === "JSON5" ? "json5" : "json"
    }).parse(input);
    let pointers = new Map();
    let currentPath = [
        ""
    ];
    tree.iterate({
        enter (node) {
            // if (type.isError) {
            // 	let fromPos = posToLineColumn(input, from, tabWidth);
            // 	let error = new SyntaxError(
            // 		`Failed to parse (${fromPos.line}:${fromPos.column})`
            // 	);
            // 	error.lineNumber = fromPos.line;
            // 	error.columnNumber = fromPos.column;
            // 	throw error;
            // }
            let group = node.type.prop($hlrUL$lezercommon.NodeProp.group);
            if (group === null || group === void 0 ? void 0 : group.includes("Value")) $83c796b2b9543406$var$mapMerge(pointers, $83c796b2b9543406$var$toJsonPointer(currentPath), {
                value: $83c796b2b9543406$var$posToLineColumn(input, node.from, tabWidth),
                valueEnd: $83c796b2b9543406$var$posToLineColumn(input, node.to, tabWidth)
            });
            if (node.name === "PropertyName") {
                let name = input.slice(node.from, node.to);
                let quoted = name[0] === `'` || name[0] == `"`;
                currentPath.push(quoted ? name.slice(1, -1) : name);
                $83c796b2b9543406$var$mapMerge(pointers, $83c796b2b9543406$var$toJsonPointer(currentPath), {
                    key: $83c796b2b9543406$var$posToLineColumn(input, node.from, tabWidth),
                    keyEnd: $83c796b2b9543406$var$posToLineColumn(input, node.to, tabWidth)
                });
            } else if (node.name === "Array") currentPath.push(0);
        },
        leave (node) {
            if (node.name === "Property" || node.name === "Array") currentPath.pop();
            else if (node.name === "ArrayValue") currentPath[currentPath.length - 1]++;
        }
    });
    return {
        data: data,
        pointers: Object.fromEntries(pointers)
    };
}
function $83c796b2b9543406$var$mapMerge(map, key, data) {
    let value = map.get(key);
    value = {
        ...value,
        ...data
    };
    map.set(key, value);
}
function $83c796b2b9543406$var$posToLineColumn(input, pos, tabWidth) {
    let line = $83c796b2b9543406$var$countNewLines(input, pos);
    let lineStart = input.lastIndexOf("\n", pos - 1) + 1;
    let column = $83c796b2b9543406$var$countColumn(input, lineStart, pos, tabWidth);
    return {
        line: line,
        column: column,
        pos: pos
    };
}
function $83c796b2b9543406$var$countNewLines(str, end) {
    let count = 0;
    for(let i = 0; i < end; i++)if (str[i] === "\n") count++;
    return count;
}
function $83c796b2b9543406$var$countColumn(str, start, end, tabWidth) {
    let count = 0;
    for(let i = start; i < end; i++)count += str[i] === "	" ? tabWidth : 1;
    return count;
}
const $83c796b2b9543406$var$ESCAPE_REGEX = /[~/]/g;
function $83c796b2b9543406$var$toJsonPointer(path) {
    let str = "";
    for (let e of path)if (typeof e === "string") str += e.replace($83c796b2b9543406$var$ESCAPE_REGEX, (v)=>v === "~" ? "~0" : "~1") + "/";
    else str += String(e) + "/";
    return str.slice(0, -1);
}

},{"32e083962c5beec2":"6NJEQ","b903550402c07972":"lbQRg","f3a7f9ed834169da":"6BaXg"}],"6NJEQ":[function(require,module,exports) {
/**
The default maximum length of a `TreeBuffer` node.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultBufferLength", ()=>DefaultBufferLength);
parcelHelpers.export(exports, "IterMode", ()=>IterMode);
parcelHelpers.export(exports, "MountedTree", ()=>MountedTree);
parcelHelpers.export(exports, "NodeProp", ()=>NodeProp);
parcelHelpers.export(exports, "NodeSet", ()=>NodeSet);
parcelHelpers.export(exports, "NodeType", ()=>NodeType);
parcelHelpers.export(exports, "NodeWeakMap", ()=>NodeWeakMap);
parcelHelpers.export(exports, "Parser", ()=>Parser);
parcelHelpers.export(exports, "Tree", ()=>Tree);
parcelHelpers.export(exports, "TreeBuffer", ()=>TreeBuffer);
parcelHelpers.export(exports, "TreeCursor", ()=>TreeCursor);
parcelHelpers.export(exports, "TreeFragment", ()=>TreeFragment);
parcelHelpers.export(exports, "parseMixed", ()=>parseMixed);
const DefaultBufferLength = 1024;
let nextPropID = 0;
class Range {
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
}
/**
Each [node type](#common.NodeType) or [individual tree](#common.Tree)
can have metadata associated with it in props. Instances of this
class represent prop names.
*/ class NodeProp {
    /**
    Create a new node prop type.
    */ constructor(config = {}){
        this.id = nextPropID++;
        this.perNode = !!config.perNode;
        this.deserialize = config.deserialize || (()=>{
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    /**
    This is meant to be used with
    [`NodeSet.extend`](#common.NodeSet.extend) or
    [`LRParser.configure`](#lr.ParserConfig.props) to compute
    prop values for each node type in the set. Takes a [match
    object](#common.NodeType^match) or function that returns undefined
    if the node type doesn't get this prop, and the prop's value if
    it does.
    */ add(match) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        if (typeof match != "function") match = NodeType.match(match);
        return (type)=>{
            let result = match(type);
            return result === undefined ? null : [
                this,
                result
            ];
        };
    }
}
/**
Prop that is used to describe matching delimiters. For opening
delimiters, this holds an array of node names (written as a
space-separated string when declaring this prop in a grammar)
for the node types of closing delimiters that match it.
*/ NodeProp.closedBy = new NodeProp({
    deserialize: (str)=>str.split(" ")
});
/**
The inverse of [`closedBy`](#common.NodeProp^closedBy). This is
attached to closing delimiters, holding an array of node names
of types of matching opening delimiters.
*/ NodeProp.openedBy = new NodeProp({
    deserialize: (str)=>str.split(" ")
});
/**
Used to assign node types to groups (for example, all node
types that represent an expression could be tagged with an
`"Expression"` group).
*/ NodeProp.group = new NodeProp({
    deserialize: (str)=>str.split(" ")
});
/**
Attached to nodes to indicate these should be
[displayed](https://codemirror.net/docs/ref/#language.syntaxTree)
in a bidirectional text isolate, so that direction-neutral
characters on their sides don't incorrectly get associated with
surrounding text. You'll generally want to set this for nodes
that contain arbitrary text, like strings and comments, and for
nodes that appear _inside_ arbitrary text, like HTML tags. When
not given a value, in a grammar declaration, defaults to
`"auto"`.
*/ NodeProp.isolate = new NodeProp({
    deserialize: (value)=>{
        if (value && value != "rtl" && value != "ltr" && value != "auto") throw new RangeError("Invalid value for isolate: " + value);
        return value || "auto";
    }
});
/**
The hash of the [context](#lr.ContextTracker.constructor)
that the node was parsed in, if any. Used to limit reuse of
contextual nodes.
*/ NodeProp.contextHash = new NodeProp({
    perNode: true
});
/**
The distance beyond the end of the node that the tokenizer
looked ahead for any of the tokens inside the node. (The LR
parser only stores this when it is larger than 25, for
efficiency reasons.)
*/ NodeProp.lookAhead = new NodeProp({
    perNode: true
});
/**
This per-node prop is used to replace a given node, or part of a
node, with another tree. This is useful to include trees from
different languages in mixed-language parsers.
*/ NodeProp.mounted = new NodeProp({
    perNode: true
});
/**
A mounted tree, which can be [stored](#common.NodeProp^mounted) on
a tree node to indicate that parts of its content are
represented by another tree.
*/ class MountedTree {
    constructor(/**
    The inner tree.
    */ tree, /**
    If this is null, this tree replaces the entire node (it will
    be included in the regular iteration instead of its host
    node). If not, only the given ranges are considered to be
    covered by this tree. This is used for trees that are mixed in
    a way that isn't strictly hierarchical. Such mounted trees are
    only entered by [`resolveInner`](#common.Tree.resolveInner)
    and [`enter`](#common.SyntaxNode.enter).
    */ overlay, /**
    The parser used to create this subtree.
    */ parser){
        this.tree = tree;
        this.overlay = overlay;
        this.parser = parser;
    }
    /**
    @internal
    */ static get(tree) {
        return tree && tree.props && tree.props[NodeProp.mounted.id];
    }
}
const noProps = Object.create(null);
/**
Each node in a syntax tree has a node type associated with it.
*/ class NodeType {
    /**
    @internal
    */ constructor(/**
    The name of the node type. Not necessarily unique, but if the
    grammar was written properly, different node types with the
    same name within a node set should play the same semantic
    role.
    */ name, /**
    @internal
    */ props, /**
    The id of this node in its set. Corresponds to the term ids
    used in the parser.
    */ id, /**
    @internal
    */ flags = 0){
        this.name = name;
        this.props = props;
        this.id = id;
        this.flags = flags;
    }
    /**
    Define a node type.
    */ static define(spec) {
        let props = spec.props && spec.props.length ? Object.create(null) : noProps;
        let flags = (spec.top ? 1 /* NodeFlag.Top */  : 0) | (spec.skipped ? 2 /* NodeFlag.Skipped */  : 0) | (spec.error ? 4 /* NodeFlag.Error */  : 0) | (spec.name == null ? 8 /* NodeFlag.Anonymous */  : 0);
        let type = new NodeType(spec.name || "", props, spec.id, flags);
        if (spec.props) for (let src of spec.props){
            if (!Array.isArray(src)) src = src(type);
            if (src) {
                if (src[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                props[src[0].id] = src[1];
            }
        }
        return type;
    }
    /**
    Retrieves a node prop for this type. Will return `undefined` if
    the prop isn't present on this node.
    */ prop(prop) {
        return this.props[prop.id];
    }
    /**
    True when this is the top node of a grammar.
    */ get isTop() {
        return (this.flags & 1 /* NodeFlag.Top */ ) > 0;
    }
    /**
    True when this node is produced by a skip rule.
    */ get isSkipped() {
        return (this.flags & 2 /* NodeFlag.Skipped */ ) > 0;
    }
    /**
    Indicates whether this is an error node.
    */ get isError() {
        return (this.flags & 4 /* NodeFlag.Error */ ) > 0;
    }
    /**
    When true, this node type doesn't correspond to a user-declared
    named node, for example because it is used to cache repetition.
    */ get isAnonymous() {
        return (this.flags & 8 /* NodeFlag.Anonymous */ ) > 0;
    }
    /**
    Returns true when this node's name or one of its
    [groups](#common.NodeProp^group) matches the given string.
    */ is(name) {
        if (typeof name == "string") {
            if (this.name == name) return true;
            let group = this.prop(NodeProp.group);
            return group ? group.indexOf(name) > -1 : false;
        }
        return this.id == name;
    }
    /**
    Create a function from node types to arbitrary values by
    specifying an object whose property names are node or
    [group](#common.NodeProp^group) names. Often useful with
    [`NodeProp.add`](#common.NodeProp.add). You can put multiple
    names, separated by spaces, in a single property name to map
    multiple node names to a single value.
    */ static match(map) {
        let direct = Object.create(null);
        for(let prop in map)for (let name of prop.split(" "))direct[name] = map[prop];
        return (node)=>{
            for(let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++){
                let found = direct[i < 0 ? node.name : groups[i]];
                if (found) return found;
            }
        };
    }
}
/**
An empty dummy node type to use when no actual type is available.
*/ NodeType.none = new NodeType("", Object.create(null), 0, 8 /* NodeFlag.Anonymous */ );
/**
A node set holds a collection of node types. It is used to
compactly represent trees by storing their type ids, rather than a
full pointer to the type object, in a numeric array. Each parser
[has](#lr.LRParser.nodeSet) a node set, and [tree
buffers](#common.TreeBuffer) can only store collections of nodes
from the same set. A set can have a maximum of 2**16 (65536) node
types in it, so that the ids fit into 16-bit typed array slots.
*/ class NodeSet {
    /**
    Create a set with the given types. The `id` property of each
    type should correspond to its position within the array.
    */ constructor(/**
    The node types in this set, by id.
    */ types){
        this.types = types;
        for(let i = 0; i < types.length; i++)if (types[i].id != i) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    /**
    Create a copy of this set with some node properties added. The
    arguments to this method can be created with
    [`NodeProp.add`](#common.NodeProp.add).
    */ extend(...props) {
        let newTypes = [];
        for (let type of this.types){
            let newProps = null;
            for (let source of props){
                let add = source(type);
                if (add) {
                    if (!newProps) newProps = Object.assign({}, type.props);
                    newProps[add[0].id] = add[1];
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
        }
        return new NodeSet(newTypes);
    }
}
const CachedNode = new WeakMap(), CachedInnerNode = new WeakMap();
/**
Options that control iteration. Can be combined with the `|`
operator to enable multiple ones.
*/ var IterMode;
(function(IterMode) {
    /**
    When enabled, iteration will only visit [`Tree`](#common.Tree)
    objects, not nodes packed into
    [`TreeBuffer`](#common.TreeBuffer)s.
    */ IterMode[IterMode["ExcludeBuffers"] = 1] = "ExcludeBuffers";
    /**
    Enable this to make iteration include anonymous nodes (such as
    the nodes that wrap repeated grammar constructs into a balanced
    tree).
    */ IterMode[IterMode["IncludeAnonymous"] = 2] = "IncludeAnonymous";
    /**
    By default, regular [mounted](#common.NodeProp^mounted) nodes
    replace their base node in iteration. Enable this to ignore them
    instead.
    */ IterMode[IterMode["IgnoreMounts"] = 4] = "IgnoreMounts";
    /**
    This option only applies in
    [`enter`](#common.SyntaxNode.enter)-style methods. It tells the
    library to not enter mounted overlays if one covers the given
    position.
    */ IterMode[IterMode["IgnoreOverlays"] = 8] = "IgnoreOverlays";
})(IterMode || (IterMode = {}));
/**
A piece of syntax tree. There are two ways to approach these
trees: the way they are actually stored in memory, and the
convenient way.

Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
objects. By packing detail information into `TreeBuffer` leaf
nodes, the representation is made a lot more memory-efficient.

However, when you want to actually work with tree nodes, this
representation is very awkward, so most client code will want to
use the [`TreeCursor`](#common.TreeCursor) or
[`SyntaxNode`](#common.SyntaxNode) interface instead, which provides
a view on some part of this data structure, and can be used to
move around to adjacent nodes.
*/ class Tree {
    /**
    Construct a new tree. See also [`Tree.build`](#common.Tree^build).
    */ constructor(/**
    The type of the top node.
    */ type, /**
    This node's child nodes.
    */ children, /**
    The positions (offsets relative to the start of this tree) of
    the children.
    */ positions, /**
    The total length of this tree
    */ length, /**
    Per-node [node props](#common.NodeProp) to associate with this node.
    */ props){
        this.type = type;
        this.children = children;
        this.positions = positions;
        this.length = length;
        /**
        @internal
        */ this.props = null;
        if (props && props.length) {
            this.props = Object.create(null);
            for (let [prop, value] of props)this.props[typeof prop == "number" ? prop : prop.id] = value;
        }
    }
    /**
    @internal
    */ toString() {
        let mounted = MountedTree.get(this);
        if (mounted && !mounted.overlay) return mounted.tree.toString();
        let children = "";
        for (let ch of this.children){
            let str = ch.toString();
            if (str) {
                if (children) children += ",";
                children += str;
            }
        }
        return !this.type.name ? children : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (children.length ? "(" + children + ")" : "");
    }
    /**
    Get a [tree cursor](#common.TreeCursor) positioned at the top of
    the tree. Mode can be used to [control](#common.IterMode) which
    nodes the cursor visits.
    */ cursor(mode = 0) {
        return new TreeCursor(this.topNode, mode);
    }
    /**
    Get a [tree cursor](#common.TreeCursor) pointing into this tree
    at the given position and side (see
    [`moveTo`](#common.TreeCursor.moveTo).
    */ cursorAt(pos, side = 0, mode = 0) {
        let scope = CachedNode.get(this) || this.topNode;
        let cursor = new TreeCursor(scope);
        cursor.moveTo(pos, side);
        CachedNode.set(this, cursor._tree);
        return cursor;
    }
    /**
    Get a [syntax node](#common.SyntaxNode) object for the top of the
    tree.
    */ get topNode() {
        return new TreeNode(this, 0, 0, null);
    }
    /**
    Get the [syntax node](#common.SyntaxNode) at the given position.
    If `side` is -1, this will move into nodes that end at the
    position. If 1, it'll move into nodes that start at the
    position. With 0, it'll only enter nodes that cover the position
    from both sides.
    
    Note that this will not enter
    [overlays](#common.MountedTree.overlay), and you often want
    [`resolveInner`](#common.Tree.resolveInner) instead.
    */ resolve(pos, side = 0) {
        let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
        CachedNode.set(this, node);
        return node;
    }
    /**
    Like [`resolve`](#common.Tree.resolve), but will enter
    [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
    pointing into the innermost overlaid tree at the given position
    (with parent links going through all parent structure, including
    the host trees).
    */ resolveInner(pos, side = 0) {
        let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
        CachedInnerNode.set(this, node);
        return node;
    }
    /**
    In some situations, it can be useful to iterate through all
    nodes around a position, including those in overlays that don't
    directly cover the position. This method gives you an iterator
    that will produce all nodes, from small to big, around the given
    position.
    */ resolveStack(pos, side = 0) {
        return stackIterator(this, pos, side);
    }
    /**
    Iterate over the tree and its children, calling `enter` for any
    node that touches the `from`/`to` region (if given) before
    running over such a node's children, and `leave` (if given) when
    leaving the node. When `enter` returns `false`, that node will
    not have its children iterated over (or `leave` called).
    */ iterate(spec) {
        let { enter, leave, from = 0, to = this.length } = spec;
        let mode = spec.mode || 0, anon = (mode & IterMode.IncludeAnonymous) > 0;
        for(let c = this.cursor(mode | IterMode.IncludeAnonymous);;){
            let entered = false;
            if (c.from <= to && c.to >= from && (!anon && c.type.isAnonymous || enter(c) !== false)) {
                if (c.firstChild()) continue;
                entered = true;
            }
            for(;;){
                if (entered && leave && (anon || !c.type.isAnonymous)) leave(c);
                if (c.nextSibling()) break;
                if (!c.parent()) return;
                entered = true;
            }
        }
    }
    /**
    Get the value of the given [node prop](#common.NodeProp) for this
    node. Works with both per-node and per-type props.
    */ prop(prop) {
        return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : undefined;
    }
    /**
    Returns the node's [per-node props](#common.NodeProp.perNode) in a
    format that can be passed to the [`Tree`](#common.Tree)
    constructor.
    */ get propValues() {
        let result = [];
        if (this.props) for(let id in this.props)result.push([
            +id,
            this.props[id]
        ]);
        return result;
    }
    /**
    Balance the direct children of this tree, producing a copy of
    which may have children grouped into subtrees with type
    [`NodeType.none`](#common.NodeType^none).
    */ balance(config = {}) {
        return this.children.length <= 8 /* Balance.BranchFactor */  ? this : balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length)=>new Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length)=>new Tree(NodeType.none, children, positions, length)));
    }
    /**
    Build a tree from a postfix-ordered buffer of node information,
    or a cursor over such a buffer.
    */ static build(data) {
        return buildTree(data);
    }
}
/**
The empty tree
*/ Tree.empty = new Tree(NodeType.none, [], [], 0);
class FlatBufferCursor {
    constructor(buffer, index){
        this.buffer = buffer;
        this.index = index;
    }
    get id() {
        return this.buffer[this.index - 4];
    }
    get start() {
        return this.buffer[this.index - 3];
    }
    get end() {
        return this.buffer[this.index - 2];
    }
    get size() {
        return this.buffer[this.index - 1];
    }
    get pos() {
        return this.index;
    }
    next() {
        this.index -= 4;
    }
    fork() {
        return new FlatBufferCursor(this.buffer, this.index);
    }
}
/**
Tree buffers contain (type, start, end, endIndex) quads for each
node. In such a buffer, nodes are stored in prefix order (parents
before children, with the endIndex of the parent indicating which
children belong to it).
*/ class TreeBuffer {
    /**
    Create a tree buffer.
    */ constructor(/**
    The buffer's content.
    */ buffer, /**
    The total length of the group of nodes in the buffer.
    */ length, /**
    The node set used in this buffer.
    */ set){
        this.buffer = buffer;
        this.length = length;
        this.set = set;
    }
    /**
    @internal
    */ get type() {
        return NodeType.none;
    }
    /**
    @internal
    */ toString() {
        let result = [];
        for(let index = 0; index < this.buffer.length;){
            result.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result.join(",");
    }
    /**
    @internal
    */ childString(index) {
        let id = this.buffer[index], endIndex = this.buffer[index + 3];
        let type = this.set.types[id], result = type.name;
        if (/\W/.test(result) && !type.isError) result = JSON.stringify(result);
        index += 4;
        if (endIndex == index) return result;
        let children = [];
        while(index < endIndex){
            children.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result + "(" + children.join(",") + ")";
    }
    /**
    @internal
    */ findChild(startIndex, endIndex, dir, pos, side) {
        let { buffer } = this, pick = -1;
        for(let i = startIndex; i != endIndex; i = buffer[i + 3])if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {
            pick = i;
            if (dir > 0) break;
        }
        return pick;
    }
    /**
    @internal
    */ slice(startI, endI, from) {
        let b = this.buffer;
        let copy = new Uint16Array(endI - startI), len = 0;
        for(let i = startI, j = 0; i < endI;){
            copy[j++] = b[i++];
            copy[j++] = b[i++] - from;
            let to = copy[j++] = b[i++] - from;
            copy[j++] = b[i++] - startI;
            len = Math.max(len, to);
        }
        return new TreeBuffer(copy, len, this.set);
    }
}
function checkSide(side, pos, from, to) {
    switch(side){
        case -2 /* Side.Before */ :
            return from < pos;
        case -1 /* Side.AtOrBefore */ :
            return to >= pos && from < pos;
        case 0 /* Side.Around */ :
            return from < pos && to > pos;
        case 1 /* Side.AtOrAfter */ :
            return from <= pos && to > pos;
        case 2 /* Side.After */ :
            return to > pos;
        case 4 /* Side.DontCare */ :
            return true;
    }
}
function resolveNode(node, pos, side, overlays) {
    var _a;
    // Move up to a node that actually holds the position, if possible
    while(node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)){
        let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
        if (!parent) return node;
        node = parent;
    }
    let mode = overlays ? 0 : IterMode.IgnoreOverlays;
    // Must go up out of overlays when those do not overlap with pos
    if (overlays) {
        for(let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent)if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode)) === null || _a === void 0 ? void 0 : _a.from) != scan.from) node = parent;
    }
    for(;;){
        let inner = node.enter(pos, side, mode);
        if (!inner) return node;
        node = inner;
    }
}
class BaseNode {
    cursor(mode = 0) {
        return new TreeCursor(this, mode);
    }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
    resolve(pos, side = 0) {
        return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
        return resolveNode(this, pos, side, true);
    }
    matchContext(context) {
        return matchNodeContext(this, context);
    }
    enterUnfinishedNodesBefore(pos) {
        let scan = this.childBefore(pos), node = this;
        while(scan){
            let last = scan.lastChild;
            if (!last || last.to != scan.to) break;
            if (last.type.isError && last.from == last.to) {
                node = scan;
                scan = last.prevSibling;
            } else scan = last;
        }
        return node;
    }
    get node() {
        return this;
    }
    get next() {
        return this.parent;
    }
}
class TreeNode extends BaseNode {
    constructor(_tree, from, // Index in parent node, set to -1 if the node is not a direct child of _parent.node (overlay)
    index, _parent){
        super();
        this._tree = _tree;
        this.from = from;
        this.index = index;
        this._parent = _parent;
    }
    get type() {
        return this._tree.type;
    }
    get name() {
        return this._tree.type.name;
    }
    get to() {
        return this.from + this._tree.length;
    }
    nextChild(i, dir, pos, side, mode = 0) {
        for(let parent = this;;){
            for(let { children, positions } = parent._tree, e = dir > 0 ? children.length : -1; i != e; i += dir){
                let next = children[i], start = positions[i] + parent.from;
                if (!checkSide(side, pos, start, start + next.length)) continue;
                if (next instanceof TreeBuffer) {
                    if (mode & IterMode.ExcludeBuffers) continue;
                    let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
                    if (index > -1) return new BufferNode(new BufferContext(parent, next, i, start), null, index);
                } else if (mode & IterMode.IncludeAnonymous || !next.type.isAnonymous || hasChild(next)) {
                    let mounted;
                    if (!(mode & IterMode.IgnoreMounts) && (mounted = MountedTree.get(next)) && !mounted.overlay) return new TreeNode(mounted.tree, start, i, parent);
                    let inner = new TreeNode(next, start, i, parent);
                    return mode & IterMode.IncludeAnonymous || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
                }
            }
            if (mode & IterMode.IncludeAnonymous || !parent.type.isAnonymous) return null;
            if (parent.index >= 0) i = parent.index + dir;
            else i = dir < 0 ? -1 : parent._parent._tree.children.length;
            parent = parent._parent;
            if (!parent) return null;
        }
    }
    get firstChild() {
        return this.nextChild(0, 1, 0, 4 /* Side.DontCare */ );
    }
    get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4 /* Side.DontCare */ );
    }
    childAfter(pos) {
        return this.nextChild(0, 1, pos, 2 /* Side.After */ );
    }
    childBefore(pos) {
        return this.nextChild(this._tree.children.length - 1, -1, pos, -2 /* Side.Before */ );
    }
    enter(pos, side, mode = 0) {
        let mounted;
        if (!(mode & IterMode.IgnoreOverlays) && (mounted = MountedTree.get(this._tree)) && mounted.overlay) {
            let rPos = pos - this.from;
            for (let { from, to } of mounted.overlay){
                if ((side > 0 ? from <= rPos : from < rPos) && (side < 0 ? to >= rPos : to > rPos)) return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
            }
        }
        return this.nextChild(0, 1, pos, side, mode);
    }
    nextSignificantParent() {
        let val = this;
        while(val.type.isAnonymous && val._parent)val = val._parent;
        return val;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4 /* Side.DontCare */ ) : null;
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4 /* Side.DontCare */ ) : null;
    }
    get tree() {
        return this._tree;
    }
    toTree() {
        return this._tree;
    }
    /**
    @internal
    */ toString() {
        return this._tree.toString();
    }
}
function getChildren(node, type, before, after) {
    let cur = node.cursor(), result = [];
    if (!cur.firstChild()) return result;
    if (before != null) for(let found = false; !found;){
        found = cur.type.is(before);
        if (!cur.nextSibling()) return result;
    }
    for(;;){
        if (after != null && cur.type.is(after)) return result;
        if (cur.type.is(type)) result.push(cur.node);
        if (!cur.nextSibling()) return after == null ? result : [];
    }
}
function matchNodeContext(node, context, i = context.length - 1) {
    for(let p = node.parent; i >= 0; p = p.parent){
        if (!p) return false;
        if (!p.type.isAnonymous) {
            if (context[i] && context[i] != p.name) return false;
            i--;
        }
    }
    return true;
}
class BufferContext {
    constructor(parent, buffer, index, start){
        this.parent = parent;
        this.buffer = buffer;
        this.index = index;
        this.start = start;
    }
}
class BufferNode extends BaseNode {
    get name() {
        return this.type.name;
    }
    get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    constructor(context, _parent, index){
        super();
        this.context = context;
        this._parent = _parent;
        this.index = index;
        this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    child(dir, pos, side) {
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get firstChild() {
        return this.child(1, 0, 4 /* Side.DontCare */ );
    }
    get lastChild() {
        return this.child(-1, 0, 4 /* Side.DontCare */ );
    }
    childAfter(pos) {
        return this.child(1, pos, 2 /* Side.After */ );
    }
    childBefore(pos) {
        return this.child(-1, pos, -2 /* Side.Before */ );
    }
    enter(pos, side, mode = 0) {
        if (mode & IterMode.ExcludeBuffers) return null;
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, 0, 4 /* Side.DontCare */ );
    }
    get nextSibling() {
        let { buffer } = this.context;
        let after = buffer.buffer[this.index + 3];
        if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length)) return new BufferNode(this.context, this._parent, after);
        return this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer } = this.context;
        let parentStart = this._parent ? this._parent.index + 4 : 0;
        if (this.index == parentStart) return this.externalSibling(-1);
        return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, 0, 4 /* Side.DontCare */ ));
    }
    get tree() {
        return null;
    }
    toTree() {
        let children = [], positions = [];
        let { buffer } = this.context;
        let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
        if (endI > startI) {
            let from = buffer.buffer[this.index + 1];
            children.push(buffer.slice(startI, endI, from));
            positions.push(0);
        }
        return new Tree(this.type, children, positions, this.to - this.from);
    }
    /**
    @internal
    */ toString() {
        return this.context.buffer.childString(this.index);
    }
}
function iterStack(heads) {
    if (!heads.length) return null;
    let pick = 0, picked = heads[0];
    for(let i = 1; i < heads.length; i++){
        let node = heads[i];
        if (node.from > picked.from || node.to < picked.to) {
            picked = node;
            pick = i;
        }
    }
    let next = picked instanceof TreeNode && picked.index < 0 ? null : picked.parent;
    let newHeads = heads.slice();
    if (next) newHeads[pick] = next;
    else newHeads.splice(pick, 1);
    return new StackIterator(newHeads, picked);
}
class StackIterator {
    constructor(heads, node){
        this.heads = heads;
        this.node = node;
    }
    get next() {
        return iterStack(this.heads);
    }
}
function stackIterator(tree, pos, side) {
    let inner = tree.resolveInner(pos, side), layers = null;
    for(let scan = inner instanceof TreeNode ? inner : inner.context.parent; scan; scan = scan.parent)if (scan.index < 0) {
        let parent = scan.parent;
        (layers || (layers = [
            inner
        ])).push(parent.resolve(pos, side));
        scan = parent;
    } else {
        let mount = MountedTree.get(scan.tree);
        // Relevant overlay branching off
        if (mount && mount.overlay && mount.overlay[0].from <= pos && mount.overlay[mount.overlay.length - 1].to >= pos) {
            let root = new TreeNode(mount.tree, mount.overlay[0].from + scan.from, -1, scan);
            (layers || (layers = [
                inner
            ])).push(resolveNode(root, pos, side, false));
        }
    }
    return layers ? iterStack(layers) : inner;
}
/**
A tree cursor object focuses on a given node in a syntax tree, and
allows you to move to adjacent nodes.
*/ class TreeCursor {
    /**
    Shorthand for `.type.name`.
    */ get name() {
        return this.type.name;
    }
    /**
    @internal
    */ constructor(node, /**
    @internal
    */ mode = 0){
        this.mode = mode;
        /**
        @internal
        */ this.buffer = null;
        this.stack = [];
        /**
        @internal
        */ this.index = 0;
        this.bufferNode = null;
        if (node instanceof TreeNode) this.yieldNode(node);
        else {
            this._tree = node.context.parent;
            this.buffer = node.context;
            for(let n = node._parent; n; n = n._parent)this.stack.unshift(n.index);
            this.bufferNode = node;
            this.yieldBuf(node.index);
        }
    }
    yieldNode(node) {
        if (!node) return false;
        this._tree = node;
        this.type = node.type;
        this.from = node.from;
        this.to = node.to;
        return true;
    }
    yieldBuf(index, type) {
        this.index = index;
        let { start, buffer } = this.buffer;
        this.type = type || buffer.set.types[buffer.buffer[index]];
        this.from = start + buffer.buffer[index + 1];
        this.to = start + buffer.buffer[index + 2];
        return true;
    }
    /**
    @internal
    */ yield(node) {
        if (!node) return false;
        if (node instanceof TreeNode) {
            this.buffer = null;
            return this.yieldNode(node);
        }
        this.buffer = node.context;
        return this.yieldBuf(node.index, node.type);
    }
    /**
    @internal
    */ toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    /**
    @internal
    */ enterChild(dir, pos, side) {
        if (!this.buffer) return this.yield(this._tree.nextChild(dir < 0 ? this._tree._tree.children.length - 1 : 0, dir, pos, side, this.mode));
        let { buffer } = this.buffer;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
        if (index < 0) return false;
        this.stack.push(this.index);
        return this.yieldBuf(index);
    }
    /**
    Move the cursor to this node's first child. When this returns
    false, the node has no child, and the cursor has not been moved.
    */ firstChild() {
        return this.enterChild(1, 0, 4 /* Side.DontCare */ );
    }
    /**
    Move the cursor to this node's last child.
    */ lastChild() {
        return this.enterChild(-1, 0, 4 /* Side.DontCare */ );
    }
    /**
    Move the cursor to the first child that ends after `pos`.
    */ childAfter(pos) {
        return this.enterChild(1, pos, 2 /* Side.After */ );
    }
    /**
    Move to the last child that starts before `pos`.
    */ childBefore(pos) {
        return this.enterChild(-1, pos, -2 /* Side.Before */ );
    }
    /**
    Move the cursor to the child around `pos`. If side is -1 the
    child may end at that position, when 1 it may start there. This
    will also enter [overlaid](#common.MountedTree.overlay)
    [mounted](#common.NodeProp^mounted) trees unless `overlays` is
    set to false.
    */ enter(pos, side, mode = this.mode) {
        if (!this.buffer) return this.yield(this._tree.enter(pos, side, mode));
        return mode & IterMode.ExcludeBuffers ? false : this.enterChild(1, pos, side);
    }
    /**
    Move to the node's parent node, if this isn't the top node.
    */ parent() {
        if (!this.buffer) return this.yieldNode(this.mode & IterMode.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let parent = this.mode & IterMode.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        this.buffer = null;
        return this.yieldNode(parent);
    }
    /**
    @internal
    */ sibling(dir) {
        if (!this.buffer) return !this._tree._parent ? false : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4 /* Side.DontCare */ , this.mode));
        let { buffer } = this.buffer, d = this.stack.length - 1;
        if (dir < 0) {
            let parentStart = d < 0 ? 0 : this.stack[d] + 4;
            if (this.index != parentStart) return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4 /* Side.DontCare */ ));
        } else {
            let after = buffer.buffer[this.index + 3];
            if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3])) return this.yieldBuf(after);
        }
        return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4 /* Side.DontCare */ , this.mode)) : false;
    }
    /**
    Move to this node's next sibling, if any.
    */ nextSibling() {
        return this.sibling(1);
    }
    /**
    Move to this node's previous sibling, if any.
    */ prevSibling() {
        return this.sibling(-1);
    }
    atLastNode(dir) {
        let index, parent, { buffer } = this;
        if (buffer) {
            if (dir > 0) {
                if (this.index < buffer.buffer.buffer.length) return false;
            } else {
                for(let i = 0; i < this.index; i++)if (buffer.buffer.buffer[i + 3] < this.index) return false;
            }
            ({ index, parent } = buffer);
        } else ({ index, _parent: parent } = this._tree);
        for(; parent; { index, _parent: parent } = parent){
            if (index > -1) for(let i = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i != e; i += dir){
                let child = parent._tree.children[i];
                if (this.mode & IterMode.IncludeAnonymous || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child)) return false;
            }
        }
        return true;
    }
    move(dir, enter) {
        if (enter && this.enterChild(dir, 0, 4 /* Side.DontCare */ )) return true;
        for(;;){
            if (this.sibling(dir)) return true;
            if (this.atLastNode(dir) || !this.parent()) return false;
        }
    }
    /**
    Move to the next node in a
    [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
    traversal, going from a node to its first child or, if the
    current node is empty or `enter` is false, its next sibling or
    the next sibling of the first parent node that has one.
    */ next(enter = true) {
        return this.move(1, enter);
    }
    /**
    Move to the next node in a last-to-first pre-order traveral. A
    node is followed by its last child or, if it has none, its
    previous sibling or the previous sibling of the first parent
    node that has one.
    */ prev(enter = true) {
        return this.move(-1, enter);
    }
    /**
    Move the cursor to the innermost node that covers `pos`. If
    `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    it will enter nodes that start at `pos`.
    */ moveTo(pos, side = 0) {
        // Move up to a node that actually holds the position, if possible
        while(this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos))if (!this.parent()) break;
        // Then scan down into child nodes as far as possible
        while(this.enterChild(1, pos, side));
        return this;
    }
    /**
    Get a [syntax node](#common.SyntaxNode) at the cursor's current
    position.
    */ get node() {
        if (!this.buffer) return this._tree;
        let cache = this.bufferNode, result = null, depth = 0;
        if (cache && cache.context == this.buffer) scan: for(let index = this.index, d = this.stack.length; d >= 0;){
            for(let c = cache; c; c = c._parent)if (c.index == index) {
                if (index == this.index) return c;
                result = c;
                depth = d + 1;
                break scan;
            }
            index = this.stack[--d];
        }
        for(let i = depth; i < this.stack.length; i++)result = new BufferNode(this.buffer, result, this.stack[i]);
        return this.bufferNode = new BufferNode(this.buffer, result, this.index);
    }
    /**
    Get the [tree](#common.Tree) that represents the current node, if
    any. Will return null when the node is in a [tree
    buffer](#common.TreeBuffer).
    */ get tree() {
        return this.buffer ? null : this._tree._tree;
    }
    /**
    Iterate over the current node and all its descendants, calling
    `enter` when entering a node and `leave`, if given, when leaving
    one. When `enter` returns `false`, any children of that node are
    skipped, and `leave` isn't called for it.
    */ iterate(enter, leave) {
        for(let depth = 0;;){
            let mustLeave = false;
            if (this.type.isAnonymous || enter(this) !== false) {
                if (this.firstChild()) {
                    depth++;
                    continue;
                }
                if (!this.type.isAnonymous) mustLeave = true;
            }
            for(;;){
                if (mustLeave && leave) leave(this);
                mustLeave = this.type.isAnonymous;
                if (this.nextSibling()) break;
                if (!depth) return;
                this.parent();
                depth--;
                mustLeave = true;
            }
        }
    }
    /**
    Test whether the current node matches a given context—a sequence
    of direct parent node names. Empty strings in the context array
    are treated as wildcards.
    */ matchContext(context) {
        if (!this.buffer) return matchNodeContext(this.node, context);
        let { buffer } = this.buffer, { types } = buffer.set;
        for(let i = context.length - 1, d = this.stack.length - 1; i >= 0; d--){
            if (d < 0) return matchNodeContext(this.node, context, i);
            let type = types[buffer.buffer[this.stack[d]]];
            if (!type.isAnonymous) {
                if (context[i] && context[i] != type.name) return false;
                i--;
            }
        }
        return true;
    }
}
function hasChild(tree) {
    return tree.children.some((ch)=>ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
}
function buildTree(data) {
    var _a;
    let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types = nodeSet.types;
    let contextHash = 0, lookAhead = 0;
    function takeNode(parentStart, minPos, children, positions, inRepeat, depth) {
        let { id, start, end, size } = cursor;
        let lookAheadAtStart = lookAhead;
        while(size < 0){
            cursor.next();
            if (size == -1 /* SpecialRecord.Reuse */ ) {
                let node = reused[id];
                children.push(node);
                positions.push(start - parentStart);
                return;
            } else if (size == -3 /* SpecialRecord.ContextChange */ ) {
                contextHash = id;
                return;
            } else if (size == -4 /* SpecialRecord.LookAhead */ ) {
                lookAhead = id;
                return;
            } else throw new RangeError(`Unrecognized record size: ${size}`);
        }
        let type = types[id], node, buffer;
        let startPos = start - parentStart;
        if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos, inRepeat))) {
            // Small enough for a buffer, and no reused nodes inside
            let data = new Uint16Array(buffer.size - buffer.skip);
            let endPos = cursor.pos - buffer.size, index = data.length;
            while(cursor.pos > endPos)index = copyToBuffer(buffer.start, data, index);
            node = new TreeBuffer(data, end - buffer.start, nodeSet);
            startPos = buffer.start - parentStart;
        } else {
            let endPos = cursor.pos - size;
            cursor.next();
            let localChildren = [], localPositions = [];
            let localInRepeat = id >= minRepeatType ? id : -1;
            let lastGroup = 0, lastEnd = end;
            while(cursor.pos > endPos){
                if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
                    if (cursor.end <= lastEnd - maxBufferLength) {
                        makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
                        lastGroup = localChildren.length;
                        lastEnd = cursor.end;
                    }
                    cursor.next();
                } else if (depth > 2500 /* CutOff.Depth */ ) takeFlatNode(start, endPos, localChildren, localPositions);
                else takeNode(start, endPos, localChildren, localPositions, localInRepeat, depth + 1);
            }
            if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length) makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
            localChildren.reverse();
            localPositions.reverse();
            if (localInRepeat > -1 && lastGroup > 0) {
                let make = makeBalanced(type);
                node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
            } else node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
        }
        children.push(node);
        positions.push(startPos);
    }
    function takeFlatNode(parentStart, minPos, children, positions) {
        let nodes = []; // Temporary, inverted array of leaf nodes found, with absolute positions
        let nodeCount = 0, stopAt = -1;
        while(cursor.pos > minPos){
            let { id, start, end, size } = cursor;
            if (size > 4) cursor.next();
            else if (stopAt > -1 && start < stopAt) break;
            else {
                if (stopAt < 0) stopAt = end - maxBufferLength;
                nodes.push(id, start, end);
                nodeCount++;
                cursor.next();
            }
        }
        if (nodeCount) {
            let buffer = new Uint16Array(nodeCount * 4);
            let start = nodes[nodes.length - 2];
            for(let i = nodes.length - 3, j = 0; i >= 0; i -= 3){
                buffer[j++] = nodes[i];
                buffer[j++] = nodes[i + 1] - start;
                buffer[j++] = nodes[i + 2] - start;
                buffer[j++] = j;
            }
            children.push(new TreeBuffer(buffer, nodes[2] - start, nodeSet));
            positions.push(start - parentStart);
        }
    }
    function makeBalanced(type) {
        return (children, positions, length)=>{
            let lookAhead = 0, lastI = children.length - 1, last, lookAheadProp;
            if (lastI >= 0 && (last = children[lastI]) instanceof Tree) {
                if (!lastI && last.type == type && last.length == length) return last;
                if (lookAheadProp = last.prop(NodeProp.lookAhead)) lookAhead = positions[lastI] + last.length + lookAheadProp;
            }
            return makeTree(type, children, positions, length, lookAhead);
        };
    }
    function makeRepeatLeaf(children, positions, base, i, from, to, type, lookAhead) {
        let localChildren = [], localPositions = [];
        while(children.length > i){
            localChildren.push(children.pop());
            localPositions.push(positions.pop() + base - from);
        }
        children.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead - to));
        positions.push(from - base);
    }
    function makeTree(type, children, positions, length, lookAhead = 0, props) {
        if (contextHash) {
            let pair = [
                NodeProp.contextHash,
                contextHash
            ];
            props = props ? [
                pair
            ].concat(props) : [
                pair
            ];
        }
        if (lookAhead > 25) {
            let pair = [
                NodeProp.lookAhead,
                lookAhead
            ];
            props = props ? [
                pair
            ].concat(props) : [
                pair
            ];
        }
        return new Tree(type, children, positions, length, props);
    }
    function findBufferSize(maxSize, inRepeat) {
        // Scan through the buffer to find previous siblings that fit
        // together in a TreeBuffer, and don't contain any reused nodes
        // (which can't be stored in a buffer).
        // If `inRepeat` is > -1, ignore node boundaries of that type for
        // nesting, but make sure the end falls either at the start
        // (`maxSize`) or before such a node.
        let fork = cursor.fork();
        let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
        let result = {
            size: 0,
            start: 0,
            skip: 0
        };
        scan: for(let minPos = fork.pos - maxSize; fork.pos > minPos;){
            let nodeSize = fork.size;
            // Pretend nested repeat nodes of the same type don't exist
            if (fork.id == inRepeat && nodeSize >= 0) {
                // Except that we store the current state as a valid return
                // value.
                result.size = size;
                result.start = start;
                result.skip = skip;
                skip += 4;
                size += 4;
                fork.next();
                continue;
            }
            let startPos = fork.pos - nodeSize;
            if (nodeSize < 0 || startPos < minPos || fork.start < minStart) break;
            let localSkipped = fork.id >= minRepeatType ? 4 : 0;
            let nodeStart = fork.start;
            fork.next();
            while(fork.pos > startPos){
                if (fork.size < 0) {
                    if (fork.size == -3 /* SpecialRecord.ContextChange */ ) localSkipped += 4;
                    else break scan;
                } else if (fork.id >= minRepeatType) localSkipped += 4;
                fork.next();
            }
            start = nodeStart;
            size += nodeSize;
            skip += localSkipped;
        }
        if (inRepeat < 0 || size == maxSize) {
            result.size = size;
            result.start = start;
            result.skip = skip;
        }
        return result.size > 4 ? result : undefined;
    }
    function copyToBuffer(bufferStart, buffer, index) {
        let { id, start, end, size } = cursor;
        cursor.next();
        if (size >= 0 && id < minRepeatType) {
            let startIndex = index;
            if (size > 4) {
                let endPos = cursor.pos - (size - 4);
                while(cursor.pos > endPos)index = copyToBuffer(bufferStart, buffer, index);
            }
            buffer[--index] = startIndex;
            buffer[--index] = end - bufferStart;
            buffer[--index] = start - bufferStart;
            buffer[--index] = id;
        } else if (size == -3 /* SpecialRecord.ContextChange */ ) contextHash = id;
        else if (size == -4 /* SpecialRecord.LookAhead */ ) lookAhead = id;
        return index;
    }
    let children = [], positions = [];
    while(cursor.pos > 0)takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1, 0);
    let length = (_a = data.length) !== null && _a !== void 0 ? _a : children.length ? positions[0] + children[0].length : 0;
    return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
}
const nodeSizeCache = new WeakMap;
function nodeSize(balanceType, node) {
    if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType) return 1;
    let size = nodeSizeCache.get(node);
    if (size == null) {
        size = 1;
        for (let child of node.children){
            if (child.type != balanceType || !(child instanceof Tree)) {
                size = 1;
                break;
            }
            size += nodeSize(balanceType, child);
        }
        nodeSizeCache.set(node, size);
    }
    return size;
}
function balanceRange(// The type the balanced tree's inner nodes.
balanceType, // The direct children and their positions
children, positions, // The index range in children/positions to use
from, to, // The start position of the nodes, relative to their parent.
start, // Length of the outer node
length, // Function to build the top node of the balanced tree
mkTop, // Function to build internal nodes for the balanced tree
mkTree) {
    let total = 0;
    for(let i = from; i < to; i++)total += nodeSize(balanceType, children[i]);
    let maxChild = Math.ceil(total * 1.5 / 8 /* Balance.BranchFactor */ );
    let localChildren = [], localPositions = [];
    function divide(children, positions, from, to, offset) {
        for(let i = from; i < to;){
            let groupFrom = i, groupStart = positions[i], groupSize = nodeSize(balanceType, children[i]);
            i++;
            for(; i < to; i++){
                let nextSize = nodeSize(balanceType, children[i]);
                if (groupSize + nextSize >= maxChild) break;
                groupSize += nextSize;
            }
            if (i == groupFrom + 1) {
                if (groupSize > maxChild) {
                    let only = children[groupFrom]; // Only trees can have a size > 1
                    divide(only.children, only.positions, 0, only.children.length, positions[groupFrom] + offset);
                    continue;
                }
                localChildren.push(children[groupFrom]);
            } else {
                let length = positions[i - 1] + children[i - 1].length - groupStart;
                localChildren.push(balanceRange(balanceType, children, positions, groupFrom, i, groupStart, length, null, mkTree));
            }
            localPositions.push(groupStart + offset - start);
        }
    }
    divide(children, positions, from, to, 0);
    return (mkTop || mkTree)(localChildren, localPositions, length);
}
/**
Provides a way to associate values with pieces of trees. As long
as that part of the tree is reused, the associated values can be
retrieved from an updated tree.
*/ class NodeWeakMap {
    constructor(){
        this.map = new WeakMap();
    }
    setBuffer(buffer, index, value) {
        let inner = this.map.get(buffer);
        if (!inner) this.map.set(buffer, inner = new Map);
        inner.set(index, value);
    }
    getBuffer(buffer, index) {
        let inner = this.map.get(buffer);
        return inner && inner.get(index);
    }
    /**
    Set the value for this syntax node.
    */ set(node, value) {
        if (node instanceof BufferNode) this.setBuffer(node.context.buffer, node.index, value);
        else if (node instanceof TreeNode) this.map.set(node.tree, value);
    }
    /**
    Retrieve value for this syntax node, if it exists in the map.
    */ get(node) {
        return node instanceof BufferNode ? this.getBuffer(node.context.buffer, node.index) : node instanceof TreeNode ? this.map.get(node.tree) : undefined;
    }
    /**
    Set the value for the node that a cursor currently points to.
    */ cursorSet(cursor, value) {
        if (cursor.buffer) this.setBuffer(cursor.buffer.buffer, cursor.index, value);
        else this.map.set(cursor.tree, value);
    }
    /**
    Retrieve the value for the node that a cursor currently points
    to.
    */ cursorGet(cursor) {
        return cursor.buffer ? this.getBuffer(cursor.buffer.buffer, cursor.index) : this.map.get(cursor.tree);
    }
}
/**
Tree fragments are used during [incremental
parsing](#common.Parser.startParse) to track parts of old trees
that can be reused in a new parse. An array of fragments is used
to track regions of an old tree whose nodes might be reused in new
parses. Use the static
[`applyChanges`](#common.TreeFragment^applyChanges) method to
update fragments for document changes.
*/ class TreeFragment {
    /**
    Construct a tree fragment. You'll usually want to use
    [`addTree`](#common.TreeFragment^addTree) and
    [`applyChanges`](#common.TreeFragment^applyChanges) instead of
    calling this directly.
    */ constructor(/**
    The start of the unchanged range pointed to by this fragment.
    This refers to an offset in the _updated_ document (as opposed
    to the original tree).
    */ from, /**
    The end of the unchanged range.
    */ to, /**
    The tree that this fragment is based on.
    */ tree, /**
    The offset between the fragment's tree and the document that
    this fragment can be used against. Add this when going from
    document to tree positions, subtract it to go from tree to
    document positions.
    */ offset, openStart = false, openEnd = false){
        this.from = from;
        this.to = to;
        this.tree = tree;
        this.offset = offset;
        this.open = (openStart ? 1 /* Open.Start */  : 0) | (openEnd ? 2 /* Open.End */  : 0);
    }
    /**
    Whether the start of the fragment represents the start of a
    parse, or the end of a change. (In the second case, it may not
    be safe to reuse some nodes at the start, depending on the
    parsing algorithm.)
    */ get openStart() {
        return (this.open & 1 /* Open.Start */ ) > 0;
    }
    /**
    Whether the end of the fragment represents the end of a
    full-document parse, or the start of a change.
    */ get openEnd() {
        return (this.open & 2 /* Open.End */ ) > 0;
    }
    /**
    Create a set of fragments from a freshly parsed tree, or update
    an existing set of fragments by replacing the ones that overlap
    with a tree with content from the new tree. When `partial` is
    true, the parse is treated as incomplete, and the resulting
    fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
    true.
    */ static addTree(tree, fragments = [], partial = false) {
        let result = [
            new TreeFragment(0, tree.length, tree, 0, false, partial)
        ];
        for (let f of fragments)if (f.to > tree.length) result.push(f);
        return result;
    }
    /**
    Apply a set of edits to an array of fragments, removing or
    splitting fragments as necessary to remove edited ranges, and
    adjusting offsets for fragments that moved.
    */ static applyChanges(fragments, changes, minGap = 128) {
        if (!changes.length) return fragments;
        let result = [];
        let fI = 1, nextF = fragments.length ? fragments[0] : null;
        for(let cI = 0, pos = 0, off = 0;; cI++){
            let nextC = cI < changes.length ? changes[cI] : null;
            let nextPos = nextC ? nextC.fromA : 1e9;
            if (nextPos - pos >= minGap) while(nextF && nextF.from < nextPos){
                let cut = nextF;
                if (pos >= cut.from || nextPos <= cut.to || off) {
                    let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
                    cut = fFrom >= fTo ? null : new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, cI > 0, !!nextC);
                }
                if (cut) result.push(cut);
                if (nextF.to > nextPos) break;
                nextF = fI < fragments.length ? fragments[fI++] : null;
            }
            if (!nextC) break;
            pos = nextC.toA;
            off = nextC.toA - nextC.toB;
        }
        return result;
    }
}
/**
A superclass that parsers should extend.
*/ class Parser {
    /**
    Start a parse, returning a [partial parse](#common.PartialParse)
    object. [`fragments`](#common.TreeFragment) can be passed in to
    make the parse incremental.
    
    By default, the entire input is parsed. You can pass `ranges`,
    which should be a sorted array of non-empty, non-overlapping
    ranges, to parse only those ranges. The tree returned in that
    case will start at `ranges[0].from`.
    */ startParse(input, fragments, ranges) {
        if (typeof input == "string") input = new StringInput(input);
        ranges = !ranges ? [
            new Range(0, input.length)
        ] : ranges.length ? ranges.map((r)=>new Range(r.from, r.to)) : [
            new Range(0, 0)
        ];
        return this.createParse(input, fragments || [], ranges);
    }
    /**
    Run a full parse, returning the resulting tree.
    */ parse(input, fragments, ranges) {
        let parse = this.startParse(input, fragments, ranges);
        for(;;){
            let done = parse.advance();
            if (done) return done;
        }
    }
}
class StringInput {
    constructor(string){
        this.string = string;
    }
    get length() {
        return this.string.length;
    }
    chunk(from) {
        return this.string.slice(from);
    }
    get lineChunks() {
        return false;
    }
    read(from, to) {
        return this.string.slice(from, to);
    }
}
/**
Create a parse wrapper that, after the inner parse completes,
scans its tree for mixed language regions with the `nest`
function, runs the resulting [inner parses](#common.NestedParse),
and then [mounts](#common.NodeProp^mounted) their results onto the
tree.
*/ function parseMixed(nest) {
    return (parse, input, fragments, ranges)=>new MixedParse(parse, nest, input, fragments, ranges);
}
class InnerParse {
    constructor(parser, parse, overlay, target, from){
        this.parser = parser;
        this.parse = parse;
        this.overlay = overlay;
        this.target = target;
        this.from = from;
    }
}
function checkRanges(ranges) {
    if (!ranges.length || ranges.some((r)=>r.from >= r.to)) throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(ranges));
}
class ActiveOverlay {
    constructor(parser, predicate, mounts, index, start, target, prev){
        this.parser = parser;
        this.predicate = predicate;
        this.mounts = mounts;
        this.index = index;
        this.start = start;
        this.target = target;
        this.prev = prev;
        this.depth = 0;
        this.ranges = [];
    }
}
const stoppedInner = new NodeProp({
    perNode: true
});
class MixedParse {
    constructor(base, nest, input, fragments, ranges){
        this.nest = nest;
        this.input = input;
        this.fragments = fragments;
        this.ranges = ranges;
        this.inner = [];
        this.innerDone = 0;
        this.baseTree = null;
        this.stoppedAt = null;
        this.baseParse = base;
    }
    advance() {
        if (this.baseParse) {
            let done = this.baseParse.advance();
            if (!done) return null;
            this.baseParse = null;
            this.baseTree = done;
            this.startInner();
            if (this.stoppedAt != null) for (let inner of this.inner)inner.parse.stopAt(this.stoppedAt);
        }
        if (this.innerDone == this.inner.length) {
            let result = this.baseTree;
            if (this.stoppedAt != null) result = new Tree(result.type, result.children, result.positions, result.length, result.propValues.concat([
                [
                    stoppedInner,
                    this.stoppedAt
                ]
            ]));
            return result;
        }
        let inner = this.inner[this.innerDone], done = inner.parse.advance();
        if (done) {
            this.innerDone++;
            // This is a somewhat dodgy but super helpful hack where we
            // patch up nodes created by the inner parse (and thus
            // presumably not aliased anywhere else) to hold the information
            // about the inner parse.
            let props = Object.assign(Object.create(null), inner.target.props);
            props[NodeProp.mounted.id] = new MountedTree(done, inner.overlay, inner.parser);
            inner.target.props = props;
        }
        return null;
    }
    get parsedPos() {
        if (this.baseParse) return 0;
        let pos = this.input.length;
        for(let i = this.innerDone; i < this.inner.length; i++)if (this.inner[i].from < pos) pos = Math.min(pos, this.inner[i].parse.parsedPos);
        return pos;
    }
    stopAt(pos) {
        this.stoppedAt = pos;
        if (this.baseParse) this.baseParse.stopAt(pos);
        else for(let i = this.innerDone; i < this.inner.length; i++)this.inner[i].parse.stopAt(pos);
    }
    startInner() {
        let fragmentCursor = new FragmentCursor(this.fragments);
        let overlay = null;
        let covered = null;
        let cursor = new TreeCursor(new TreeNode(this.baseTree, this.ranges[0].from, 0, null), IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
        scan: for(let nest, isCovered;;){
            let enter = true, range;
            if (this.stoppedAt != null && cursor.from >= this.stoppedAt) enter = false;
            else if (fragmentCursor.hasNode(cursor)) {
                if (overlay) {
                    let match = overlay.mounts.find((m)=>m.frag.from <= cursor.from && m.frag.to >= cursor.to && m.mount.overlay);
                    if (match) for (let r of match.mount.overlay){
                        let from = r.from + match.pos, to = r.to + match.pos;
                        if (from >= cursor.from && to <= cursor.to && !overlay.ranges.some((r)=>r.from < to && r.to > from)) overlay.ranges.push({
                            from,
                            to
                        });
                    }
                }
                enter = false;
            } else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) enter = isCovered != 2 /* Cover.Full */ ;
            else if (!cursor.type.isAnonymous && (nest = this.nest(cursor, this.input)) && (cursor.from < cursor.to || !nest.overlay)) {
                if (!cursor.tree) materialize(cursor);
                let oldMounts = fragmentCursor.findMounts(cursor.from, nest.parser);
                if (typeof nest.overlay == "function") overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);
                else {
                    let ranges = punchRanges(this.ranges, nest.overlay || (cursor.from < cursor.to ? [
                        new Range(cursor.from, cursor.to)
                    ] : []));
                    if (ranges.length) checkRanges(ranges);
                    if (ranges.length || !nest.overlay) this.inner.push(new InnerParse(nest.parser, ranges.length ? nest.parser.startParse(this.input, enterFragments(oldMounts, ranges), ranges) : nest.parser.startParse(""), nest.overlay ? nest.overlay.map((r)=>new Range(r.from - cursor.from, r.to - cursor.from)) : null, cursor.tree, ranges.length ? ranges[0].from : cursor.from));
                    if (!nest.overlay) enter = false;
                    else if (ranges.length) covered = {
                        ranges,
                        depth: 0,
                        prev: covered
                    };
                }
            } else if (overlay && (range = overlay.predicate(cursor))) {
                if (range === true) range = new Range(cursor.from, cursor.to);
                if (range.from < range.to) overlay.ranges.push(range);
            }
            if (enter && cursor.firstChild()) {
                if (overlay) overlay.depth++;
                if (covered) covered.depth++;
            } else for(;;){
                if (cursor.nextSibling()) break;
                if (!cursor.parent()) break scan;
                if (overlay && !--overlay.depth) {
                    let ranges = punchRanges(this.ranges, overlay.ranges);
                    if (ranges.length) {
                        checkRanges(ranges);
                        this.inner.splice(overlay.index, 0, new InnerParse(overlay.parser, overlay.parser.startParse(this.input, enterFragments(overlay.mounts, ranges), ranges), overlay.ranges.map((r)=>new Range(r.from - overlay.start, r.to - overlay.start)), overlay.target, ranges[0].from));
                    }
                    overlay = overlay.prev;
                }
                if (covered && !--covered.depth) covered = covered.prev;
            }
        }
    }
}
function checkCover(covered, from, to) {
    for (let range of covered){
        if (range.from >= to) break;
        if (range.to > from) return range.from <= from && range.to >= to ? 2 /* Cover.Full */  : 1 /* Cover.Partial */ ;
    }
    return 0 /* Cover.None */ ;
}
// Take a piece of buffer and convert it into a stand-alone
// TreeBuffer.
function sliceBuf(buf, startI, endI, nodes, positions, off) {
    if (startI < endI) {
        let from = buf.buffer[startI + 1];
        nodes.push(buf.slice(startI, endI, from));
        positions.push(from - off);
    }
}
// This function takes a node that's in a buffer, and converts it, and
// its parent buffer nodes, into a Tree. This is again acting on the
// assumption that the trees and buffers have been constructed by the
// parse that was ran via the mix parser, and thus aren't shared with
// any other code, making violations of the immutability safe.
function materialize(cursor) {
    let { node } = cursor, stack = [];
    let buffer = node.context.buffer;
    // Scan up to the nearest tree
    do {
        stack.push(cursor.index);
        cursor.parent();
    }while (!cursor.tree);
    // Find the index of the buffer in that tree
    let base = cursor.tree, i = base.children.indexOf(buffer);
    let buf = base.children[i], b = buf.buffer, newStack = [
        i
    ];
    // Split a level in the buffer, putting the nodes before and after
    // the child that contains `node` into new buffers.
    function split(startI, endI, type, innerOffset, length, stackPos) {
        let targetI = stack[stackPos];
        let children = [], positions = [];
        sliceBuf(buf, startI, targetI, children, positions, innerOffset);
        let from = b[targetI + 1], to = b[targetI + 2];
        newStack.push(children.length);
        let child = stackPos ? split(targetI + 4, b[targetI + 3], buf.set.types[b[targetI]], from, to - from, stackPos - 1) : node.toTree();
        children.push(child);
        positions.push(from - innerOffset);
        sliceBuf(buf, b[targetI + 3], endI, children, positions, innerOffset);
        return new Tree(type, children, positions, length);
    }
    base.children[i] = split(0, b.length, NodeType.none, 0, buf.length, stack.length - 1);
    // Move the cursor back to the target node
    for (let index of newStack){
        let tree = cursor.tree.children[index], pos = cursor.tree.positions[index];
        cursor.yield(new TreeNode(tree, pos + cursor.from, index, cursor._tree));
    }
}
class StructureCursor {
    constructor(root, offset){
        this.offset = offset;
        this.done = false;
        this.cursor = root.cursor(IterMode.IncludeAnonymous | IterMode.IgnoreMounts);
    }
    // Move to the first node (in pre-order) that starts at or after `pos`.
    moveTo(pos) {
        let { cursor } = this, p = pos - this.offset;
        while(!this.done && cursor.from < p){
            if (cursor.to >= pos && cursor.enter(p, 1, IterMode.IgnoreOverlays | IterMode.ExcludeBuffers)) ;
            else if (!cursor.next(false)) this.done = true;
        }
    }
    hasNode(cursor) {
        this.moveTo(cursor.from);
        if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) for(let tree = this.cursor.tree;;){
            if (tree == cursor.tree) return true;
            if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree) tree = tree.children[0];
            else break;
        }
        return false;
    }
}
class FragmentCursor {
    constructor(fragments){
        var _a;
        this.fragments = fragments;
        this.curTo = 0;
        this.fragI = 0;
        if (fragments.length) {
            let first = this.curFrag = fragments[0];
            this.curTo = (_a = first.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : first.to;
            this.inner = new StructureCursor(first.tree, -first.offset);
        } else this.curFrag = this.inner = null;
    }
    hasNode(node) {
        while(this.curFrag && node.from >= this.curTo)this.nextFrag();
        return this.curFrag && this.curFrag.from <= node.from && this.curTo >= node.to && this.inner.hasNode(node);
    }
    nextFrag() {
        var _a;
        this.fragI++;
        if (this.fragI == this.fragments.length) this.curFrag = this.inner = null;
        else {
            let frag = this.curFrag = this.fragments[this.fragI];
            this.curTo = (_a = frag.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : frag.to;
            this.inner = new StructureCursor(frag.tree, -frag.offset);
        }
    }
    findMounts(pos, parser) {
        var _a;
        let result = [];
        if (this.inner) {
            this.inner.cursor.moveTo(pos, 1);
            for(let pos = this.inner.cursor.node; pos; pos = pos.parent){
                let mount = (_a = pos.tree) === null || _a === void 0 ? void 0 : _a.prop(NodeProp.mounted);
                if (mount && mount.parser == parser) for(let i = this.fragI; i < this.fragments.length; i++){
                    let frag = this.fragments[i];
                    if (frag.from >= pos.to) break;
                    if (frag.tree == this.curFrag.tree) result.push({
                        frag,
                        pos: pos.from - frag.offset,
                        mount
                    });
                }
            }
        }
        return result;
    }
}
function punchRanges(outer, ranges) {
    let copy = null, current = ranges;
    for(let i = 1, j = 0; i < outer.length; i++){
        let gapFrom = outer[i - 1].to, gapTo = outer[i].from;
        for(; j < current.length; j++){
            let r = current[j];
            if (r.from >= gapTo) break;
            if (r.to <= gapFrom) continue;
            if (!copy) current = copy = ranges.slice();
            if (r.from < gapFrom) {
                copy[j] = new Range(r.from, gapFrom);
                if (r.to > gapTo) copy.splice(j + 1, 0, new Range(gapTo, r.to));
            } else if (r.to > gapTo) copy[j--] = new Range(gapTo, r.to);
            else copy.splice(j--, 1);
        }
    }
    return current;
}
function findCoverChanges(a, b, from, to) {
    let iA = 0, iB = 0, inA = false, inB = false, pos = -1000000000;
    let result = [];
    for(;;){
        let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;
        let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;
        if (inA != inB) {
            let start = Math.max(pos, from), end = Math.min(nextA, nextB, to);
            if (start < end) result.push(new Range(start, end));
        }
        pos = Math.min(nextA, nextB);
        if (pos == 1e9) break;
        if (nextA == pos) {
            if (!inA) inA = true;
            else {
                inA = false;
                iA++;
            }
        }
        if (nextB == pos) {
            if (!inB) inB = true;
            else {
                inB = false;
                iB++;
            }
        }
    }
    return result;
}
// Given a number of fragments for the outer tree, and a set of ranges
// to parse, find fragments for inner trees mounted around those
// ranges, if any.
function enterFragments(mounts, ranges) {
    let result = [];
    for (let { pos, mount, frag } of mounts){
        let startPos = pos + (mount.overlay ? mount.overlay[0].from : 0), endPos = startPos + mount.tree.length;
        let from = Math.max(frag.from, startPos), to = Math.min(frag.to, endPos);
        if (mount.overlay) {
            let overlay = mount.overlay.map((r)=>new Range(r.from + pos, r.to + pos));
            let changes = findCoverChanges(ranges, overlay, from, to);
            for(let i = 0, pos = from;; i++){
                let last = i == changes.length, end = last ? to : changes[i].from;
                if (end > pos) result.push(new TreeFragment(pos, end, mount.tree, -startPos, frag.from >= pos || frag.openStart, frag.to <= end || frag.openEnd));
                if (last) break;
                pos = changes[i].to;
            }
        } else result.push(new TreeFragment(from, to, mount.tree, -startPos, frag.from >= startPos || frag.openStart, frag.to <= endPos || frag.openEnd));
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbQRg":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function createCommonjsModule(fn, module1) {
        return module1 = {
            exports: {}
        }, fn(module1, module1.exports), module1.exports;
    }
    var _global = createCommonjsModule(function(module1) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global;
         // eslint-disable-line no-undef
    });
    var _core = createCommonjsModule(function(module1) {
        var core = module1.exports = {
            version: "2.6.5"
        };
        if (typeof __e == "number") __e = core;
         // eslint-disable-line no-undef
    });
    var _core_1 = _core.version;
    var _isObject = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
    };
    var _anObject = function(it) {
        if (!_isObject(it)) throw TypeError(it + " is not an object!");
        return it;
    };
    var _fails = function(exec) {
        try {
            return !!exec();
        } catch (e) {
            return true;
        }
    };
    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function() {
        return Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    });
    var document = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document) && _isObject(document.createElement);
    var _domCreate = function(it) {
        return is ? document.createElement(it) : {};
    };
    var _ie8DomDefine = !_descriptors && !_fails(function() {
        return Object.defineProperty(_domCreate("div"), "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    });
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function(it, S) {
        if (!_isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };
    var dP = Object.defineProperty;
    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) try {
            return dP(O, P, Attributes);
        } catch (e) {}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
    };
    var _objectDp = {
        f: f
    };
    var _propertyDesc = function(bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };
    var _hide = _descriptors ? function(object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };
    var hasOwnProperty = {}.hasOwnProperty;
    var _has = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
    var id = 0;
    var px = Math.random();
    var _uid = function(key) {
        return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
    };
    var _library = false;
    var _shared = createCommonjsModule(function(module1) {
        var SHARED = "__core-js_shared__";
        var store = _global[SHARED] || (_global[SHARED] = {});
        (module1.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
            version: _core.version,
            mode: _library ? "pure" : "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        });
    });
    var _functionToString = _shared("native-function-to-string", Function.toString);
    var _redefine = createCommonjsModule(function(module1) {
        var SRC = _uid("src");
        var TO_STRING = "toString";
        var TPL = ("" + _functionToString).split(TO_STRING);
        _core.inspectSource = function(it) {
            return _functionToString.call(it);
        };
        (module1.exports = function(O, key, val, safe) {
            var isFunction = typeof val == "function";
            if (isFunction) _has(val, "name") || _hide(val, "name", key);
            if (O[key] === val) return;
            if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
            if (O === _global) O[key] = val;
            else if (!safe) {
                delete O[key];
                _hide(O, key, val);
            } else if (O[key]) O[key] = val;
            else _hide(O, key, val);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == "function" && this[SRC] || _functionToString.call(this);
        });
    });
    var _aFunction = function(it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
    };
    // optional / simple context binding
    var _ctx = function(fn, that, length) {
        _aFunction(fn);
        if (that === undefined) return fn;
        switch(length){
            case 1:
                return function(a) {
                    return fn.call(that, a);
                };
            case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };
            case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
        }
        return function() {
            return fn.apply(that, arguments);
        };
    };
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;
        for(key in source){
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
            // extend global
            if (target) _redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) _hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
    };
    _global.core = _core;
    // type bitmap
    $export.F = 1; // forced
    $export.G = 2; // global
    $export.S = 4; // static
    $export.P = 8; // proto
    $export.B = 16; // bind
    $export.W = 32; // wrap
    $export.U = 64; // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function(it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
    };
    // true  -> String#at
    // false -> String#codePointAt
    var _stringAt = function(TO_STRING) {
        return function(that, pos) {
            var s = String(_defined(that));
            var i = _toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
    };
    var $at = _stringAt(false);
    _export(_export.P, "String", {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function codePointAt(pos) {
            return $at(this, pos);
        }
    });
    var codePointAt = _core.String.codePointAt;
    var max = Math.max;
    var min = Math.min;
    var _toAbsoluteIndex = function(index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
    };
    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;
    // length should be 1, old FF problem
    _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function fromCodePoint(x) {
            var arguments$1 = arguments;
            // eslint-disable-line no-unused-vars
            var res = [];
            var aLen = arguments.length;
            var i = 0;
            var code;
            while(aLen > i){
                code = +arguments$1[i++];
                if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + " is not a valid code point");
                res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }
            return res.join("");
        }
    });
    var fromCodePoint = _core.String.fromCodePoint;
    // This is a generated file. Do not edit.
    var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
    var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
    var unicode = {
        Space_Separator: Space_Separator,
        ID_Start: ID_Start,
        ID_Continue: ID_Continue
    };
    var util = {
        isSpaceSeparator: function isSpaceSeparator(c) {
            return typeof c === "string" && unicode.Space_Separator.test(c);
        },
        isIdStartChar: function isIdStartChar(c) {
            return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "$" || c === "_" || unicode.ID_Start.test(c));
        },
        isIdContinueChar: function isIdContinueChar(c) {
            return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "$" || c === "_" || c === "\u200C" || c === "\u200D" || unicode.ID_Continue.test(c));
        },
        isDigit: function isDigit(c) {
            return typeof c === "string" && /[0-9]/.test(c);
        },
        isHexDigit: function isHexDigit(c) {
            return typeof c === "string" && /[0-9A-Fa-f]/.test(c);
        }
    };
    var source;
    var parseState;
    var stack;
    var pos;
    var line;
    var column;
    var token;
    var key;
    var root;
    var parse = function parse(text, reviver) {
        source = String(text);
        parseState = "start";
        stack = [];
        pos = 0;
        line = 1;
        column = 0;
        token = undefined;
        key = undefined;
        root = undefined;
        do {
            token = lex();
            // This code is unreachable.
            // if (!parseStates[parseState]) {
            //     throw invalidParseState()
            // }
            parseStates[parseState]();
        }while (token.type !== "eof");
        if (typeof reviver === "function") return internalize({
            "": root
        }, "", reviver);
        return root;
    };
    function internalize(holder, name, reviver) {
        var value = holder[name];
        if (value != null && typeof value === "object") {
            if (Array.isArray(value)) for(var i = 0; i < value.length; i++){
                var key = String(i);
                var replacement = internalize(value, key, reviver);
                if (replacement === undefined) delete value[key];
                else Object.defineProperty(value, key, {
                    value: replacement,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            else for(var key$1 in value){
                var replacement$1 = internalize(value, key$1, reviver);
                if (replacement$1 === undefined) delete value[key$1];
                else Object.defineProperty(value, key$1, {
                    value: replacement$1,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
        }
        return reviver.call(holder, name, value);
    }
    var lexState;
    var buffer;
    var doubleQuote;
    var sign;
    var c;
    function lex() {
        lexState = "default";
        buffer = "";
        doubleQuote = false;
        sign = 1;
        for(;;){
            c = peek();
            // This code is unreachable.
            // if (!lexStates[lexState]) {
            //     throw invalidLexState(lexState)
            // }
            var token = lexStates[lexState]();
            if (token) return token;
        }
    }
    function peek() {
        if (source[pos]) return String.fromCodePoint(source.codePointAt(pos));
    }
    function read() {
        var c = peek();
        if (c === "\n") {
            line++;
            column = 0;
        } else if (c) column += c.length;
        else column++;
        if (c) pos += c.length;
        return c;
    }
    var lexStates = {
        default: function default$1() {
            switch(c){
                case "	":
                case "\v":
                case "\f":
                case " ":
                case "\xa0":
                case "\uFEFF":
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    read();
                    return;
                case "/":
                    read();
                    lexState = "comment";
                    return;
                case undefined:
                    read();
                    return newToken("eof");
            }
            if (util.isSpaceSeparator(c)) {
                read();
                return;
            }
            // This code is unreachable.
            // if (!lexStates[parseState]) {
            //     throw invalidLexState(parseState)
            // }
            return lexStates[parseState]();
        },
        comment: function comment() {
            switch(c){
                case "*":
                    read();
                    lexState = "multiLineComment";
                    return;
                case "/":
                    read();
                    lexState = "singleLineComment";
                    return;
            }
            throw invalidChar(read());
        },
        multiLineComment: function multiLineComment() {
            switch(c){
                case "*":
                    read();
                    lexState = "multiLineCommentAsterisk";
                    return;
                case undefined:
                    throw invalidChar(read());
            }
            read();
        },
        multiLineCommentAsterisk: function multiLineCommentAsterisk() {
            switch(c){
                case "*":
                    read();
                    return;
                case "/":
                    read();
                    lexState = "default";
                    return;
                case undefined:
                    throw invalidChar(read());
            }
            read();
            lexState = "multiLineComment";
        },
        singleLineComment: function singleLineComment() {
            switch(c){
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    read();
                    lexState = "default";
                    return;
                case undefined:
                    read();
                    return newToken("eof");
            }
            read();
        },
        value: function value() {
            switch(c){
                case "{":
                case "[":
                    return newToken("punctuator", read());
                case "n":
                    read();
                    literal("ull");
                    return newToken("null", null);
                case "t":
                    read();
                    literal("rue");
                    return newToken("boolean", true);
                case "f":
                    read();
                    literal("alse");
                    return newToken("boolean", false);
                case "-":
                case "+":
                    if (read() === "-") sign = -1;
                    lexState = "sign";
                    return;
                case ".":
                    buffer = read();
                    lexState = "decimalPointLeading";
                    return;
                case "0":
                    buffer = read();
                    lexState = "zero";
                    return;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    buffer = read();
                    lexState = "decimalInteger";
                    return;
                case "I":
                    read();
                    literal("nfinity");
                    return newToken("numeric", Infinity);
                case "N":
                    read();
                    literal("aN");
                    return newToken("numeric", NaN);
                case '"':
                case "'":
                    doubleQuote = read() === '"';
                    buffer = "";
                    lexState = "string";
                    return;
            }
            throw invalidChar(read());
        },
        identifierNameStartEscape: function identifierNameStartEscape() {
            if (c !== "u") throw invalidChar(read());
            read();
            var u = unicodeEscape();
            switch(u){
                case "$":
                case "_":
                    break;
                default:
                    if (!util.isIdStartChar(u)) throw invalidIdentifier();
                    break;
            }
            buffer += u;
            lexState = "identifierName";
        },
        identifierName: function identifierName() {
            switch(c){
                case "$":
                case "_":
                case "\u200C":
                case "\u200D":
                    buffer += read();
                    return;
                case "\\":
                    read();
                    lexState = "identifierNameEscape";
                    return;
            }
            if (util.isIdContinueChar(c)) {
                buffer += read();
                return;
            }
            return newToken("identifier", buffer);
        },
        identifierNameEscape: function identifierNameEscape() {
            if (c !== "u") throw invalidChar(read());
            read();
            var u = unicodeEscape();
            switch(u){
                case "$":
                case "_":
                case "\u200C":
                case "\u200D":
                    break;
                default:
                    if (!util.isIdContinueChar(u)) throw invalidIdentifier();
                    break;
            }
            buffer += u;
            lexState = "identifierName";
        },
        sign: function sign$1() {
            switch(c){
                case ".":
                    buffer = read();
                    lexState = "decimalPointLeading";
                    return;
                case "0":
                    buffer = read();
                    lexState = "zero";
                    return;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    buffer = read();
                    lexState = "decimalInteger";
                    return;
                case "I":
                    read();
                    literal("nfinity");
                    return newToken("numeric", sign * Infinity);
                case "N":
                    read();
                    literal("aN");
                    return newToken("numeric", NaN);
            }
            throw invalidChar(read());
        },
        zero: function zero() {
            switch(c){
                case ".":
                    buffer += read();
                    lexState = "decimalPoint";
                    return;
                case "e":
                case "E":
                    buffer += read();
                    lexState = "decimalExponent";
                    return;
                case "x":
                case "X":
                    buffer += read();
                    lexState = "hexadecimal";
                    return;
            }
            return newToken("numeric", sign * 0);
        },
        decimalInteger: function decimalInteger() {
            switch(c){
                case ".":
                    buffer += read();
                    lexState = "decimalPoint";
                    return;
                case "e":
                case "E":
                    buffer += read();
                    lexState = "decimalExponent";
                    return;
            }
            if (util.isDigit(c)) {
                buffer += read();
                return;
            }
            return newToken("numeric", sign * Number(buffer));
        },
        decimalPointLeading: function decimalPointLeading() {
            if (util.isDigit(c)) {
                buffer += read();
                lexState = "decimalFraction";
                return;
            }
            throw invalidChar(read());
        },
        decimalPoint: function decimalPoint() {
            switch(c){
                case "e":
                case "E":
                    buffer += read();
                    lexState = "decimalExponent";
                    return;
            }
            if (util.isDigit(c)) {
                buffer += read();
                lexState = "decimalFraction";
                return;
            }
            return newToken("numeric", sign * Number(buffer));
        },
        decimalFraction: function decimalFraction() {
            switch(c){
                case "e":
                case "E":
                    buffer += read();
                    lexState = "decimalExponent";
                    return;
            }
            if (util.isDigit(c)) {
                buffer += read();
                return;
            }
            return newToken("numeric", sign * Number(buffer));
        },
        decimalExponent: function decimalExponent() {
            switch(c){
                case "+":
                case "-":
                    buffer += read();
                    lexState = "decimalExponentSign";
                    return;
            }
            if (util.isDigit(c)) {
                buffer += read();
                lexState = "decimalExponentInteger";
                return;
            }
            throw invalidChar(read());
        },
        decimalExponentSign: function decimalExponentSign() {
            if (util.isDigit(c)) {
                buffer += read();
                lexState = "decimalExponentInteger";
                return;
            }
            throw invalidChar(read());
        },
        decimalExponentInteger: function decimalExponentInteger() {
            if (util.isDigit(c)) {
                buffer += read();
                return;
            }
            return newToken("numeric", sign * Number(buffer));
        },
        hexadecimal: function hexadecimal() {
            if (util.isHexDigit(c)) {
                buffer += read();
                lexState = "hexadecimalInteger";
                return;
            }
            throw invalidChar(read());
        },
        hexadecimalInteger: function hexadecimalInteger() {
            if (util.isHexDigit(c)) {
                buffer += read();
                return;
            }
            return newToken("numeric", sign * Number(buffer));
        },
        string: function string() {
            switch(c){
                case "\\":
                    read();
                    buffer += escape();
                    return;
                case '"':
                    if (doubleQuote) {
                        read();
                        return newToken("string", buffer);
                    }
                    buffer += read();
                    return;
                case "'":
                    if (!doubleQuote) {
                        read();
                        return newToken("string", buffer);
                    }
                    buffer += read();
                    return;
                case "\n":
                case "\r":
                    throw invalidChar(read());
                case "\u2028":
                case "\u2029":
                    separatorChar(c);
                    break;
                case undefined:
                    throw invalidChar(read());
            }
            buffer += read();
        },
        start: function start() {
            switch(c){
                case "{":
                case "[":
                    return newToken("punctuator", read());
            }
            lexState = "value";
        },
        beforePropertyName: function beforePropertyName() {
            switch(c){
                case "$":
                case "_":
                    buffer = read();
                    lexState = "identifierName";
                    return;
                case "\\":
                    read();
                    lexState = "identifierNameStartEscape";
                    return;
                case "}":
                    return newToken("punctuator", read());
                case '"':
                case "'":
                    doubleQuote = read() === '"';
                    lexState = "string";
                    return;
            }
            if (util.isIdStartChar(c)) {
                buffer += read();
                lexState = "identifierName";
                return;
            }
            throw invalidChar(read());
        },
        afterPropertyName: function afterPropertyName() {
            if (c === ":") return newToken("punctuator", read());
            throw invalidChar(read());
        },
        beforePropertyValue: function beforePropertyValue() {
            lexState = "value";
        },
        afterPropertyValue: function afterPropertyValue() {
            switch(c){
                case ",":
                case "}":
                    return newToken("punctuator", read());
            }
            throw invalidChar(read());
        },
        beforeArrayValue: function beforeArrayValue() {
            if (c === "]") return newToken("punctuator", read());
            lexState = "value";
        },
        afterArrayValue: function afterArrayValue() {
            switch(c){
                case ",":
                case "]":
                    return newToken("punctuator", read());
            }
            throw invalidChar(read());
        },
        end: function end() {
            // This code is unreachable since it's handled by the default lexState.
            // if (c === undefined) {
            //     read()
            //     return newToken('eof')
            // }
            throw invalidChar(read());
        }
    };
    function newToken(type, value) {
        return {
            type: type,
            value: value,
            line: line,
            column: column
        };
    }
    function literal(s) {
        for(var i = 0, list = s; i < list.length; i += 1){
            var c = list[i];
            var p = peek();
            if (p !== c) throw invalidChar(read());
            read();
        }
    }
    function escape() {
        var c = peek();
        switch(c){
            case "b":
                read();
                return "\b";
            case "f":
                read();
                return "\f";
            case "n":
                read();
                return "\n";
            case "r":
                read();
                return "\r";
            case "t":
                read();
                return "	";
            case "v":
                read();
                return "\v";
            case "0":
                read();
                if (util.isDigit(peek())) throw invalidChar(read());
                return "\x00";
            case "x":
                read();
                return hexEscape();
            case "u":
                read();
                return unicodeEscape();
            case "\n":
            case "\u2028":
            case "\u2029":
                read();
                return "";
            case "\r":
                read();
                if (peek() === "\n") read();
                return "";
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                throw invalidChar(read());
            case undefined:
                throw invalidChar(read());
        }
        return read();
    }
    function hexEscape() {
        var buffer = "";
        var c = peek();
        if (!util.isHexDigit(c)) throw invalidChar(read());
        buffer += read();
        c = peek();
        if (!util.isHexDigit(c)) throw invalidChar(read());
        buffer += read();
        return String.fromCodePoint(parseInt(buffer, 16));
    }
    function unicodeEscape() {
        var buffer = "";
        var count = 4;
        while(count-- > 0){
            var c = peek();
            if (!util.isHexDigit(c)) throw invalidChar(read());
            buffer += read();
        }
        return String.fromCodePoint(parseInt(buffer, 16));
    }
    var parseStates = {
        start: function start() {
            if (token.type === "eof") throw invalidEOF();
            push();
        },
        beforePropertyName: function beforePropertyName() {
            switch(token.type){
                case "identifier":
                case "string":
                    key = token.value;
                    parseState = "afterPropertyName";
                    return;
                case "punctuator":
                    // This code is unreachable since it's handled by the lexState.
                    // if (token.value !== '}') {
                    //     throw invalidToken()
                    // }
                    pop();
                    return;
                case "eof":
                    throw invalidEOF();
            }
        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
        },
        afterPropertyName: function afterPropertyName() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator' || token.value !== ':') {
            //     throw invalidToken()
            // }
            if (token.type === "eof") throw invalidEOF();
            parseState = "beforePropertyValue";
        },
        beforePropertyValue: function beforePropertyValue() {
            if (token.type === "eof") throw invalidEOF();
            push();
        },
        beforeArrayValue: function beforeArrayValue() {
            if (token.type === "eof") throw invalidEOF();
            if (token.type === "punctuator" && token.value === "]") {
                pop();
                return;
            }
            push();
        },
        afterPropertyValue: function afterPropertyValue() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator') {
            //     throw invalidToken()
            // }
            if (token.type === "eof") throw invalidEOF();
            switch(token.value){
                case ",":
                    parseState = "beforePropertyName";
                    return;
                case "}":
                    pop();
            }
        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
        },
        afterArrayValue: function afterArrayValue() {
            // This code is unreachable since it's handled by the lexState.
            // if (token.type !== 'punctuator') {
            //     throw invalidToken()
            // }
            if (token.type === "eof") throw invalidEOF();
            switch(token.value){
                case ",":
                    parseState = "beforeArrayValue";
                    return;
                case "]":
                    pop();
            }
        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
        },
        end: function end() {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'eof') {
        //     throw invalidToken()
        // }
        }
    };
    function push() {
        var value;
        switch(token.type){
            case "punctuator":
                switch(token.value){
                    case "{":
                        value = {};
                        break;
                    case "[":
                        value = [];
                        break;
                }
                break;
            case "null":
            case "boolean":
            case "numeric":
            case "string":
                value = token.value;
                break;
        }
        if (root === undefined) root = value;
        else {
            var parent = stack[stack.length - 1];
            if (Array.isArray(parent)) parent.push(value);
            else Object.defineProperty(parent, key, {
                value: value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        if (value !== null && typeof value === "object") {
            stack.push(value);
            if (Array.isArray(value)) parseState = "beforeArrayValue";
            else parseState = "beforePropertyName";
        } else {
            var current = stack[stack.length - 1];
            if (current == null) parseState = "end";
            else if (Array.isArray(current)) parseState = "afterArrayValue";
            else parseState = "afterPropertyValue";
        }
    }
    function pop() {
        stack.pop();
        var current = stack[stack.length - 1];
        if (current == null) parseState = "end";
        else if (Array.isArray(current)) parseState = "afterArrayValue";
        else parseState = "afterPropertyValue";
    }
    // This code is unreachable.
    // function invalidParseState () {
    //     return new Error(`JSON5: invalid parse state '${parseState}'`)
    // }
    // This code is unreachable.
    // function invalidLexState (state) {
    //     return new Error(`JSON5: invalid lex state '${state}'`)
    // }
    function invalidChar(c) {
        if (c === undefined) return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
        return syntaxError("JSON5: invalid character '" + formatChar(c) + "' at " + line + ":" + column);
    }
    function invalidEOF() {
        return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
    }
    // This code is unreachable.
    // function invalidToken () {
    //     if (token.type === 'eof') {
    //         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
    //     }
    //     const c = String.fromCodePoint(token.value.codePointAt(0))
    //     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
    // }
    function invalidIdentifier() {
        column -= 5;
        return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
    }
    function separatorChar(c) {
        console.warn("JSON5: '" + formatChar(c) + "' in strings is not valid ECMAScript; consider escaping");
    }
    function formatChar(c) {
        var replacements = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\v": "\\v",
            "\x00": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        };
        if (replacements[c]) return replacements[c];
        if (c < " ") {
            var hexString = c.charCodeAt(0).toString(16);
            return "\\x" + ("00" + hexString).substring(hexString.length);
        }
        return c;
    }
    function syntaxError(message) {
        var err = new SyntaxError(message);
        err.lineNumber = line;
        err.columnNumber = column;
        return err;
    }
    var stringify = function stringify(value, replacer, space) {
        var stack = [];
        var indent = "";
        var propertyList;
        var replacerFunc;
        var gap = "";
        var quote;
        if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
            space = replacer.space;
            quote = replacer.quote;
            replacer = replacer.replacer;
        }
        if (typeof replacer === "function") replacerFunc = replacer;
        else if (Array.isArray(replacer)) {
            propertyList = [];
            for(var i = 0, list = replacer; i < list.length; i += 1){
                var v = list[i];
                var item = void 0;
                if (typeof v === "string") item = v;
                else if (typeof v === "number" || v instanceof String || v instanceof Number) item = String(v);
                if (item !== undefined && propertyList.indexOf(item) < 0) propertyList.push(item);
            }
        }
        if (space instanceof Number) space = Number(space);
        else if (space instanceof String) space = String(space);
        if (typeof space === "number") {
            if (space > 0) {
                space = Math.min(10, Math.floor(space));
                gap = "          ".substr(0, space);
            }
        } else if (typeof space === "string") gap = space.substr(0, 10);
        return serializeProperty("", {
            "": value
        });
        function serializeProperty(key, holder) {
            var value = holder[key];
            if (value != null) {
                if (typeof value.toJSON5 === "function") value = value.toJSON5(key);
                else if (typeof value.toJSON === "function") value = value.toJSON(key);
            }
            if (replacerFunc) value = replacerFunc.call(holder, key, value);
            if (value instanceof Number) value = Number(value);
            else if (value instanceof String) value = String(value);
            else if (value instanceof Boolean) value = value.valueOf();
            switch(value){
                case null:
                    return "null";
                case true:
                    return "true";
                case false:
                    return "false";
            }
            if (typeof value === "string") return quoteString(value, false);
            if (typeof value === "number") return String(value);
            if (typeof value === "object") return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
            return undefined;
        }
        function quoteString(value) {
            var quotes = {
                "'": 0.1,
                '"': 0.2
            };
            var replacements = {
                "'": "\\'",
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "	": "\\t",
                "\v": "\\v",
                "\x00": "\\0",
                "\u2028": "\\u2028",
                "\u2029": "\\u2029"
            };
            var product = "";
            for(var i = 0; i < value.length; i++){
                var c = value[i];
                switch(c){
                    case "'":
                    case '"':
                        quotes[c]++;
                        product += c;
                        continue;
                    case "\x00":
                        if (util.isDigit(value[i + 1])) {
                            product += "\\x00";
                            continue;
                        }
                }
                if (replacements[c]) {
                    product += replacements[c];
                    continue;
                }
                if (c < " ") {
                    var hexString = c.charCodeAt(0).toString(16);
                    product += "\\x" + ("00" + hexString).substring(hexString.length);
                    continue;
                }
                product += c;
            }
            var quoteChar = quote || Object.keys(quotes).reduce(function(a, b) {
                return quotes[a] < quotes[b] ? a : b;
            });
            product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
            return quoteChar + product + quoteChar;
        }
        function serializeObject(value) {
            if (stack.indexOf(value) >= 0) throw TypeError("Converting circular structure to JSON5");
            stack.push(value);
            var stepback = indent;
            indent = indent + gap;
            var keys = propertyList || Object.keys(value);
            var partial = [];
            for(var i = 0, list = keys; i < list.length; i += 1){
                var key = list[i];
                var propertyString = serializeProperty(key, value);
                if (propertyString !== undefined) {
                    var member = serializeKey(key) + ":";
                    if (gap !== "") member += " ";
                    member += propertyString;
                    partial.push(member);
                }
            }
            var final;
            if (partial.length === 0) final = "{}";
            else {
                var properties;
                if (gap === "") {
                    properties = partial.join(",");
                    final = "{" + properties + "}";
                } else {
                    var separator = ",\n" + indent;
                    properties = partial.join(separator);
                    final = "{\n" + indent + properties + ",\n" + stepback + "}";
                }
            }
            stack.pop();
            indent = stepback;
            return final;
        }
        function serializeKey(key) {
            if (key.length === 0) return quoteString(key, true);
            var firstChar = String.fromCodePoint(key.codePointAt(0));
            if (!util.isIdStartChar(firstChar)) return quoteString(key, true);
            for(var i = firstChar.length; i < key.length; i++){
                if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) return quoteString(key, true);
            }
            return key;
        }
        function serializeArray(value) {
            if (stack.indexOf(value) >= 0) throw TypeError("Converting circular structure to JSON5");
            stack.push(value);
            var stepback = indent;
            indent = indent + gap;
            var partial = [];
            for(var i = 0; i < value.length; i++){
                var propertyString = serializeProperty(String(i), value);
                partial.push(propertyString !== undefined ? propertyString : "null");
            }
            var final;
            if (partial.length === 0) final = "[]";
            else if (gap === "") {
                var properties = partial.join(",");
                final = "[" + properties + "]";
            } else {
                var separator = ",\n" + indent;
                var properties$1 = partial.join(separator);
                final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
            }
            stack.pop();
            indent = stepback;
            return final;
        }
    };
    var JSON5 = {
        parse: parse,
        stringify: stringify
    };
    var lib = JSON5;
    var es5 = lib;
    return es5;
});

},{}],"6BaXg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContextTracker", ()=>ContextTracker);
parcelHelpers.export(exports, "ExternalTokenizer", ()=>ExternalTokenizer);
parcelHelpers.export(exports, "InputStream", ()=>InputStream);
parcelHelpers.export(exports, "LRParser", ()=>LRParser);
parcelHelpers.export(exports, "LocalTokenGroup", ()=>LocalTokenGroup);
parcelHelpers.export(exports, "Stack", ()=>Stack);
var _common = require("@lezer/common");
var process = require("d88a62f5f4081843");
/**
A parse stack. These are used internally by the parser to track
parsing progress. They also provide some properties and methods
that external code such as a tokenizer can use to get information
about the parse state.
*/ class Stack {
    /**
    @internal
    */ constructor(/**
    The parse that this stack is part of @internal
    */ p, /**
    Holds state, input pos, buffer index triplets for all but the
    top state @internal
    */ stack, /**
    The current parse state @internal
    */ state, // The position at which the next reduce should take place. This
    // can be less than `this.pos` when skipped expressions have been
    // added to the stack (which should be moved outside of the next
    // reduction)
    /**
    @internal
    */ reducePos, /**
    The input position up to which this stack has parsed.
    */ pos, /**
    The dynamic score of the stack, including dynamic precedence
    and error-recovery penalties
    @internal
    */ score, // The output buffer. Holds (type, start, end, size) quads
    // representing nodes created by the parser, where `size` is
    // amount of buffer array entries covered by this node.
    /**
    @internal
    */ buffer, // The base offset of the buffer. When stacks are split, the split
    // instance shared the buffer history with its parent up to
    // `bufferBase`, which is the absolute offset (including the
    // offset of previous splits) into the buffer at which this stack
    // starts writing.
    /**
    @internal
    */ bufferBase, /**
    @internal
    */ curContext, /**
    @internal
    */ lookAhead = 0, // A parent stack from which this was split off, if any. This is
    // set up so that it always points to a stack that has some
    // additional buffer content, never to a stack with an equal
    // `bufferBase`.
    /**
    @internal
    */ parent){
        this.p = p;
        this.stack = stack;
        this.state = state;
        this.reducePos = reducePos;
        this.pos = pos;
        this.score = score;
        this.buffer = buffer;
        this.bufferBase = bufferBase;
        this.curContext = curContext;
        this.lookAhead = lookAhead;
        this.parent = parent;
    }
    /**
    @internal
    */ toString() {
        return `[${this.stack.filter((_, i)=>i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    // Start an empty stack
    /**
    @internal
    */ static start(p, state, pos = 0) {
        let cx = p.parser.context;
        return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
    }
    /**
    The stack's current [context](#lr.ContextTracker) value, if
    any. Its type will depend on the context tracker's type
    parameter, or it will be `null` if there is no context
    tracker.
    */ get context() {
        return this.curContext ? this.curContext.context : null;
    }
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /**
    @internal
    */ pushState(state, start) {
        this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
        this.state = state;
    }
    // Apply a reduce action
    /**
    @internal
    */ reduce(action) {
        var _a;
        let depth = action >> 19 /* Action.ReduceDepthShift */ , type = action & 65535 /* Action.ValueMask */ ;
        let { parser } = this.p;
        let dPrec = parser.dynamicPrecedence(type);
        if (dPrec) this.score += dPrec;
        if (depth == 0) {
            this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
            // Zero-depth reductions are a special case—they add stuff to
            // the stack without popping anything off.
            if (type < parser.minRepeatTerm) this.storeNode(type, this.reducePos, this.reducePos, 4, true);
            this.reduceContext(type, this.reducePos);
            return;
        }
        // Find the base index into `this.stack`, content after which will
        // be dropped. Note that with `StayFlag` reductions we need to
        // consume two extra frames (the dummy parent node for the skipped
        // expression and the state that we'll be staying in, which should
        // be moved to `this.state`).
        let base = this.stack.length - (depth - 1) * 3 - (action & 262144 /* Action.StayFlag */  ? 6 : 0);
        let start = base ? this.stack[base - 2] : this.p.ranges[0].from, size = this.reducePos - start;
        // This is a kludge to try and detect overly deep left-associative
        // trees, which will not increase the parse stack depth and thus
        // won't be caught by the regular stack-depth limit check.
        if (size >= 2000 /* Recover.MinBigReduction */  && !((_a = this.p.parser.nodeSet.types[type]) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
            if (start == this.p.lastBigReductionStart) {
                this.p.bigReductionCount++;
                this.p.lastBigReductionSize = size;
            } else if (this.p.lastBigReductionSize < size) {
                this.p.bigReductionCount = 1;
                this.p.lastBigReductionStart = start;
                this.p.lastBigReductionSize = size;
            }
        }
        let bufferBase = base ? this.stack[base - 1] : 0, count = this.bufferBase + this.buffer.length - bufferBase;
        // Store normal terms or `R -> R R` repeat reductions
        if (type < parser.minRepeatTerm || action & 131072 /* Action.RepeatFlag */ ) {
            let pos = parser.stateFlag(this.state, 1 /* StateFlag.Skipped */ ) ? this.pos : this.reducePos;
            this.storeNode(type, start, pos, count + 4, true);
        }
        if (action & 262144 /* Action.StayFlag */ ) this.state = this.stack[base];
        else {
            let baseStateID = this.stack[base - 3];
            this.state = parser.getGoto(baseStateID, type, true);
        }
        while(this.stack.length > base)this.stack.pop();
        this.reduceContext(type, start);
    }
    // Shift a value into the buffer
    /**
    @internal
    */ storeNode(term, start, end, size = 4, isReduce = false) {
        if (term == 0 /* Term.Err */  && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
            // Try to omit/merge adjacent error nodes
            let cur = this, top = this.buffer.length;
            if (top == 0 && cur.parent) {
                top = cur.bufferBase - cur.parent.bufferBase;
                cur = cur.parent;
            }
            if (top > 0 && cur.buffer[top - 4] == 0 /* Term.Err */  && cur.buffer[top - 1] > -1) {
                if (start == end) return;
                if (cur.buffer[top - 2] >= start) {
                    cur.buffer[top - 2] = end;
                    return;
                }
            }
        }
        if (!isReduce || this.pos == end) this.buffer.push(term, start, end, size);
        else {
            let index = this.buffer.length;
            if (index > 0 && this.buffer[index - 4] != 0 /* Term.Err */ ) while(index > 0 && this.buffer[index - 2] > end){
                // Move this record forward
                this.buffer[index] = this.buffer[index - 4];
                this.buffer[index + 1] = this.buffer[index - 3];
                this.buffer[index + 2] = this.buffer[index - 2];
                this.buffer[index + 3] = this.buffer[index - 1];
                index -= 4;
                if (size > 4) size -= 4;
            }
            this.buffer[index] = term;
            this.buffer[index + 1] = start;
            this.buffer[index + 2] = end;
            this.buffer[index + 3] = size;
        }
    }
    // Apply a shift action
    /**
    @internal
    */ shift(action, type, start, end) {
        if (action & 131072 /* Action.GotoFlag */ ) this.pushState(action & 65535 /* Action.ValueMask */ , this.pos);
        else if ((action & 262144 /* Action.StayFlag */ ) == 0) {
            let nextState = action, { parser } = this.p;
            if (end > this.pos || type <= parser.maxNode) {
                this.pos = end;
                if (!parser.stateFlag(nextState, 1 /* StateFlag.Skipped */ )) this.reducePos = end;
            }
            this.pushState(nextState, start);
            this.shiftContext(type, start);
            if (type <= parser.maxNode) this.buffer.push(type, start, end, 4);
        } else {
            this.pos = end;
            this.shiftContext(type, start);
            if (type <= this.p.parser.maxNode) this.buffer.push(type, start, end, 4);
        }
    }
    // Apply an action
    /**
    @internal
    */ apply(action, next, nextStart, nextEnd) {
        if (action & 65536 /* Action.ReduceFlag */ ) this.reduce(action);
        else this.shift(action, next, nextStart, nextEnd);
    }
    // Add a prebuilt (reused) node into the buffer.
    /**
    @internal
    */ useNode(value, next) {
        let index = this.p.reused.length - 1;
        if (index < 0 || this.p.reused[index] != value) {
            this.p.reused.push(value);
            index++;
        }
        let start = this.pos;
        this.reducePos = this.pos = start + value.length;
        this.pushState(next, start);
        this.buffer.push(index, start, this.reducePos, -1 /* size == -1 means this is a reused value */ );
        if (this.curContext) this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
    }
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /**
    @internal
    */ split() {
        let parent = this;
        let off = parent.buffer.length;
        // Because the top of the buffer (after this.pos) may be mutated
        // to reorder reductions and skipped tokens, and shared buffers
        // should be immutable, this copies any outstanding skipped tokens
        // to the new buffer, and puts the base pointer before them.
        while(off > 0 && parent.buffer[off - 2] > parent.reducePos)off -= 4;
        let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
        // Make sure parent points to an actual parent with content, if there is such a parent.
        while(parent && base == parent.bufferBase)parent = parent.parent;
        return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
    }
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /**
    @internal
    */ recoverByDelete(next, nextEnd) {
        let isNode = next <= this.p.parser.maxNode;
        if (isNode) this.storeNode(next, this.pos, nextEnd, 4);
        this.storeNode(0 /* Term.Err */ , this.pos, nextEnd, isNode ? 8 : 4);
        this.pos = this.reducePos = nextEnd;
        this.score -= 190 /* Recover.Delete */ ;
    }
    /**
    Check if the given term would be able to be shifted (optionally
    after some reductions) on this stack. This can be useful for
    external tokenizers that want to make sure they only provide a
    given token when it applies.
    */ canShift(term) {
        for(let sim = new SimulatedStack(this);;){
            let action = this.p.parser.stateSlot(sim.state, 4 /* ParseState.DefaultReduce */ ) || this.p.parser.hasAction(sim.state, term);
            if (action == 0) return false;
            if ((action & 65536 /* Action.ReduceFlag */ ) == 0) return true;
            sim.reduce(action);
        }
    }
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /**
    @internal
    */ recoverByInsert(next) {
        if (this.stack.length >= 300 /* Recover.MaxInsertStackDepth */ ) return [];
        let nextStates = this.p.parser.nextStates(this.state);
        if (nextStates.length > 8 || this.stack.length >= 120 /* Recover.DampenInsertStackDepth */ ) {
            let best = [];
            for(let i = 0, s; i < nextStates.length; i += 2)if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next)) best.push(nextStates[i], s);
            if (this.stack.length < 120 /* Recover.DampenInsertStackDepth */ ) for(let i = 0; best.length < 8 && i < nextStates.length; i += 2){
                let s = nextStates[i + 1];
                if (!best.some((v, i)=>i & 1 && v == s)) best.push(nextStates[i], s);
            }
            nextStates = best;
        }
        let result = [];
        for(let i = 0; i < nextStates.length && result.length < 4 /* Recover.MaxNext */ ; i += 2){
            let s = nextStates[i + 1];
            if (s == this.state) continue;
            let stack = this.split();
            stack.pushState(s, this.pos);
            stack.storeNode(0 /* Term.Err */ , stack.pos, stack.pos, 4, true);
            stack.shiftContext(nextStates[i], this.pos);
            stack.reducePos = this.pos;
            stack.score -= 200 /* Recover.Insert */ ;
            result.push(stack);
        }
        return result;
    }
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /**
    @internal
    */ forceReduce() {
        let { parser } = this.p;
        let reduce = parser.stateSlot(this.state, 5 /* ParseState.ForcedReduce */ );
        if ((reduce & 65536 /* Action.ReduceFlag */ ) == 0) return false;
        if (!parser.validAction(this.state, reduce)) {
            let depth = reduce >> 19 /* Action.ReduceDepthShift */ , term = reduce & 65535 /* Action.ValueMask */ ;
            let target = this.stack.length - depth * 3;
            if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0) {
                let backup = this.findForcedReduction();
                if (backup == null) return false;
                reduce = backup;
            }
            this.storeNode(0 /* Term.Err */ , this.pos, this.pos, 4, true);
            this.score -= 100 /* Recover.Reduce */ ;
        }
        this.reducePos = this.pos;
        this.reduce(reduce);
        return true;
    }
    /**
    Try to scan through the automaton to find some kind of reduction
    that can be applied. Used when the regular ForcedReduce field
    isn't a valid action. @internal
    */ findForcedReduction() {
        let { parser } = this.p, seen = [];
        let explore = (state, depth)=>{
            if (seen.includes(state)) return;
            seen.push(state);
            return parser.allActions(state, (action)=>{
                if (action & 393216 /* Action.GotoFlag */ ) ;
                else if (action & 65536 /* Action.ReduceFlag */ ) {
                    let rDepth = (action >> 19 /* Action.ReduceDepthShift */ ) - depth;
                    if (rDepth > 1) {
                        let term = action & 65535 /* Action.ValueMask */ , target = this.stack.length - rDepth * 3;
                        if (target >= 0 && parser.getGoto(this.stack[target], term, false) >= 0) return rDepth << 19 /* Action.ReduceDepthShift */  | 65536 /* Action.ReduceFlag */  | term;
                    }
                } else {
                    let found = explore(action, depth + 1);
                    if (found != null) return found;
                }
            });
        };
        return explore(this.state, 0);
    }
    /**
    @internal
    */ forceAll() {
        while(!this.p.parser.stateFlag(this.state, 2 /* StateFlag.Accepting */ ))if (!this.forceReduce()) {
            this.storeNode(0 /* Term.Err */ , this.pos, this.pos, 4, true);
            break;
        }
        return this;
    }
    /**
    Check whether this state has no further actions (assumed to be a direct descendant of the
    top state, since any other states must be able to continue
    somehow). @internal
    */ get deadEnd() {
        if (this.stack.length != 3) return false;
        let { parser } = this.p;
        return parser.data[parser.stateSlot(this.state, 1 /* ParseState.Actions */ )] == 65535 /* Seq.End */  && !parser.stateSlot(this.state, 4 /* ParseState.DefaultReduce */ );
    }
    /**
    Restart the stack (put it back in its start state). Only safe
    when this.stack.length == 3 (state is directly below the top
    state). @internal
    */ restart() {
        this.storeNode(0 /* Term.Err */ , this.pos, this.pos, 4, true);
        this.state = this.stack[0];
        this.stack.length = 0;
    }
    /**
    @internal
    */ sameState(other) {
        if (this.state != other.state || this.stack.length != other.stack.length) return false;
        for(let i = 0; i < this.stack.length; i += 3)if (this.stack[i] != other.stack[i]) return false;
        return true;
    }
    /**
    Get the parser used by this stack.
    */ get parser() {
        return this.p.parser;
    }
    /**
    Test whether a given dialect (by numeric ID, as exported from
    the terms file) is enabled.
    */ dialectEnabled(dialectID) {
        return this.p.parser.dialect.flags[dialectID];
    }
    shiftContext(term, start) {
        if (this.curContext) this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    reduceContext(term, start) {
        if (this.curContext) this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    /**
    @internal
    */ emitContext() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -3) this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
    }
    /**
    @internal
    */ emitLookAhead() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -4) this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
    }
    updateContext(context) {
        if (context != this.curContext.context) {
            let newCx = new StackContext(this.curContext.tracker, context);
            if (newCx.hash != this.curContext.hash) this.emitContext();
            this.curContext = newCx;
        }
    }
    /**
    @internal
    */ setLookAhead(lookAhead) {
        if (lookAhead > this.lookAhead) {
            this.emitLookAhead();
            this.lookAhead = lookAhead;
        }
    }
    /**
    @internal
    */ close() {
        if (this.curContext && this.curContext.tracker.strict) this.emitContext();
        if (this.lookAhead > 0) this.emitLookAhead();
    }
}
class StackContext {
    constructor(tracker, context){
        this.tracker = tracker;
        this.context = context;
        this.hash = tracker.strict ? tracker.hash(context) : 0;
    }
}
// Used to cheaply run some reductions to scan ahead without mutating
// an entire stack
class SimulatedStack {
    constructor(start){
        this.start = start;
        this.state = start.state;
        this.stack = start.stack;
        this.base = this.stack.length;
    }
    reduce(action) {
        let term = action & 65535 /* Action.ValueMask */ , depth = action >> 19 /* Action.ReduceDepthShift */ ;
        if (depth == 0) {
            if (this.stack == this.start.stack) this.stack = this.stack.slice();
            this.stack.push(this.state, 0, 0);
            this.base += 3;
        } else this.base -= (depth - 1) * 3;
        let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
        this.state = goto;
    }
}
// This is given to `Tree.build` to build a buffer, and encapsulates
// the parent-stack-walking necessary to read the nodes.
class StackBufferCursor {
    constructor(stack, pos, index){
        this.stack = stack;
        this.pos = pos;
        this.index = index;
        this.buffer = stack.buffer;
        if (this.index == 0) this.maybeNext();
    }
    static create(stack, pos = stack.bufferBase + stack.buffer.length) {
        return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
    }
    maybeNext() {
        let next = this.stack.parent;
        if (next != null) {
            this.index = this.stack.bufferBase - next.bufferBase;
            this.stack = next;
            this.buffer = next.buffer;
        }
    }
    get id() {
        return this.buffer[this.index - 4];
    }
    get start() {
        return this.buffer[this.index - 3];
    }
    get end() {
        return this.buffer[this.index - 2];
    }
    get size() {
        return this.buffer[this.index - 1];
    }
    next() {
        this.index -= 4;
        this.pos -= 4;
        if (this.index == 0) this.maybeNext();
    }
    fork() {
        return new StackBufferCursor(this.stack, this.pos, this.index);
    }
}
// See lezer-generator/src/encode.ts for comments about the encoding
// used here
function decodeArray(input, Type = Uint16Array) {
    if (typeof input != "string") return input;
    let array = null;
    for(let pos = 0, out = 0; pos < input.length;){
        let value = 0;
        for(;;){
            let next = input.charCodeAt(pos++), stop = false;
            if (next == 126 /* Encode.BigValCode */ ) {
                value = 65535 /* Encode.BigVal */ ;
                break;
            }
            if (next >= 92 /* Encode.Gap2 */ ) next--;
            if (next >= 34 /* Encode.Gap1 */ ) next--;
            let digit = next - 32 /* Encode.Start */ ;
            if (digit >= 46 /* Encode.Base */ ) {
                digit -= 46 /* Encode.Base */ ;
                stop = true;
            }
            value += digit;
            if (stop) break;
            value *= 46 /* Encode.Base */ ;
        }
        if (array) array[out++] = value;
        else array = new Type(value);
    }
    return array;
}
class CachedToken {
    constructor(){
        this.start = -1;
        this.value = -1;
        this.end = -1;
        this.extended = -1;
        this.lookAhead = 0;
        this.mask = 0;
        this.context = 0;
    }
}
const nullToken = new CachedToken;
/**
[Tokenizers](#lr.ExternalTokenizer) interact with the input
through this interface. It presents the input as a stream of
characters, tracking lookahead and hiding the complexity of
[ranges](#common.Parser.parse^ranges) from tokenizer code.
*/ class InputStream {
    /**
    @internal
    */ constructor(/**
    @internal
    */ input, /**
    @internal
    */ ranges){
        this.input = input;
        this.ranges = ranges;
        /**
        @internal
        */ this.chunk = "";
        /**
        @internal
        */ this.chunkOff = 0;
        /**
        Backup chunk
        */ this.chunk2 = "";
        this.chunk2Pos = 0;
        /**
        The character code of the next code unit in the input, or -1
        when the stream is at the end of the input.
        */ this.next = -1;
        /**
        @internal
        */ this.token = nullToken;
        this.rangeIndex = 0;
        this.pos = this.chunkPos = ranges[0].from;
        this.range = ranges[0];
        this.end = ranges[ranges.length - 1].to;
        this.readNext();
    }
    /**
    @internal
    */ resolveOffset(offset, assoc) {
        let range = this.range, index = this.rangeIndex;
        let pos = this.pos + offset;
        while(pos < range.from){
            if (!index) return null;
            let next = this.ranges[--index];
            pos -= range.from - next.to;
            range = next;
        }
        while(assoc < 0 ? pos > range.to : pos >= range.to){
            if (index == this.ranges.length - 1) return null;
            let next = this.ranges[++index];
            pos += next.from - range.to;
            range = next;
        }
        return pos;
    }
    /**
    @internal
    */ clipPos(pos) {
        if (pos >= this.range.from && pos < this.range.to) return pos;
        for (let range of this.ranges)if (range.to > pos) return Math.max(pos, range.from);
        return this.end;
    }
    /**
    Look at a code unit near the stream position. `.peek(0)` equals
    `.next`, `.peek(-1)` gives you the previous character, and so
    on.
    
    Note that looking around during tokenizing creates dependencies
    on potentially far-away content, which may reduce the
    effectiveness incremental parsing—when looking forward—or even
    cause invalid reparses when looking backward more than 25 code
    units, since the library does not track lookbehind.
    */ peek(offset) {
        let idx = this.chunkOff + offset, pos, result;
        if (idx >= 0 && idx < this.chunk.length) {
            pos = this.pos + offset;
            result = this.chunk.charCodeAt(idx);
        } else {
            let resolved = this.resolveOffset(offset, 1);
            if (resolved == null) return -1;
            pos = resolved;
            if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
            else {
                let i = this.rangeIndex, range = this.range;
                while(range.to <= pos)range = this.ranges[++i];
                this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
                if (pos + this.chunk2.length > range.to) this.chunk2 = this.chunk2.slice(0, range.to - pos);
                result = this.chunk2.charCodeAt(0);
            }
        }
        if (pos >= this.token.lookAhead) this.token.lookAhead = pos + 1;
        return result;
    }
    /**
    Accept a token. By default, the end of the token is set to the
    current stream position, but you can pass an offset (relative to
    the stream position) to change that.
    */ acceptToken(token, endOffset = 0) {
        let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
        if (end == null || end < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = token;
        this.token.end = end;
    }
    /**
    Accept a token ending at a specific given position.
    */ acceptTokenTo(token, endPos) {
        this.token.value = token;
        this.token.end = endPos;
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk, chunkPos } = this;
            this.chunk = this.chunk2;
            this.chunkPos = this.chunk2Pos;
            this.chunk2 = chunk;
            this.chunk2Pos = chunkPos;
            this.chunkOff = this.pos - this.chunkPos;
        } else {
            this.chunk2 = this.chunk;
            this.chunk2Pos = this.chunkPos;
            let nextChunk = this.input.chunk(this.pos);
            let end = this.pos + nextChunk.length;
            this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
            this.chunkPos = this.pos;
            this.chunkOff = 0;
        }
    }
    readNext() {
        if (this.chunkOff >= this.chunk.length) {
            this.getChunk();
            if (this.chunkOff == this.chunk.length) return this.next = -1;
        }
        return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    /**
    Move the stream forward N (defaults to 1) code units. Returns
    the new value of [`next`](#lr.InputStream.next).
    */ advance(n = 1) {
        this.chunkOff += n;
        while(this.pos + n >= this.range.to){
            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
            n -= this.range.to - this.pos;
            this.range = this.ranges[++this.rangeIndex];
            this.pos = this.range.from;
        }
        this.pos += n;
        if (this.pos >= this.token.lookAhead) this.token.lookAhead = this.pos + 1;
        return this.readNext();
    }
    setDone() {
        this.pos = this.chunkPos = this.end;
        this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
        this.chunk = "";
        return this.next = -1;
    }
    /**
    @internal
    */ reset(pos, token) {
        if (token) {
            this.token = token;
            token.start = pos;
            token.lookAhead = pos + 1;
            token.value = token.extended = -1;
        } else this.token = nullToken;
        if (this.pos != pos) {
            this.pos = pos;
            if (pos == this.end) {
                this.setDone();
                return this;
            }
            while(pos < this.range.from)this.range = this.ranges[--this.rangeIndex];
            while(pos >= this.range.to)this.range = this.ranges[++this.rangeIndex];
            if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) this.chunkOff = pos - this.chunkPos;
            else {
                this.chunk = "";
                this.chunkOff = 0;
            }
            this.readNext();
        }
        return this;
    }
    /**
    @internal
    */ read(from, to) {
        if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length) return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
        if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
        if (from >= this.range.from && to <= this.range.to) return this.input.read(from, to);
        let result = "";
        for (let r of this.ranges){
            if (r.from >= to) break;
            if (r.to > from) result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
        }
        return result;
    }
}
/**
@internal
*/ class TokenGroup {
    constructor(data, id){
        this.data = data;
        this.id = id;
    }
    token(input, stack) {
        let { parser } = stack.p;
        readToken(this.data, input, stack, this.id, parser.data, parser.tokenPrecTable);
    }
}
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
@hide
*/ class LocalTokenGroup {
    constructor(data, precTable, elseToken){
        this.precTable = precTable;
        this.elseToken = elseToken;
        this.data = typeof data == "string" ? decodeArray(data) : data;
    }
    token(input, stack) {
        let start = input.pos, skipped = 0;
        for(;;){
            let atEof = input.next < 0, nextPos = input.resolveOffset(1, 1);
            readToken(this.data, input, stack, 0, this.data, this.precTable);
            if (input.token.value > -1) break;
            if (this.elseToken == null) return;
            if (!atEof) skipped++;
            if (nextPos == null) break;
            input.reset(nextPos, input.token);
        }
        if (skipped) {
            input.reset(start, input.token);
            input.acceptToken(this.elseToken, skipped);
        }
    }
}
LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
`@external tokens` declarations in the grammar should resolve to
an instance of this class.
*/ class ExternalTokenizer {
    /**
    Create a tokenizer. The first argument is the function that,
    given an input stream, scans for the types of tokens it
    recognizes at the stream's position, and calls
    [`acceptToken`](#lr.InputStream.acceptToken) when it finds
    one.
    */ constructor(/**
    @internal
    */ token, options = {}){
        this.token = token;
        this.contextual = !!options.contextual;
        this.fallback = !!options.fallback;
        this.extend = !!options.extend;
    }
}
// Tokenizer data is stored a big uint16 array containing, for each
// state:
//
//  - A group bitmask, indicating what token groups are reachable from
//    this state, so that paths that can only lead to tokens not in
//    any of the current groups can be cut off early.
//
//  - The position of the end of the state's sequence of accepting
//    tokens
//
//  - The number of outgoing edges for the state
//
//  - The accepting tokens, as (token id, group mask) pairs
//
//  - The outgoing edges, as (start character, end character, state
//    index) triples, with end character being exclusive
//
// This function interprets that data, running through a stream as
// long as new states with the a matching group mask can be reached,
// and updating `input.token` when it matches a token.
function readToken(data, input, stack, group, precTable, precOffset) {
    let state = 0, groupMask = 1 << group, { dialect } = stack.p.parser;
    scan: for(;;){
        if ((groupMask & data[state]) == 0) break;
        let accEnd = data[state + 1];
        // Check whether this state can lead to a token in the current group
        // Accept tokens in this state, possibly overwriting
        // lower-precedence / shorter tokens
        for(let i = state + 3; i < accEnd; i += 2)if ((data[i + 1] & groupMask) > 0) {
            let term = data[i];
            if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || overrides(term, input.token.value, precTable, precOffset))) {
                input.acceptToken(term);
                break;
            }
        }
        let next = input.next, low = 0, high = data[state + 2];
        // Special case for EOF
        if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535 /* Seq.End */ ) {
            state = data[accEnd + high * 3 - 1];
            continue scan;
        }
        // Do a binary search on the state's edges
        for(; low < high;){
            let mid = low + high >> 1;
            let index = accEnd + mid + (mid << 1);
            let from = data[index], to = data[index + 1] || 0x10000;
            if (next < from) high = mid;
            else if (next >= to) low = mid + 1;
            else {
                state = data[index + 2];
                input.advance();
                continue scan;
            }
        }
        break;
    }
}
function findOffset(data, start, term) {
    for(let i = start, next; (next = data[i]) != 65535 /* Seq.End */ ; i++)if (next == term) return i - start;
    return -1;
}
function overrides(token, prev, tableData, tableOffset) {
    let iPrev = findOffset(tableData, tableOffset, prev);
    return iPrev < 0 || findOffset(tableData, tableOffset, token) < iPrev;
}
// Environment variable used to control console output
const verbose = typeof process != "undefined" && process.env && /\bparse\b/.test(undefined);
let stackIDs = null;
function cutAt(tree, pos, side) {
    let cursor = tree.cursor((0, _common.IterMode).IncludeAnonymous);
    cursor.moveTo(pos);
    for(;;){
        if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos))) for(;;){
            if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError) return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25 /* Safety.Margin */ )) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25 /* Safety.Margin */ ));
            if (side < 0 ? cursor.prevSibling() : cursor.nextSibling()) break;
            if (!cursor.parent()) return side < 0 ? 0 : tree.length;
        }
    }
}
class FragmentCursor {
    constructor(fragments, nodeSet){
        this.fragments = fragments;
        this.nodeSet = nodeSet;
        this.i = 0;
        this.fragment = null;
        this.safeFrom = -1;
        this.safeTo = -1;
        this.trees = [];
        this.start = [];
        this.index = [];
        this.nextFragment();
    }
    nextFragment() {
        let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (fr) {
            this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
            this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
            while(this.trees.length){
                this.trees.pop();
                this.start.pop();
                this.index.pop();
            }
            this.trees.push(fr.tree);
            this.start.push(-fr.offset);
            this.index.push(0);
            this.nextStart = this.safeFrom;
        } else this.nextStart = 1e9;
    }
    // `pos` must be >= any previously given `pos` for this cursor
    nodeAt(pos) {
        if (pos < this.nextStart) return null;
        while(this.fragment && this.safeTo <= pos)this.nextFragment();
        if (!this.fragment) return null;
        for(;;){
            let last = this.trees.length - 1;
            if (last < 0) {
                this.nextFragment();
                return null;
            }
            let top = this.trees[last], index = this.index[last];
            if (index == top.children.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
                continue;
            }
            let next = top.children[index];
            let start = this.start[last] + top.positions[index];
            if (start > pos) {
                this.nextStart = start;
                return null;
            }
            if (next instanceof (0, _common.Tree)) {
                if (start == pos) {
                    if (start < this.safeFrom) return null;
                    let end = start + next.length;
                    if (end <= this.safeTo) {
                        let lookAhead = next.prop((0, _common.NodeProp).lookAhead);
                        if (!lookAhead || end + lookAhead < this.fragment.to) return next;
                    }
                }
                this.index[last]++;
                if (start + next.length >= Math.max(this.safeFrom, pos)) {
                    this.trees.push(next);
                    this.start.push(start);
                    this.index.push(0);
                }
            } else {
                this.index[last]++;
                this.nextStart = start + next.length;
            }
        }
    }
}
class TokenCache {
    constructor(parser, stream){
        this.stream = stream;
        this.tokens = [];
        this.mainToken = null;
        this.actions = [];
        this.tokens = parser.tokenizers.map((_)=>new CachedToken);
    }
    getActions(stack) {
        let actionIndex = 0;
        let main = null;
        let { parser } = stack.p, { tokenizers } = parser;
        let mask = parser.stateSlot(stack.state, 3 /* ParseState.TokenizerMask */ );
        let context = stack.curContext ? stack.curContext.hash : 0;
        let lookAhead = 0;
        for(let i = 0; i < tokenizers.length; i++){
            if ((1 << i & mask) == 0) continue;
            let tokenizer = tokenizers[i], token = this.tokens[i];
            if (main && !tokenizer.fallback) continue;
            if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
                this.updateCachedToken(token, tokenizer, stack);
                token.mask = mask;
                token.context = context;
            }
            if (token.lookAhead > token.end + 25 /* Safety.Margin */ ) lookAhead = Math.max(token.lookAhead, lookAhead);
            if (token.value != 0 /* Term.Err */ ) {
                let startIndex = actionIndex;
                if (token.extended > -1) actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
                actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
                if (!tokenizer.extend) {
                    main = token;
                    if (actionIndex > startIndex) break;
                }
            }
        }
        while(this.actions.length > actionIndex)this.actions.pop();
        if (lookAhead) stack.setLookAhead(lookAhead);
        if (!main && stack.pos == this.stream.end) {
            main = new CachedToken;
            main.value = stack.p.parser.eofTerm;
            main.start = main.end = stack.pos;
            actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
        }
        this.mainToken = main;
        return this.actions;
    }
    getMainToken(stack) {
        if (this.mainToken) return this.mainToken;
        let main = new CachedToken, { pos, p } = stack;
        main.start = pos;
        main.end = Math.min(pos + 1, p.stream.end);
        main.value = pos == p.stream.end ? p.parser.eofTerm : 0 /* Term.Err */ ;
        return main;
    }
    updateCachedToken(token, tokenizer, stack) {
        let start = this.stream.clipPos(stack.pos);
        tokenizer.token(this.stream.reset(start, token), stack);
        if (token.value > -1) {
            let { parser } = stack.p;
            for(let i = 0; i < parser.specialized.length; i++)if (parser.specialized[i] == token.value) {
                let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
                if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
                    if ((result & 1) == 0 /* Specialize.Specialize */ ) token.value = result >> 1;
                    else token.extended = result >> 1;
                    break;
                }
            }
        } else {
            token.value = 0 /* Term.Err */ ;
            token.end = this.stream.clipPos(start + 1);
        }
    }
    putAction(action, token, end, index) {
        // Don't add duplicate actions
        for(let i = 0; i < index; i += 3)if (this.actions[i] == action) return index;
        this.actions[index++] = action;
        this.actions[index++] = token;
        this.actions[index++] = end;
        return index;
    }
    addActions(stack, token, end, index) {
        let { state } = stack, { parser } = stack.p, { data } = parser;
        for(let set = 0; set < 2; set++)for(let i = parser.stateSlot(state, set ? 2 /* ParseState.Skip */  : 1 /* ParseState.Actions */ );; i += 3){
            if (data[i] == 65535 /* Seq.End */ ) {
                if (data[i + 1] == 1 /* Seq.Next */ ) i = pair(data, i + 2);
                else {
                    if (index == 0 && data[i + 1] == 2 /* Seq.Other */ ) index = this.putAction(pair(data, i + 2), token, end, index);
                    break;
                }
            }
            if (data[i] == token) index = this.putAction(pair(data, i + 1), token, end, index);
        }
        return index;
    }
}
class Parse {
    constructor(parser, input, fragments, ranges){
        this.parser = parser;
        this.input = input;
        this.ranges = ranges;
        this.recovering = 0;
        this.nextStackID = 0x2654; // ♔, ♕, ♖, ♗, ♘, ♙, ♠, ♡, ♢, ♣, ♤, ♥, ♦, ♧
        this.minStackPos = 0;
        this.reused = [];
        this.stoppedAt = null;
        this.lastBigReductionStart = -1;
        this.lastBigReductionSize = 0;
        this.bigReductionCount = 0;
        this.stream = new InputStream(input, ranges);
        this.tokens = new TokenCache(parser, this.stream);
        this.topTerm = parser.top[1];
        let { from } = ranges[0];
        this.stacks = [
            Stack.start(this, parser.top[0], from)
        ];
        this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4 ? new FragmentCursor(fragments, parser.nodeSet) : null;
    }
    get parsedPos() {
        return this.minStackPos;
    }
    // Move the parser forward. This will process all parse stacks at
    // `this.pos` and try to advance them to a further position. If no
    // stack for such a position is found, it'll start error-recovery.
    //
    // When the parse is finished, this will return a syntax tree. When
    // not, it returns `null`.
    advance() {
        let stacks = this.stacks, pos = this.minStackPos;
        // This will hold stacks beyond `pos`.
        let newStacks = this.stacks = [];
        let stopped, stoppedTokens;
        // If a large amount of reductions happened with the same start
        // position, force the stack out of that production in order to
        // avoid creating a tree too deep to recurse through.
        // (This is an ugly kludge, because unfortunately there is no
        // straightforward, cheap way to check for this happening, due to
        // the history of reductions only being available in an
        // expensive-to-access format in the stack buffers.)
        if (this.bigReductionCount > 300 /* Rec.MaxLeftAssociativeReductionCount */  && stacks.length == 1) {
            let [s] = stacks;
            while(s.forceReduce() && s.stack.length && s.stack[s.stack.length - 2] >= this.lastBigReductionStart);
            this.bigReductionCount = this.lastBigReductionSize = 0;
        }
        // Keep advancing any stacks at `pos` until they either move
        // forward or can't be advanced. Gather stacks that can't be
        // advanced further in `stopped`.
        for(let i = 0; i < stacks.length; i++){
            let stack = stacks[i];
            for(;;){
                this.tokens.mainToken = null;
                if (stack.pos > pos) newStacks.push(stack);
                else if (this.advanceStack(stack, newStacks, stacks)) continue;
                else {
                    if (!stopped) {
                        stopped = [];
                        stoppedTokens = [];
                    }
                    stopped.push(stack);
                    let tok = this.tokens.getMainToken(stack);
                    stoppedTokens.push(tok.value, tok.end);
                }
                break;
            }
        }
        if (!newStacks.length) {
            let finished = stopped && findFinished(stopped);
            if (finished) {
                if (verbose) console.log("Finish with " + this.stackID(finished));
                return this.stackToTree(finished);
            }
            if (this.parser.strict) {
                if (verbose && stopped) console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
                throw new SyntaxError("No parse at " + pos);
            }
            if (!this.recovering) this.recovering = 5 /* Rec.Distance */ ;
        }
        if (this.recovering && stopped) {
            let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
            if (finished) {
                if (verbose) console.log("Force-finish " + this.stackID(finished));
                return this.stackToTree(finished.forceAll());
            }
        }
        if (this.recovering) {
            let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3 /* Rec.MaxRemainingPerStep */ ;
            if (newStacks.length > maxRemaining) {
                newStacks.sort((a, b)=>b.score - a.score);
                while(newStacks.length > maxRemaining)newStacks.pop();
            }
            if (newStacks.some((s)=>s.reducePos > pos)) this.recovering--;
        } else if (newStacks.length > 1) {
            // Prune stacks that are in the same state, or that have been
            // running without splitting for a while, to avoid getting stuck
            // with multiple successful stacks running endlessly on.
            outer: for(let i = 0; i < newStacks.length - 1; i++){
                let stack = newStacks[i];
                for(let j = i + 1; j < newStacks.length; j++){
                    let other = newStacks[j];
                    if (stack.sameState(other) || stack.buffer.length > 500 /* Rec.MinBufferLengthPrune */  && other.buffer.length > 500 /* Rec.MinBufferLengthPrune */ ) {
                        if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) newStacks.splice(j--, 1);
                        else {
                            newStacks.splice(i--, 1);
                            continue outer;
                        }
                    }
                }
            }
            if (newStacks.length > 12 /* Rec.MaxStackCount */ ) newStacks.splice(12 /* Rec.MaxStackCount */ , newStacks.length - 12 /* Rec.MaxStackCount */ );
        }
        this.minStackPos = newStacks[0].pos;
        for(let i = 1; i < newStacks.length; i++)if (newStacks[i].pos < this.minStackPos) this.minStackPos = newStacks[i].pos;
        return null;
    }
    stopAt(pos) {
        if (this.stoppedAt != null && this.stoppedAt < pos) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = pos;
    }
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` and `stacks` are
    // given, stacks split off by ambiguous operations will be pushed to
    // `split`, or added to `stacks` if they move `pos` forward.
    advanceStack(stack, stacks, split) {
        let start = stack.pos, { parser } = this;
        let base = verbose ? this.stackID(stack) + " -> " : "";
        if (this.stoppedAt != null && start > this.stoppedAt) return stack.forceReduce() ? stack : null;
        if (this.fragments) {
            let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
            for(let cached = this.fragments.nodeAt(start); cached;){
                let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                if (match > -1 && cached.length && (!strictCx || (cached.prop((0, _common.NodeProp).contextHash) || 0) == cxHash)) {
                    stack.useNode(cached, match);
                    if (verbose) console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
                    return true;
                }
                if (!(cached instanceof (0, _common.Tree)) || cached.children.length == 0 || cached.positions[0] > 0) break;
                let inner = cached.children[0];
                if (inner instanceof (0, _common.Tree) && cached.positions[0] == 0) cached = inner;
                else break;
            }
        }
        let defaultReduce = parser.stateSlot(stack.state, 4 /* ParseState.DefaultReduce */ );
        if (defaultReduce > 0) {
            stack.reduce(defaultReduce);
            if (verbose) console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535 /* Action.ValueMask */ )})`);
            return true;
        }
        if (stack.stack.length >= 8400 /* Rec.CutDepth */ ) {
            while(stack.stack.length > 6000 /* Rec.CutTo */  && stack.forceReduce());
        }
        let actions = this.tokens.getActions(stack);
        for(let i = 0; i < actions.length;){
            let action = actions[i++], term = actions[i++], end = actions[i++];
            let last = i == actions.length || !split;
            let localStack = last ? stack : stack.split();
            let main = this.tokens.mainToken;
            localStack.apply(action, term, main ? main.start : localStack.pos, end);
            if (verbose) console.log(base + this.stackID(localStack) + ` (via ${(action & 65536 /* Action.ReduceFlag */ ) == 0 ? "shift" : `reduce of ${parser.getName(action & 65535 /* Action.ValueMask */ )}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
            if (last) return true;
            else if (localStack.pos > start) stacks.push(localStack);
            else split.push(localStack);
        }
        return false;
    }
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `pushStackDedup`.
    advanceFully(stack, newStacks) {
        let pos = stack.pos;
        for(;;){
            if (!this.advanceStack(stack, null, null)) return false;
            if (stack.pos > pos) {
                pushStackDedup(stack, newStacks);
                return true;
            }
        }
    }
    runRecovery(stacks, tokens, newStacks) {
        let finished = null, restarted = false;
        for(let i = 0; i < stacks.length; i++){
            let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
            let base = verbose ? this.stackID(stack) + " -> " : "";
            if (stack.deadEnd) {
                if (restarted) continue;
                restarted = true;
                stack.restart();
                if (verbose) console.log(base + this.stackID(stack) + " (restarted)");
                let done = this.advanceFully(stack, newStacks);
                if (done) continue;
            }
            let force = stack.split(), forceBase = base;
            for(let j = 0; force.forceReduce() && j < 10 /* Rec.ForceReduceLimit */ ; j++){
                if (verbose) console.log(forceBase + this.stackID(force) + " (via force-reduce)");
                let done = this.advanceFully(force, newStacks);
                if (done) break;
                if (verbose) forceBase = this.stackID(force) + " -> ";
            }
            for (let insert of stack.recoverByInsert(token)){
                if (verbose) console.log(base + this.stackID(insert) + " (via recover-insert)");
                this.advanceFully(insert, newStacks);
            }
            if (this.stream.end > stack.pos) {
                if (tokenEnd == stack.pos) {
                    tokenEnd++;
                    token = 0 /* Term.Err */ ;
                }
                stack.recoverByDelete(token, tokenEnd);
                if (verbose) console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
                pushStackDedup(stack, newStacks);
            } else if (!finished || finished.score < stack.score) finished = stack;
        }
        return finished;
    }
    // Convert the stack's buffer to a syntax tree.
    stackToTree(stack) {
        stack.close();
        return (0, _common.Tree).build({
            buffer: StackBufferCursor.create(stack),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: stack.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm
        });
    }
    stackID(stack) {
        let id = (stackIDs || (stackIDs = new WeakMap)).get(stack);
        if (!id) stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
        return id + stack;
    }
}
function pushStackDedup(stack, newStacks) {
    for(let i = 0; i < newStacks.length; i++){
        let other = newStacks[i];
        if (other.pos == stack.pos && other.sameState(stack)) {
            if (newStacks[i].score < stack.score) newStacks[i] = stack;
            return;
        }
    }
    newStacks.push(stack);
}
class Dialect {
    constructor(source, flags, disabled){
        this.source = source;
        this.flags = flags;
        this.disabled = disabled;
    }
    allows(term) {
        return !this.disabled || this.disabled[term] == 0;
    }
}
const id = (x)=>x;
/**
Context trackers are used to track stateful context (such as
indentation in the Python grammar, or parent elements in the XML
grammar) needed by external tokenizers. You declare them in a
grammar file as `@context exportName from "module"`.

Context values should be immutable, and can be updated (replaced)
on shift or reduce actions.

The export used in a `@context` declaration should be of this
type.
*/ class ContextTracker {
    /**
    Define a context tracker.
    */ constructor(spec){
        this.start = spec.start;
        this.shift = spec.shift || id;
        this.reduce = spec.reduce || id;
        this.reuse = spec.reuse || id;
        this.hash = spec.hash || (()=>0);
        this.strict = spec.strict !== false;
    }
}
/**
Holds the parse tables for a given grammar, as generated by
`lezer-generator`, and provides [methods](#common.Parser) to parse
content with.
*/ class LRParser extends (0, _common.Parser) {
    /**
    @internal
    */ constructor(spec){
        super();
        /**
        @internal
        */ this.wrappers = [];
        if (spec.version != 14 /* File.Version */ ) throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${14 /* File.Version */ })`);
        let nodeNames = spec.nodeNames.split(" ");
        this.minRepeatTerm = nodeNames.length;
        for(let i = 0; i < spec.repeatNodeCount; i++)nodeNames.push("");
        let topTerms = Object.keys(spec.topRules).map((r)=>spec.topRules[r][1]);
        let nodeProps = [];
        for(let i = 0; i < nodeNames.length; i++)nodeProps.push([]);
        function setProp(nodeID, prop, value) {
            nodeProps[nodeID].push([
                prop,
                prop.deserialize(String(value))
            ]);
        }
        if (spec.nodeProps) for (let propSpec of spec.nodeProps){
            let prop = propSpec[0];
            if (typeof prop == "string") prop = (0, _common.NodeProp)[prop];
            for(let i = 1; i < propSpec.length;){
                let next = propSpec[i++];
                if (next >= 0) setProp(next, prop, propSpec[i++]);
                else {
                    let value = propSpec[i + -next];
                    for(let j = -next; j > 0; j--)setProp(propSpec[i++], prop, value);
                    i++;
                }
            }
        }
        this.nodeSet = new (0, _common.NodeSet)(nodeNames.map((name, i)=>(0, _common.NodeType).define({
                name: i >= this.minRepeatTerm ? undefined : name,
                id: i,
                props: nodeProps[i],
                top: topTerms.indexOf(i) > -1,
                error: i == 0,
                skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
            })));
        if (spec.propSources) this.nodeSet = this.nodeSet.extend(...spec.propSources);
        this.strict = false;
        this.bufferLength = (0, _common.DefaultBufferLength);
        let tokenArray = decodeArray(spec.tokenData);
        this.context = spec.context;
        this.specializerSpecs = spec.specialized || [];
        this.specialized = new Uint16Array(this.specializerSpecs.length);
        for(let i = 0; i < this.specializerSpecs.length; i++)this.specialized[i] = this.specializerSpecs[i].term;
        this.specializers = this.specializerSpecs.map(getSpecializer);
        this.states = decodeArray(spec.states, Uint32Array);
        this.data = decodeArray(spec.stateData);
        this.goto = decodeArray(spec.goto);
        this.maxTerm = spec.maxTerm;
        this.tokenizers = spec.tokenizers.map((value)=>typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
        this.topRules = spec.topRules;
        this.dialects = spec.dialects || {};
        this.dynamicPrecedences = spec.dynamicPrecedences || null;
        this.tokenPrecTable = spec.tokenPrec;
        this.termNames = spec.termNames || null;
        this.maxNode = this.nodeSet.types.length - 1;
        this.dialect = this.parseDialect();
        this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(input, fragments, ranges) {
        let parse = new Parse(this, input, fragments, ranges);
        for (let w of this.wrappers)parse = w(parse, input, fragments, ranges);
        return parse;
    }
    /**
    Get a goto table entry @internal
    */ getGoto(state, term, loose = false) {
        let table = this.goto;
        if (term >= table[0]) return -1;
        for(let pos = table[term + 1];;){
            let groupTag = table[pos++], last = groupTag & 1;
            let target = table[pos++];
            if (last && loose) return target;
            for(let end = pos + (groupTag >> 1); pos < end; pos++)if (table[pos] == state) return target;
            if (last) return -1;
        }
    }
    /**
    Check if this state has an action for a given terminal @internal
    */ hasAction(state, terminal) {
        let data = this.data;
        for(let set = 0; set < 2; set++)for(let i = this.stateSlot(state, set ? 2 /* ParseState.Skip */  : 1 /* ParseState.Actions */ ), next;; i += 3){
            if ((next = data[i]) == 65535 /* Seq.End */ ) {
                if (data[i + 1] == 1 /* Seq.Next */ ) next = data[i = pair(data, i + 2)];
                else if (data[i + 1] == 2 /* Seq.Other */ ) return pair(data, i + 2);
                else break;
            }
            if (next == terminal || next == 0 /* Term.Err */ ) return pair(data, i + 1);
        }
        return 0;
    }
    /**
    @internal
    */ stateSlot(state, slot) {
        return this.states[state * 6 /* ParseState.Size */  + slot];
    }
    /**
    @internal
    */ stateFlag(state, flag) {
        return (this.stateSlot(state, 0 /* ParseState.Flags */ ) & flag) > 0;
    }
    /**
    @internal
    */ validAction(state, action) {
        return !!this.allActions(state, (a)=>a == action ? true : null);
    }
    /**
    @internal
    */ allActions(state, action) {
        let deflt = this.stateSlot(state, 4 /* ParseState.DefaultReduce */ );
        let result = deflt ? action(deflt) : undefined;
        for(let i = this.stateSlot(state, 1 /* ParseState.Actions */ ); result == null; i += 3){
            if (this.data[i] == 65535 /* Seq.End */ ) {
                if (this.data[i + 1] == 1 /* Seq.Next */ ) i = pair(this.data, i + 2);
                else break;
            }
            result = action(pair(this.data, i + 1));
        }
        return result;
    }
    /**
    Get the states that can follow this one through shift actions or
    goto jumps. @internal
    */ nextStates(state) {
        let result = [];
        for(let i = this.stateSlot(state, 1 /* ParseState.Actions */ );; i += 3){
            if (this.data[i] == 65535 /* Seq.End */ ) {
                if (this.data[i + 1] == 1 /* Seq.Next */ ) i = pair(this.data, i + 2);
                else break;
            }
            if ((this.data[i + 2] & 1) == 0) {
                let value = this.data[i + 1];
                if (!result.some((v, i)=>i & 1 && v == value)) result.push(this.data[i], value);
            }
        }
        return result;
    }
    /**
    Configure the parser. Returns a new parser instance that has the
    given settings modified. Settings not provided in `config` are
    kept from the original parser.
    */ configure(config) {
        // Hideous reflection-based kludge to make it easy to create a
        // slightly modified copy of a parser.
        let copy = Object.assign(Object.create(LRParser.prototype), this);
        if (config.props) copy.nodeSet = this.nodeSet.extend(...config.props);
        if (config.top) {
            let info = this.topRules[config.top];
            if (!info) throw new RangeError(`Invalid top rule name ${config.top}`);
            copy.top = info;
        }
        if (config.tokenizers) copy.tokenizers = this.tokenizers.map((t)=>{
            let found = config.tokenizers.find((r)=>r.from == t);
            return found ? found.to : t;
        });
        if (config.specializers) {
            copy.specializers = this.specializers.slice();
            copy.specializerSpecs = this.specializerSpecs.map((s, i)=>{
                let found = config.specializers.find((r)=>r.from == s.external);
                if (!found) return s;
                let spec = Object.assign(Object.assign({}, s), {
                    external: found.to
                });
                copy.specializers[i] = getSpecializer(spec);
                return spec;
            });
        }
        if (config.contextTracker) copy.context = config.contextTracker;
        if (config.dialect) copy.dialect = this.parseDialect(config.dialect);
        if (config.strict != null) copy.strict = config.strict;
        if (config.wrap) copy.wrappers = copy.wrappers.concat(config.wrap);
        if (config.bufferLength != null) copy.bufferLength = config.bufferLength;
        return copy;
    }
    /**
    Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
    are registered for this parser.
    */ hasWrappers() {
        return this.wrappers.length > 0;
    }
    /**
    Returns the name associated with a given term. This will only
    work for all terms when the parser was generated with the
    `--names` option. By default, only the names of tagged terms are
    stored.
    */ getName(term) {
        return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    /**
    The eof term id is always allocated directly after the node
    types. @internal
    */ get eofTerm() {
        return this.maxNode + 1;
    }
    /**
    The type of top node produced by the parser.
    */ get topNode() {
        return this.nodeSet.types[this.top[1]];
    }
    /**
    @internal
    */ dynamicPrecedence(term) {
        let prec = this.dynamicPrecedences;
        return prec == null ? 0 : prec[term] || 0;
    }
    /**
    @internal
    */ parseDialect(dialect) {
        let values = Object.keys(this.dialects), flags = values.map(()=>false);
        if (dialect) for (let part of dialect.split(" ")){
            let id = values.indexOf(part);
            if (id >= 0) flags[id] = true;
        }
        let disabled = null;
        for(let i = 0; i < values.length; i++)if (!flags[i]) for(let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535 /* Seq.End */ ;)(disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
        return new Dialect(dialect, flags, disabled);
    }
    /**
    Used by the output of the parser generator. Not available to
    user code. @hide
    */ static deserialize(spec) {
        return new LRParser(spec);
    }
}
function pair(data, off) {
    return data[off] | data[off + 1] << 16;
}
function findFinished(stacks) {
    let best = null;
    for (let stack of stacks){
        let stopped = stack.p.stoppedAt;
        if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(stack.state, 2 /* StateFlag.Accepting */ ) && (!best || best.score < stack.score)) best = stack;
    }
    return best;
}
function getSpecializer(spec) {
    if (spec.external) {
        let mask = spec.extend ? 1 /* Specialize.Extend */  : 0 /* Specialize.Specialize */ ;
        return (value, stack)=>spec.external(value, stack) << 1 | mask;
    }
    return spec.get;
}

},{"d88a62f5f4081843":"d5jf4","@lezer/common":"6NJEQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jsjL6","8lqZg"], "8lqZg", "parcelRequire18fe")

//# sourceMappingURL=index.975ef6c8.js.map
