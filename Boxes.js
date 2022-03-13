import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Div, Button } from './Button.js';


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

var Boxes = function (_a) {
    var ngumpetatas = _a.ngumpetatas, colornowatas = _a.colornowatas, onclicked = _a.onclicked;
    return (_jsxs(Div, __assign({ ngumpet: ngumpetatas }, { children: [_jsx(Button, __assign({ colornow: colornowatas }, { children: "    " })), _jsx("div", { children: colornowatas }), _jsx("div", { children: _jsx("input", { type: "checkbox", onClick: onclicked }) })] })));
};
export default Boxes;
