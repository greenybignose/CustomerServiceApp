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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Div, Button } from './Button';
var LocStorage = function (_a) {
    var colornowlala = _a.colornowlala, onclicklala = _a.onclicklala;
    return (_jsxs(Div, __assign({ ngumpet: "visible" }, { children: [_jsx(Button, __assign({ colornow: colornowlala }, { children: "    " })), _jsxs("div", { children: [colornowlala, " "] }), _jsx("div", { children: _jsx("input", { type: "checkbox", onClick: onclicklala }) })] })));
};
export default LocStorage;
