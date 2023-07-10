//! ========================
//! INITIALIZATION VARIABLES
//! ========================

var randomBaseUrlLog = "";
var randomCategoryLog = "";
var randomLinkLog = "";

//! ========================
//! INITIALIZATION VARIABLES
//! ========================

//! ========================
//! FUNCTIONS
//! ========================

//? function getRandomLinkMDN()
//! paramètres : aucun
//! retour : un lien aléatoire vers MDN
//* fonctionnement : sélectionne une URL de base aléatoire, puis une catégorie aléatoire en fonction de l'URL de base choisie, encode l'URL de la catégorie sélectionnée et la concatène à l'URL de base pour former le lien final
//? creat by : Pierr.
function getRandomLinkMDN() {
  getRandomLink();

  var urlLink = randomBaseUrlLog.split("/").pop();

  var randomLink = getRandomLinkByTheme(randomCategoryLog, urlLink);

  console.error("randomLink", randomLink);

  document.getElementById("linkMDN").innerHTML = randomLink;
  document.getElementById("linkMDN").href = randomLink;
}

//? function getRandomLink()
//! paramètres : aucun
//! retour : un lien aléatoire vers MDN
//* fonctionnement : sélectionne une URL de base aléatoire, puis une catégorie aléatoire en fonction de l'URL de base choisie, encode l'URL de la catégorie sélectionnée et la concatène à l'URL de base pour former le lien final
//? creat by : Pierr.
function getRandomLink() {
  const baseUrls = [
    "https://developer.mozilla.org/fr/docs/Web",
    // "https://developer.mozilla.org/fr/docs/Mozilla/Add-ons",
    // "https://developer.mozilla.org/fr/docs/Learn",
  ];

  const categories = {
    "https://developer.mozilla.org/fr/docs/Web": [
      "HTML",
      "CSS",
      //   "Javascript",
      //   "HTTP",
    ],
    // "https://developer.mozilla.org/fr/docs/Mozilla/Add-ons": ["WebExtensions"],
    // "https://developer.mozilla.org/fr/docs/Learn": [
    //   "HTML",
      //   "CSS",
      //   "Javascript",
      //   "Accessibility",
    // ],
  };

  // Sélectionne une URL de base aléatoire
  const randomBaseUrl = baseUrls[Math.floor(Math.random() * baseUrls.length)];
  // Sélectionne une catégorie aléatoire en fonction de l'URL de base choisie
  const randomCategory =
    categories[randomBaseUrl][
      Math.floor(Math.random() * categories[randomBaseUrl].length)
    ];

  // Encode l'URL de la catégorie sélectionnée et la concatène à l'URL de base pour former le lien final
  const randomLink =
    randomBaseUrl +
    "/" +
    encodeURIComponent(randomCategory.replace(/\s/g, "_"));

  // Stocke les valeurs de l'URL de base et de la catégorie sélectionnées dans les variables globales randomBaseUrlLog et randomCategoryLog, respectivement, pour une utilisation ultérieure
  randomBaseUrlLog = randomBaseUrl;
  randomCategoryLog = randomCategory;
  randomLinkLog = randomLink;

  return randomLink;
}

//? function getRandomLinkByTheme()
//! paramètres : category, urlLink
//! retour : un lien aléatoire vers MDN en fonction de la catégorie et de l'urlLink
//* fonctionnement : sélectionne une URL de base aléatoire, puis une catégorie aléatoire en fonction de l'URL de base choisie, encode l'URL de la catégorie sélectionnée et la concatène à l'URL de base pour former le lien final
//? creat by : Pierr.
function getRandomLinkByTheme(category, urlLink) {
  console.warn("category", category);
  console.warn("urlLink", urlLink);

  //? On créer un tableau par rapport a tout les liens possible de MDN en fonction de la catégorie
  var arrayLink = [];
  var randomLink = "";

  if (urlLink == "Web") {
    switch (category) {
      case "HTML":
        randomLink = "Element/";
        arrayLink = [
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "image",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "nobr",
          "noembed",
          "noframes",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "plaintext",
          "portal",
          "pre",
          "progress",
          "q",
          "rb",
          "rp",
          "rt",
          "rtc",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "slot",
          "small",
          "source",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "xmp",
        ];
        break;
      case "CSS":
        arrayLink = [
          "align-content",
          "align-items",
          "align-self",
          "all",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "block-size",
          "border",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "clip-path",
          "color",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "content",
          "counter-increment",
          "counter-reset",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "filter",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "font",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-optical-sizing",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-alternates",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-weight",
          "gap",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-gap",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-gap",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "initial-letter",
          "initial-letter-align",
          "inline-size",
          "inset",
          "inset-block",
          "inset-block-end",
          "inset-block-start",
          "inset-inline",
          "inset-inline-end",
          "inset-inline-start",
          "isolation",
          "justify-content",
          "justify-items",
          "justify-self",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-block-end",
          "margin-block-start",
          "margin-bottom",
          "margin-inline-end",
          "margin-inline-start",
          "margin-left",
          "margin-right",
          "margin-top",
          "mask",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "object-fit",
          "object-position",
          "offset",
          "offset-anchor",
          "offset-distance",
          "offset-path",
          "offset-position",
          "offset-rotate",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-anchor",
          "overflow-block",
          "overflow-inline",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "overscroll-behavior",
          "overscroll-behavior-block",
          "overscroll-behavior-inline",
          "overscroll-behavior-x",
          "overscroll-behavior-y",
          "padding",
          "padding-block-end",
          "padding-block-start",
          "padding-bottom",
          "padding-inline-end",
          "padding-inline-start",
          "padding-left",
          "padding-right",
          "padding-top",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "place-content",
          "place-items",
          "place-self",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "right",
          "rotate",
          "row-gap",
          "ruby-align",
          "ruby-merge",
          "ruby-position",
          "scale",
          "scroll-behavior",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-stop",
          "scroll-snap-type",
          "scrollbar-color",
          "scrollbar-gutter",
          "scrollbar-width",
          "shape-image-threshold",
          "shape-margin",
          "shape-outside",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-skip-ink",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-size-adjust",
          "text-transform",
          "text-underline-position",
          "top",
          "touch-action",
          "transform",
          "transform-box",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "translate",
          "unicode-bidi",
          "user-select",
          "vertical-align",
          "visibility",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
        ];
        break;
      case "Javascript":
        break;
      case "HTTP":
        break;
    }
  } else if (urlLink == "Add-ons") {
    switch (category) {
      case "WebExtensions":
        break;
    }
  } else if (urlLink == "Learn") {
    switch (category) {
      case "HTML":
        break;
      case "CSS":
        break;
      case "Javascript":
        break;
      case "Accessibility":
        break;
    }
  }

  if (arrayLink.length > 0) {
    randomLink += arrayLink[Math.floor(Math.random() * arrayLink.length)];
  }

  switch (urlLink) {
    case "Web":
      randomLink =
        "https://developer.mozilla.org/fr/docs/Web/" +
        category +
        "/" +
        randomLink;
      break;
    case "Add-ons":
      randomLink =
        "https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/" +
        category +
        "/" +
        randomLink;
      break;
    case "Learn":
      randomLink =
        "https://developer.mozilla.org/fr/docs/Learn/" +
        category +
        "/" +
        randomLink;
      break;
  }

  return randomLink;
}

//! ========================
//! FUNCTIONS
//! ========================
