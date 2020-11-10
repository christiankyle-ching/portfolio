// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/budget-planner/logo.jpg":[function(require,module,exports) {
module.exports = "/logo.f0658501.jpg";
},{}],"images/budget-planner/dark.jpg":[function(require,module,exports) {
module.exports = "/dark.ea99ba3f.jpg";
},{}],"images/budget-planner/summary.jpg":[function(require,module,exports) {
module.exports = "/summary.977d44dc.jpg";
},{}],"images/budget-planner/toplist.jpg":[function(require,module,exports) {
module.exports = "/toplist.5a4bf0d0.jpg";
},{}],"images/budget-planner/savings.jpg":[function(require,module,exports) {
module.exports = "/savings.08418274.jpg";
},{}],"images/budget-planner/help.jpg":[function(require,module,exports) {
module.exports = "/help.12e089e5.jpg";
},{}],"images/budget-planner/backup.jpg":[function(require,module,exports) {
module.exports = "/backup.7ab56962.jpg";
},{}],"images/roomfiles/logo.jpg":[function(require,module,exports) {
module.exports = "/logo.fa8ace00.jpg";
},{}],"images/roomfiles/files.jpg":[function(require,module,exports) {
module.exports = "/files.43eff383.jpg";
},{}],"images/roomfiles/announcements.jpg":[function(require,module,exports) {
module.exports = "/announcements.6cd379f0.jpg";
},{}],"images/roomfiles/notifications.jpg":[function(require,module,exports) {
module.exports = "/notifications.acdf72c7.jpg";
},{}],"images/roomfiles/people.jpg":[function(require,module,exports) {
module.exports = "/people.a1b67b82.jpg";
},{}],"images/roomfiles/room.jpg":[function(require,module,exports) {
module.exports = "/room.b3e9ca6b.jpg";
},{}],"images/roomfiles/rooms.png":[function(require,module,exports) {
module.exports = "/rooms.1f74e226.png";
},{}],"images/edzer/logo.png":[function(require,module,exports) {
module.exports = "/logo.dc467a62.png";
},{}],"images/edzer/add.jpg":[function(require,module,exports) {
module.exports = "/add.b7327c24.jpg";
},{}],"images/edzer/dashboard.jpg":[function(require,module,exports) {
module.exports = "/dashboard.8ed168d1.jpg";
},{}],"images/edzer/instruments.jpg":[function(require,module,exports) {
module.exports = "/instruments.ee71ab65.jpg";
},{}],"images/edzer/login.jpg":[function(require,module,exports) {
module.exports = "/login.a199fddb.jpg";
},{}],"images/edzer/schedules.jpg":[function(require,module,exports) {
module.exports = "/schedules.2f1378fa.jpg";
},{}],"images/nasa-apod/logo.png":[function(require,module,exports) {
module.exports = "/logo.9a9e2b3b.png";
},{}],"images/nasa-apod/date.jpg":[function(require,module,exports) {
module.exports = "/date.0ba6daf6.jpg";
},{}],"images/nasa-apod/detail.jpg":[function(require,module,exports) {
module.exports = "/detail.83d2ff43.jpg";
},{}],"images/nasa-apod/favorites.jpg":[function(require,module,exports) {
module.exports = "/favorites.ba94fc4c.jpg";
},{}],"images/nasa-apod/recents.jpg":[function(require,module,exports) {
module.exports = "/recents.7b06e674.jpg";
},{}],"images/nasa-apod/settings.jpg":[function(require,module,exports) {
module.exports = "/settings.98e644af.jpg";
},{}],"images/nasa-apod/share.jpg":[function(require,module,exports) {
module.exports = "/share.1b52958a.jpg";
},{}],"images/nasa-apod/wallpaper.jpg":[function(require,module,exports) {
module.exports = "/wallpaper.1d9ce57f.jpg";
},{}],"globals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("./images/budget-planner/logo.jpg"));

var _dark = _interopRequireDefault(require("./images/budget-planner/dark.jpg"));

var _summary = _interopRequireDefault(require("./images/budget-planner/summary.jpg"));

var _toplist = _interopRequireDefault(require("./images/budget-planner/toplist.jpg"));

var _savings = _interopRequireDefault(require("./images/budget-planner/savings.jpg"));

var _help = _interopRequireDefault(require("./images/budget-planner/help.jpg"));

var _backup = _interopRequireDefault(require("./images/budget-planner/backup.jpg"));

var _logo2 = _interopRequireDefault(require("./images/roomfiles/logo.jpg"));

var _files = _interopRequireDefault(require("./images/roomfiles/files.jpg"));

var _announcements = _interopRequireDefault(require("./images/roomfiles/announcements.jpg"));

var _notifications = _interopRequireDefault(require("./images/roomfiles/notifications.jpg"));

var _people = _interopRequireDefault(require("./images/roomfiles/people.jpg"));

var _room = _interopRequireDefault(require("./images/roomfiles/room.jpg"));

var _rooms = _interopRequireDefault(require("./images/roomfiles/rooms.png"));

var _logo3 = _interopRequireDefault(require("./images/edzer/logo.png"));

var _add = _interopRequireDefault(require("./images/edzer/add.jpg"));

var _dashboard = _interopRequireDefault(require("./images/edzer/dashboard.jpg"));

var _instruments = _interopRequireDefault(require("./images/edzer/instruments.jpg"));

var _login = _interopRequireDefault(require("./images/edzer/login.jpg"));

var _schedules = _interopRequireDefault(require("./images/edzer/schedules.jpg"));

var _logo4 = _interopRequireDefault(require("./images/nasa-apod/logo.png"));

var _date = _interopRequireDefault(require("./images/nasa-apod/date.jpg"));

var _detail = _interopRequireDefault(require("./images/nasa-apod/detail.jpg"));

var _favorites = _interopRequireDefault(require("./images/nasa-apod/favorites.jpg"));

var _recents = _interopRequireDefault(require("./images/nasa-apod/recents.jpg"));

var _settings = _interopRequireDefault(require("./images/nasa-apod/settings.jpg"));

var _share = _interopRequireDefault(require("./images/nasa-apod/share.jpg"));

var _wallpaper = _interopRequireDefault(require("./images/nasa-apod/wallpaper.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// #endregion

/**
 * Object of type Work
 * 
 * @param {string} title
 * @param {string} date_dev
 * @param {string} stack
 * @param {string} description
 * @param {Array<string>} features
 * @param {string} prefix
 * @param {WorkImage} images
 * @param {WorkLink[]} links
 */
var Work = function Work(title, prefix, date_dev, stack, description, features, images, links) {
  _classCallCheck(this, Work);

  this.title = title;
  this.date_dev = date_dev;
  this.stack = stack;
  this.description = description;
  this.features = features;
  this.prefix = prefix;
  this.images = images;
  this.links = links;
};
/**
 * A Image of a Work
 * 
 * @param {string} url
 * @param {string} label
 */


var WorkImage = function WorkImage(url, label) {
  _classCallCheck(this, WorkImage);

  this.url = url;
  this.label = label;
};
/**
 * A Link of a Work
 * 
 * @param {string} site
 * @param {string} url
 * @param {boolean} disabled
 */


var WorkLink = function WorkLink(site, url, disabled) {
  _classCallCheck(this, WorkLink);

  this.site = site;
  this.url = url;
  this.disabled = disabled;
};

var works = [new Work("NASA's APOD", "nasa_apod", "2020", "Flutter, Dart", "\n        <p>\n        <a href=\"https://analytics.usa.gov/national-aeronautics-space-administration/\">NASA's APOD</a> \n        is one of the most popular APIs by NASA, and while finding an API to enhance my skills, \n        and also catching into <a href=\"https://flutter.dev/\">Flutter</a>'s gaining popularity, \n        I decided to create an app to try showcase APOD other than \n        <a href=\"https://apod.nasa.gov/apod/\">NASA's single webpage</a>.\n        </p>\n        <p>\n        NOTE: NASA updates APOD some time after midnight of EST (Eastern Standard Time UTC-5).\n        If the app shows \"No Available APOD for today\", the next update time is estimated\n        based on your local timezone.\n        </p>\n        ", ["Browse astronomical pictures from NASA", "Set your home screen, lock screen, or both wallpapers to an image you liked", "Add your own favorite dates", "Enable daily changing home screen wallpaper based on the APOD (Astronomy Picture of the Day)", "Option to use HD images for wallpapers or not (to save data)"], [new WorkImage(_logo4.default, "NASA's APOD"), new WorkImage(_recents.default, "Browse the APOD Gallery"), new WorkImage(_settings.default, "Enable daily changing wallpaper"), new WorkImage(_detail.default, "View and read about each photo's background"), new WorkImage(_date.default, "Seek a memorable date"), new WorkImage(_favorites.default, "Give a star to your favorite dates"), new WorkImage(_share.default, "Share what you found"), new WorkImage(_wallpaper.default, "Set an image you liked as your wallpaper")], [new WorkLink('download', 'https://drive.google.com/file/d/13P11REdVTiO7q7ROiKCtTmGWM92LziYc/view?usp=sharing', false)]), // RoomFiles
new Work("RoomFiles", "roomfiles", "2020", "Django, Python", "\n        <p>\n        RoomFiles is a small project I made while learning Python and Django. Using \n        <a href=\"https://developers.google.com/drive\">Google Drive API</a>,\n        this simple web-app provides a place for users to upload files to (primarily lesson files \n        for online learning), make announcements, all in a virtual room. Due to the ongoing \n        (at the time of writing) pandemic situation, online learning is what our educational system\n        relies to, and this might help students store their lesson files on the cloud.\n        </p>\n        \n        <p>The web-app is up and available for viewing using the links below.</p>\n        ", ["Make a room and invite your colleagues", "Join multiple rooms at once", "Upload your lesson files", "Make announcements to stay on track", "View and manage people in your room (if you're the room creator)", "Get notified on recent activities"], [new WorkImage(_logo2.default, "RoomFiles"), new WorkImage(_room.default, "Create a room with your friends / colleagues!"), new WorkImage(_rooms.default, "Join / Create multiple rooms for your needs"), new WorkImage(_files.default, "Store and share your lesson files"), new WorkImage(_announcements.default, "Make announcements for everyone to see"), new WorkImage(_notifications.default, "Get notified on recent activities"), new WorkImage(_people.default, "Manage people in your room")], [new WorkLink('github', 'https://github.com/christiankyle-ching/roomfiles', false), new WorkLink('open', 'https://roomfiles.herokuapp.com/', false)]), // Budget Planner
new Work("Budget Planner", "budget", "2020", "Ionic, Angular", "\n        <p>\n        A simple budget planner that I made using <a href=\"https://ionicframework.com/\">Ionic</a>\n        / <a href=\"https://angular.io/\">Angular</a> stack. While starting to learn about Ionic, \n        it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschool\n        students that hopefully, they can use to track their allowances and expenses, and might encourage them\n        to save some of their money.\n        </p>\n        ", ["Day-to-day tracking of allowances and expenses", "Generate monthly summary, provide basic insight of expenditures and income", "Able to backup data to a file for later recovery", "Has a Help & Feedback feature that answers FAQs and provides an email box for suggestions"], [new WorkImage(_logo.default, "A simple budget planner made with Ionic"), new WorkImage(_dark.default, "Supports dark mode"), new WorkImage(_summary.default, "Generate montly overview"), new WorkImage(_toplist.default, "View your expenses"), new WorkImage(_savings.default, "Track your savings"), new WorkImage(_help.default, "Never feel clueless! I'm here."), new WorkImage(_backup.default, "Even supports local backup!")], [new WorkLink("github", "https://github.com/christiankyle-ching/budgetPlanner", false), new WorkLink("download", "https://drive.google.com/file/d/1U31DbJgD7HOfacY7kia3Tb92wUpA1Own/view?usp=sharing", false)]), // Edzer
new Work("Edzer Studio Schedule Management System", "edzer", "2019", "C#, MySQL", "\n        <p>\n        This is a group project that I made together with a team, as a requirement for one of my \n        database-related subjects on my 2nd year. Along with a planned database schema, an interview \n        with <a href=\"https://www.facebook.com/EDZERSTUDIO/\">Edzer Music Studio</a>, \n        this WPF application (C# and MySQL served on XAMPP) features a scheduling system with fees \n        computation based on hours and intrument rentals, intrument management, and a user panel for \n        the administrator to assign other users with less privileges to the system.\n        </p>\n        ", ["Schedule management that enables system user to create, update, and delete schedule records", "Notifies the system user (admin or an employee), on upcoming schedules about to start", "Able to calculate rental fee based on duration of rent, as well as add-ons (instrument rentals)", "Management of instruments available for rental", "User account control with two (2) levels of privileges (administrator and basic user)."], [new WorkImage(_logo3.default, "A Recording Studio Scheduling System"), new WorkImage(_login.default, "Login"), new WorkImage(_dashboard.default, "Dashboard Overview"), new WorkImage(_add.default, "Add Schedules"), new WorkImage(_schedules.default, "Be reminded of who's next"), new WorkImage(_instruments.default, "Manage Instruments")], [new WorkLink("github", "#", true)])];
var skills = [{
  language: "javascript",
  name: "Javascript",
  progress: 50,
  projectExample: "budget"
}, {
  language: "sql",
  name: "SQL",
  progress: 55,
  projectExample: "edzer"
}, {
  language: "python",
  name: "Python",
  progress: 40,
  projectExample: "roomfiles"
}, {
  language: "csharp",
  name: "C#",
  progress: 40,
  projectExample: "edzer"
}, {
  language: "java",
  name: "Java",
  progress: 30
}];

var Global = /*#__PURE__*/function () {
  function Global() {
    _classCallCheck(this, Global);
  }

  _createClass(Global, null, [{
    key: "works",
    get: function get() {
      return works;
    }
  }, {
    key: "skills",
    get: function get() {
      return skills;
    }
  }]);

  return Global;
}();

exports.default = Global;
},{"./images/budget-planner/logo.jpg":"images/budget-planner/logo.jpg","./images/budget-planner/dark.jpg":"images/budget-planner/dark.jpg","./images/budget-planner/summary.jpg":"images/budget-planner/summary.jpg","./images/budget-planner/toplist.jpg":"images/budget-planner/toplist.jpg","./images/budget-planner/savings.jpg":"images/budget-planner/savings.jpg","./images/budget-planner/help.jpg":"images/budget-planner/help.jpg","./images/budget-planner/backup.jpg":"images/budget-planner/backup.jpg","./images/roomfiles/logo.jpg":"images/roomfiles/logo.jpg","./images/roomfiles/files.jpg":"images/roomfiles/files.jpg","./images/roomfiles/announcements.jpg":"images/roomfiles/announcements.jpg","./images/roomfiles/notifications.jpg":"images/roomfiles/notifications.jpg","./images/roomfiles/people.jpg":"images/roomfiles/people.jpg","./images/roomfiles/room.jpg":"images/roomfiles/room.jpg","./images/roomfiles/rooms.png":"images/roomfiles/rooms.png","./images/edzer/logo.png":"images/edzer/logo.png","./images/edzer/add.jpg":"images/edzer/add.jpg","./images/edzer/dashboard.jpg":"images/edzer/dashboard.jpg","./images/edzer/instruments.jpg":"images/edzer/instruments.jpg","./images/edzer/login.jpg":"images/edzer/login.jpg","./images/edzer/schedules.jpg":"images/edzer/schedules.jpg","./images/nasa-apod/logo.png":"images/nasa-apod/logo.png","./images/nasa-apod/date.jpg":"images/nasa-apod/date.jpg","./images/nasa-apod/detail.jpg":"images/nasa-apod/detail.jpg","./images/nasa-apod/favorites.jpg":"images/nasa-apod/favorites.jpg","./images/nasa-apod/recents.jpg":"images/nasa-apod/recents.jpg","./images/nasa-apod/settings.jpg":"images/nasa-apod/settings.jpg","./images/nasa-apod/share.jpg":"images/nasa-apod/share.jpg","./images/nasa-apod/wallpaper.jpg":"images/nasa-apod/wallpaper.jpg"}],"index.js":[function(require,module,exports) {
"use strict"; // Import variables

var _globals = _interopRequireDefault(require("./globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _buildSkillItem(skill, itemTemplate) {
  // Inject skill-name and a.href
  var skillNameDiv = itemTemplate.querySelector(".skill-name");
  var skillLink = skillNameDiv.querySelector("a");
  skillLink.innerText = skill.name;

  if (skill.projectExample) {
    skillLink.href = "./works.html#".concat(skill.projectExample);
    skillLink.classList.add('underline');
  } // Inject skill percentage id


  var skillPercentage = skillNameDiv.querySelector("span");
  skillPercentage.id = "".concat(skill.language, "-value"); // Set width according to progress

  var progressbar = itemTemplate.querySelector(".progress-bar-container");
  progressbar.style.width = "".concat(skill.progress, "%");
  return itemTemplate;
}

function _animatePercentages() {
  var indexIntroDuration = 500;
  var animDurationms = indexIntroDuration + 100;
  var delay = indexIntroDuration + 500;
  setTimeout(function () {
    _globals.default.skills.forEach(function (s) {
      animateValue("".concat(s.language, "-value"), s.progress, animDurationms);
    });
  }, delay);

  function animateValue(id, end, durationms) {
    var obj = document.getElementById(id);
    var stepms = Math.floor(durationms / end);
    var start = 0;
    var timer = setInterval(function () {
      obj.innerText = "".concat(start, "%");

      if (start + 1 <= end) {
        start += 1;
      } else {
        clearInterval(timer);
      }
    }, stepms);
  }
} // index.html template


if ("content" in document.createElement("template")) {
  if (document.querySelector("#skill-template") != null) {
    var skillsList = document.querySelector("#ul-skillset");
    var template = document.querySelector("#skill-template");

    _globals.default.skills.forEach(function (skill) {
      var item = template.content.cloneNode(true);
      skillsList.appendChild(_buildSkillItem(skill, item));
    });

    _animatePercentages();
  }
} else {// TODO: Unsupported template tag
}
},{"./globals":"globals.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49821" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map