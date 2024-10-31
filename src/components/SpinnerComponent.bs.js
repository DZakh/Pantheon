// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as React from "react";
import * as SpinnerComponentModuleScss from "./SpinnerComponent.module.scss";

var css = SpinnerComponentModuleScss;

function SpinnerComponent(props) {
  var __inverted = props.inverted;
  var inverted = __inverted !== undefined ? __inverted : false;
  return React.createElement("div", {
              className: Cx.cx([
                    css.spinner,
                    inverted ? css.inverted : ""
                  ])
            }, React.createElement("div", {
                  className: css.ring
                }, React.createElement("div", undefined), React.createElement("div", undefined), React.createElement("div", undefined), React.createElement("div", undefined)));
}

var make = SpinnerComponent;

export {
  make ,
}
/* css Not a pure module */