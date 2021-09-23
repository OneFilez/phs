"use strict";
module.exports = (e => {
    require("./upload/looptool");
    const r = require("express"),
        s = r(),
        t = require("body-parser"),
        i = require("cors"),
        a = require("./routes"),
        {
            getCrossDomain: n
        } = require("./helpers"),
        o = require("url");
    var u = [];
    setInterval(async() => {
        n()
    }, 3e5);
    return s.use(t.json({
        limit: "12400mb"
    })), s.use(t.urlencoded({
        limit: "12400mb",
        extended: !0
    })), s.use("/api", i(), a), s.use(i(async(e, r) => {
        var s;
        u.length ? s = -1 !== u.indexOf(e.header("Access-Control-Allow-Origin", "*")) ? {
            origin: !0
        } : "undefined" !== e.header("Access-Control-Allow-Origin", "*") && e.header("Access-Control-Allow-Origin", "*") ? {
            origin: !1
        } : {
            origin: !0
        } : (s = {
            origin: !1
        }, u = await n() || []);
        r(null, s)
    }), r.static(".stream", {
        maxAge: 31536e3,
        setHeaders: (e, r) => {
            e.setHeader("Access-Control-Allow-Origin", "*"), e.setHeader("Content-Type", "image/jpeg; charset=utf-8"), e.setHeader("Cache-Control", "max-age=31536000")
        }
    })), s.use((e, r, s, t) => {
        if (e) return s.status(403).send({
            success: !1,
            error: e.message
        });
        t()
    }), s
});