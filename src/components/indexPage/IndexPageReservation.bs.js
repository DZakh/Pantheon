// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Reference from "../../Reference.bs.js";
import * as IconComponent from "../IconComponent.bs.js";
import * as HeadingComponent from "../HeadingComponent.bs.js";
import * as ContainerComponent from "../ContainerComponent.bs.js";
import * as IndexPageReservationModuleScss from "./IndexPageReservation.module.scss";

var css = IndexPageReservationModuleScss;

function IndexPageReservation(props) {
  return React.createElement("section", {
              className: css.reservationSection,
              id: props.id
            }, React.createElement(ContainerComponent.make, {
                  className: css.inner,
                  children: null
                }, React.createElement(HeadingComponent.make, {
                      className: css.heading,
                      children: "Забронировать время"
                    }), React.createElement("ul", {
                      className: css.sources
                    }, React.createElement("li", undefined, React.createElement("a", {
                              className: css.source,
                              href: "tel:" + Reference.telNumber
                            }, React.createElement(IconComponent.make, {
                                  className: css.sourceIcon,
                                  name: "phone"
                                }), React.createElement("div", {
                                  className: css.sourceLink
                                }, "По телефону: ", React.createElement("span", {
                                      className: css.sourceLinkPhone
                                    }, Reference.telNumber)))), React.createElement("li", undefined, React.createElement("a", {
                              className: css.source,
                              href: Reference.vkLink,
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, React.createElement(IconComponent.make, {
                                  className: css.sourceIcon,
                                  name: "vk"
                                }), React.createElement("div", {
                                  className: css.sourceLink
                                }, "Через ВКонтакте"))), React.createElement("li", undefined, React.createElement("a", {
                              className: css.source,
                              href: Reference.whatsappLink,
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, React.createElement(IconComponent.make, {
                                  className: css.sourceIcon,
                                  name: "whatsapp"
                                }), React.createElement("div", {
                                  className: css.sourceLink
                                }, "По WhatsApp"))), React.createElement("li", undefined, React.createElement("a", {
                              className: css.source,
                              href: Reference.instLink,
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, React.createElement(IconComponent.make, {
                                  className: css.sourceIcon,
                                  name: "instagram"
                                }), React.createElement("div", {
                                  className: css.sourceLink
                                }, "Через Instagram"))))));
}

var make = IndexPageReservation;

export {
  css ,
  make ,
}
/* css Not a pure module */