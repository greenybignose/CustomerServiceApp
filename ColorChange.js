var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Boxes from './Boxes';
import LocStorage from './LocStorage';
var ColorChange = function () {
    var objectwarna = [];
    var warna = ["#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E", "#16A085",
        "#27AE60", "#2C3E50", "#F1C40F", "#E67E22", "#E74C3C", "#ECF0F1", "#95A5A6", "#F39C12", "#D35400", "#C0392B",
        "#BDC3C7", "#7F8C8D"];
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var _b = useState({ satu: '', dua: '', tiga: '', empat: '', even: '' }), inputgroup = _b[0], setInputgroup = _b[1];
    var _c = useState(function () {
        for (var x = 0; x < warna.length; x++) {
            objectwarna.push({ color: warna[x],
                visibility: "visible" });
        }
        return objectwarna;
    }), colorobj = _c[0], setColorobj = _c[1];
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    function saturation(i, v) {
        var min = i.indexOf(Math.min.apply(this, i)), //returns the index of min, max and mid.
        max = i.indexOf(Math.max.apply(this, i)), mid = parseInt([0, 1, 2].filter(function (j) { return Array(min, max).indexOf(j) < 0; }).toString()), r = (i[max] - i[mid]) / (i[mid] - i[min]), //ratio, because it is always constant,
        //we use this to calc mid value
        o = []; //o as in output
        if (min !== max) {
            o[max] = Math.round(i[max]);
            o[min] = Math.round(i[max] * (1 - v));
            o[mid] = Math.round(o[max] / (r + 1) * v + i[max] * (1 - v));
        }
        return o;
    }
    ;
    function becomecolor(event) {
        event.stopPropagation();
        var upinputgroup = inputgroup;
        if (event.target.name === "satu") {
            if (inputgroup.satu === '') {
                upinputgroup.satu = "checked";
                upinputgroup.even = "satu";
                event.target.checked = true;
            }
            else if (inputgroup.satu === "checked") {
                upinputgroup.satu = '';
                upinputgroup.even = "satu";
            }
            setInputgroup(upinputgroup);
            if (inputgroup.satu === "checked" && inputgroup.even === "satu") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).r < 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(128, hexToRgb(object.color).g, hexToRgb(object.color).b).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
            else if (inputgroup.satu === '' && inputgroup.even === "satu") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).r >= 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(hexToRgb(warna[index]).r, hexToRgb(object.color).g, hexToRgb(object.color).b).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
        }
        if (event.target.name === "dua") {
            if (inputgroup.dua === '') {
                upinputgroup.dua = "checked";
                upinputgroup.even = "dua";
            }
            else if (inputgroup.dua === "checked") {
                upinputgroup.dua = '';
                upinputgroup.even = "dua";
            }
            setInputgroup(upinputgroup);
            if (inputgroup.dua === "checked" && inputgroup.even === "dua") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).g < 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(hexToRgb(object.color).r, 128, hexToRgb(object.color).b).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
            else if (inputgroup.dua === '' && inputgroup.even === "dua") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).g >= 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(warna[index]).g, hexToRgb(object.color).b).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
        }
        if (event.target.name === "tiga") {
            if (inputgroup.tiga === '') {
                upinputgroup.tiga = "checked";
                upinputgroup.even = "tiga";
            }
            else if (inputgroup.tiga === "checked") {
                upinputgroup.tiga = '';
                upinputgroup.even = "tiga";
            }
            setInputgroup(upinputgroup);
            if (inputgroup.tiga === "checked" && inputgroup.even === "tiga") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).b < 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(object.color).g, 128).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
            else if (inputgroup.tiga === '' && inputgroup.even === "tiga") {
                colorobj.map(function (object, index) {
                    if (hexToRgb(object.color).b >= 128) {
                        var updateone = __assign({}, colorobj[index]);
                        updateone.color = rgbToHex(hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(warna[index]).b).toUpperCase();
                        updatenow[index] = updateone;
                    }
                });
                setColorobj(updatenow);
            }
        }
        if (event.target.name === "empat") {
            if (inputgroup.empat === '') {
                upinputgroup.empat = "checked";
                upinputgroup.even = "empat";
            }
            else if (inputgroup.empat === "checked") {
                upinputgroup.empat = '';
                upinputgroup.even = "empat";
            }
            setInputgroup(upinputgroup);
            if (inputgroup.empat === "checked" && inputgroup.even === "empat") {
                colorobj.map(function (object, index) {
                    var a = [hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(object.color).b];
                    var updateone = __assign({}, colorobj[index]);
                    updateone.color = rgbToHex(saturation(a, 0.6)[0], saturation(a, 0.6)[1], saturation(a, 0.6)[2]).toUpperCase();
                    updatenow[index] = updateone;
                });
                setColorobj(updatenow);
            }
            else if (inputgroup.empat === '' && inputgroup.even === "empat") {
                colorobj.map(function (object, index) {
                    var a = [hexToRgb(object.color).r, hexToRgb(object.color).g, hexToRgb(object.color).b];
                    var updateone = __assign({}, colorobj[index]);
                    updateone.color = rgbToHex(saturation(a, 0)[0], saturation(a, 0)[1], saturation(a, 0)[2]).toUpperCase();
                    updatenow[index] = updateone;
                });
                setColorobj(updatenow);
            }
        }
    }
    var updatenow = __spreadArray([], colorobj, true);
    var tai = [];
    var _loop_1 = function (x) {
        tai.push(_jsx(Boxes, { ngumpetatas: colorobj[x].visibility, colornowatas: colorobj[x].color, onclicked: function (e) { return runhide(x); } }));
    };
    for (var x = 0; x < colorobj.length; x++) {
        _loop_1(x);
    }
    ;
    var runhide = function (e) {
        var updatenow = __spreadArray([], colorobj, true);
        var updateone = __assign({}, colorobj[e]);
        updateone.visibility = "hidden";
        updatenow[e] = updateone;
        setColorobj(updatenow);
    };
    var lala = [];
    var _loop_2 = function (z) {
        lala.push(_jsx(LocStorage, { colornowlala: localStorage.getItem(z.toString()), onclicklala: function (e) { return removestor(z.toString()); } }));
    };
    for (var z = 0; z < count; z++) {
        _loop_2(z);
    }
    var removestor = function (z) {
        localStorage.removeItem(z);
        var newcount = count;
        newcount -= 1;
        setCount(newcount);
    };
    var resultnya = '';
    var handleChangecol = function (event) {
        resultnya = event.target.value;
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        var reg = /^#{1}[A-Z0-9]{6}$/;
        if (resultnya.match(reg)) {
            var colorstr = resultnya;
            localStorage.setItem(count.toString(), colorstr);
            var getnow = localStorage.getItem(count.toString()).toString();
            var newcount = count;
            newcount += 1;
            setCount(newcount);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", __assign({ onSubmit: function (e) { return handleSubmit(e); } }, { children: [_jsx("label", { children: "Add new color:" }), "  ", _jsx("input", { type: "text", name: "inputcolor", size: 40, onChange: function (e) { return handleChangecol(e); } }), _jsx("input", { type: "submit", value: "Add" })] })), _jsxs("form", { children: [_jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "satu", onChange: function (e) { return becomecolor(e); } }), " Red ", '>', " 50%   "] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "dua", onChange: function (e) { return becomecolor(e); } }), "  Green ", '>', " 50%    "] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "tiga", onChange: function (e) { return becomecolor(e); } }), "Blue ", '>', " 50%   "] }), _jsxs("label", { children: [_jsx("input", { type: "checkbox", name: "empat", onChange: function (e) { return becomecolor(e); } }), "Saturation ", '>', " 50%     "] })] }), _jsxs("div", { children: [tai, lala] })] }));
};
export default ColorChange;
