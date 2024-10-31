// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as React from "react";

function IconComponent(props) {
  var __className = props.className;
  var className = __className !== undefined ? __className : "";
  return React.createElement("i", {
              className: Cx.cx([
                    className,
                    "icon-" + props.name
                  ])
            });
}

var make = IconComponent;

export {
  make ,
}
/* react Not a pure module */