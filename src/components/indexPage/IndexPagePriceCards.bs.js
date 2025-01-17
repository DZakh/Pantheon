// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cn from "rescript-classnames/src/Cn.bs.js";
import * as React from "react";
import * as IndexPagePriceCard from "./IndexPagePriceCard.bs.js";
import * as IndexPagePriceCardsModuleScss from "./IndexPagePriceCards.module.scss";

var css = IndexPagePriceCardsModuleScss;

function IndexPagePriceCards(props) {
  return React.createElement("div", {
              className: Cn.make([
                    css.container,
                    props.className
                  ])
            }, React.createElement("ul", {
                  className: css.priceCards
                }, props.priceCards.map(function (priceCard) {
                      return React.createElement("div", {
                                  key: priceCard.title
                                }, React.createElement(IndexPagePriceCard.make, {
                                      cardData: priceCard
                                    }));
                    })));
}

var make = IndexPagePriceCards;

export {
  css ,
  make ,
}
/* css Not a pure module */
