"use strict";

function Persone() {
    var attribute = {};

    this.set = function(key, value) {
        attribute[key] = value;
    };

    this.get = function(key) {
        return attribute[key];
    };

    return this;
}