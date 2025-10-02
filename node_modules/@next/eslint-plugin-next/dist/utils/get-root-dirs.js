"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRootDirs", {
    enumerable: true,
    get: function() {
        return getRootDirs;
    }
});
var _glob = require("glob");
/**
 * Process a Next.js root directory glob.
 */ var processRootDir = function(rootDir) {
    // Ensures we only match folders.
    if (!rootDir.endsWith("/")) rootDir += "/";
    return (0, _glob.globSync)(rootDir);
};
var getRootDirs = function(context) {
    var rootDirs = [
        context.getCwd()
    ];
    var nextSettings = context.settings.next || {};
    var rootDir = nextSettings.rootDir;
    if (typeof rootDir === "string") {
        rootDirs = processRootDir(rootDir);
    } else if (Array.isArray(rootDir)) {
        rootDirs = rootDir.map(function(dir) {
            return typeof dir === "string" ? processRootDir(dir) : [];
        }).flat();
    }
    return rootDirs;
};
