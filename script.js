// import { myJsonString } from './API/JSON_API.js';

//! ========================
//! INITIALIZATION VARIABLES
//! ========================

var randomBaseUrlLog = "";
var randomCategoryLog = "";
var randomLinkLog = "";

var json_object = "";

var choiceSelected = 0;

var languageSelected = "FR";

//! ========================
//! INITIALIZATION VARIABLES
//! ========================

//! ========================
//! DOCUMENT READY
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
  if (choiceSelected) {
    randomBaseUrlLog = "https://developer.mozilla.org/fr/docs/Web";
    randomCategoryLog = stringChoiceSelected;
    randomLinkLog =
      randomBaseUrlLog +
      "/" +
      encodeURIComponent(randomCategoryLog.replace(/\s/g, "_"));
  } else {
    getRandomLink();
  }

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
      "Javascript",
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
        arrayLink = [
          "Global_Objects/AggregateError",
          "Global_Objects/Array",
          "Global_Objects/ArrayBuffer",
          "Global_Objects/AsyncFunction",
          "Global_Objects/AsyncGenerator",
          "Global_Objects/AsyncGeneratorFunction",
          "Global_Objects/AsyncIterator",
          "Global_Objects/Atomics",
          "Global_Objects/BigInt",
          "Global_Objects/BigInt64Array",
          "Global_Objects/BigUint64Array",
          "Global_Objects/Boolean",
          "Global_Objects/DataView",
          "Global_Objects/Date",
          "Global_Objects/decodeURI",
          "Global_Objects/decodeURIComponent",
          "Global_Objects/encodeURI",
          "Global_Objects/encodeURIComponent",
          "Global_Objects/Error",
          "Global_Objects/escape",
          "Global_Objects/eval",
          "Global_Objects/EvalError",
          "Global_Objects/FinalizationRegistry",
          "Global_Objects/Float32Array",
          "Global_Objects/Float64Array",
          "Global_Objects/Function",
          "Global_Objects/Generator",
          "Global_Objects/GeneratorFunction",
          "Global_Objects/globalThis",
          "Global_Objects/Infinity",
          "Global_Objects/Int16Array",
          "Global_Objects/Int32Array",
          "Global_Objects/Int8Array",
          "Global_Objects/InternalError",
          "Global_Objects/Intl",
          "Global_Objects/isFinite",
          "Global_Objects/isNaN",
          "Global_Objects/Iterator",
          "Global_Objects/JSON",
          "Global_Objects/Map",
          "Global_Objects/Math",
          "Global_Objects/NaN",
          "Global_Objects/Number",
          "Global_Objects/Object",
          "Global_Objects/parseFloat",
          "Global_Objects/parseInt",
          "Global_Objects/Promise",
          "Global_Objects/Proxy",
          "Global_Objects/RangeError",
          "Global_Objects/ReferenceError",
          "Global_Objects/Reflect",
          "Global_Objects/RegExp",
          "Global_Objects/Set",
          "Global_Objects/SharedArrayBuffer",
          "Global_Objects/String",
          "Global_Objects/Symbol",
          "Global_Objects/SyntaxError",
          "Global_Objects/TypedArray",
          "Global_Objects/TypeError",
          "Global_Objects/Uint16Array",
          "Global_Objects/Uint32Array",
          "Global_Objects/Uint8Array",
          "Global_Objects/Uint8ClampedArray",
          "Global_Objects/undefined",
          "Global_Objects/unescape",
          "Global_Objects/URIError",
          "Global_Objects/WeakMap",
          "Global_Objects/WeakRef",
          "Global_Objects/WeakSet",
          "Operators/Addition",
          "Operators/Addition_assignment",
          "Operators/Assignment",
          "Operators/async_function_expression",
          "Operators/async_function*_expression",
          "Operators/await",
          "Operators/Bitwise_AND",
          "Operators/Bitwise_AND_assignment",
          "Operators/Bitwise_NOT",
          "Operators/Bitwise_OR",
          "Operators/Bitwise_OR_assignment",
          "Operators/Bitwise_XOR",
          "Operators/Bitwise_XOR_assignment",
          "Operators/class_expression",
          "Operators/Comma_operator",
          "Operators/Conditional_ternary_operator",
          "Operators/Decrement",
          "Operators/delete_operator",
          "Operators/Destructuring_assignment",
          "Operators/Division",
          "Operators/Division_assignment",
          "Operators/Equality",
          "Operators/Exponentiation",
          "Operators/Exponentiation_assignment",
          "Operators/Function_expression",
          "Operators/function*_expression",
          "Operators/Greater_than",
          "Operators/Greater_than_or_equal",
          "Operators/Grouping_operator",
          "Operators/import.meta",
          "Operators/Function_call_operator",
          "Operators/in_operator",
          "Operators/Increment",
          "Operators/Inequality",
          "Operators/instanceof",
          "Operators/Left_shift",
          "Operators/Left_shift_assignment",
          "Operators/Less_than",
          "Operators/Less_than_or_equal",
          "Operators/Logical_AND",
          "Operators/Logical_AND_assignment",
          "Operators/Logical_NOT",
          "Operators/Logical_OR",
          "Operators/Logical_OR_assignment",
          "Operators/Multiplication",
          "Operators/Multiplication_assignment",
          "Operators/new_operator",
          "Operators/new.target",
          "Operators/null",
          "Operators/Nullish_coalescing_assignment",
          "Operators/Nullish_coalescing_operator",
          "Operators/Object_initializer",
          "Operators/Operator_precedence",
          "Operators/Optional_chaining",
          "Operators/Property_accessors",
          "Operators/Remainder",
          "Operators/Remainder_assignment",
          "Operators/Right_shift",
          "Operators/Right_shift_assignment",
          "Operators/Spread_syntax",
          "Operators/Strict_equality",
          "Operators/Strict_inequality",
          "Operators/Subtraction",
          "Operators/Subtraction_assignment",
          "Operators/super",
          "Operators/this",
          "Operators/typeof",
          "Operators/Unary_negation",
          "Operators/Unary_plus",
          "Operators/Unsigned_right_shift",
          "Operators/Unsigned_right_shift_assignment",
          "Operators/void",
          "Operators/yield",
          "Operators/yield*",
          "Statements/async_function",
          "Statements/async_function*",
          "Statements/block",
          "Statements/break",
          "Statements/class",
          "Statements/const",
          "Statements/continue",
          "Statements/debugger",
          "Statements/do...while",
          "Statements/empty",
          "Statements/export",
          "Statements/Expression_statement",
          "Statements/for",
          "Statements/for_await...of",
          "Statements/for...in",
          "Statements/for...of",
          "Statements/function_declaration",
          "Statements/function*",
          "Statements/if...else",
          "Statements/import",
          "Statements/label",
          "Statements/let",
          "Statements/return",
          "Statements/switch",
          "Statements/throw",
          "Statements/try...catch",
          "Statements/var",
          "Statements/while",
          "Statements/with",
          "Functions/Arrow_function_expressions",
          "Functions/Default_parameters",
          "Functions/get",
          "Functions/Method_definitions",
          "Functions/Rest_parameters",
          "Functions/set",
          "Functions/The_arguments_object",
          "Classes/constructor",
          "Classes/extends",
          "Classes/Private_class_features",
          "Classes/Public_class_fields",
          "Classes/static",
          "Classes/Static_initialization_blocks",
          "Regular_expressions/Backreference",
          "Regular_expressions/Capturing_group",
          "Regular_expressions/Character_class_escape",
          "Regular_expressions/Character_class",
          "Regular_expressions/Character_escape",
          "Regular_expressions/Disjunction",
          "Regular_expressions/Input_boundary_assertion",
          "Regular_expressions/Literal_character",
          "Regular_expressions/Lookahead_assertion",
          "Regular_expressions/Lookbehind_assertion",
          "Regular_expressions/Named_backreference",
          "Regular_expressions/Named_capturing_group",
          "Regular_expressions/Non-capturing_group",
          "Regular_expressions/Quantifier",
          "Regular_expressions/Unicode_character_class_escape",
          "Regular_expressions/Wildcard",
          "Regular_expressions/Word_boundary_assertion",
          "Errors/already_has_pragma",
          "Errors/array_sort_argument",
          "Errors/bad_await",
          "Errors/bad_break",
          "Errors/bad_continue",
          "Errors/bad_radix",
          "Errors/bad_regexp_flag",
          "Errors/bad_return",
          "Errors/bigint_division_by_zero",
          "Errors/bigint_negative_exponent",
          "Errors/called_on_incompatible_type",
          "Errors/cant_access_lexical_declaration_before_init",
          "Errors/cant_assign_to_property",
          "Errors/cant_be_converted_to_bigint_because_it_isnt_an_integer",
          "Errors/cant_convert_bigint_to_number",
          "Errors/cant_convert_x_to_bigint",
          "Errors/cant_define_property_object_not_extensible",
          "Errors/cant_delete",
          "Errors/cant_redefine_property",
          "Errors/cant_use_nullish_coalescing_unparenthesized",
          "Errors/cyclic_object_value",
          "Errors/delete_in_strict_mode",
          "Errors/deprecated_caller_or_arguments_usage",
          "Errors/deprecated_octal",
          "Errors/deprecated_source_map_pragma",
          "Errors/equal_as_assign",
          "Errors/getter_only",
          "Errors/hash_outside_class",
          "Errors/identifier_after_number",
          "Errors/illegal_character",
          "Errors/in_operator_no_object",
          "Errors/invalid_array_length",
          "Errors/invalid_assignment_left-hand_side",
          "Errors/invalid_bigint_syntax",
          "Errors/invalid_const_assignment",
          "Errors/invalid_date",
          "Errors/invalid_for-in_initializer",
          "Errors/invalid_for-of_initializer",
          "Errors/invalid_right_hand_side_instanceof_operand",
          "Errors/is_not_iterable",
          "Errors/json_bad_parse",
          "Errors/label_not_found",
          "Errors/malformed_uri",
          "Errors/missing_bracket_after_list",
          "Errors/missing_colon_after_property_id",
          "Errors/missing_curly_after_function_body",
          "Errors/missing_curly_after_property_list",
          "Errors/missing_formal_parameter",
          "Errors/missing_initializer_in_const",
          "Errors/missing_name_after_dot_operator",
          "Errors/missing_parenthesis_after_argument_list",
          "Errors/missing_parenthesis_after_condition",
          "Errors/missing_semicolon_before_statement",
          "Errors/more_arguments_needed",
          "Errors/negative_repetition_count",
          "Errors/no_non-null_object",
          "Errors/no_properties",
          "Errors/no_variable_name",
          "Errors/non_configurable_array_element",
          "Errors/not_a_constructor",
          "Errors/not_a_function",
          "Errors/not_a_valid_code_point",
          "Errors/not_defined",
          "Errors/precision_range",
          "Errors/property_access_denied",
          "Errors/read-only",
          "JavaScript_technologies_overview",
          "Lexical_grammar",
          "Iteration_protocols",
          "Strict_mode",
          "Template_literals",
          "Trailing_commas",
          "Deprecated_features",
        ];
        category = "JavaScript/Reference";
        break;
      // case "HTTP":
      // break;
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

function choiceTheme(numberTheme) {
  // 1 = HTML
  // 2 = CSS
  // 3 = Javascript

  switch (numberTheme) {
    case 0: // Color in white
      choiceSelected = 0;
      document.getElementById("HTMLTheme").style.backgroundColor = "#FFFFFF";
      document.getElementById("CSSTheme").style.backgroundColor = "#FFFFFF";
      document.getElementById("JSTheme").style.backgroundColor = "#FFFFFF";
      break;
    case 1:
      choiceSelected = 1;
      stringChoiceSelected = "HTML";
      document.getElementById("HTMLTheme").style.backgroundColor = "#0FFF00"; // Color in light green
      document.getElementById("CSSTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      document.getElementById("JSTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      break;
    case 2:
      choiceSelected = 1;
      stringChoiceSelected = "CSS";
      document.getElementById("HTMLTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      document.getElementById("CSSTheme").style.backgroundColor = "#0FFF00"; // Color in light green
      document.getElementById("JSTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      break;
    case 3:
      choiceSelected = 1;
      stringChoiceSelected = "Javascript";
      document.getElementById("HTMLTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      document.getElementById("CSSTheme").style.backgroundColor = "#FFFFFF"; // Color in white
      document.getElementById("JSTheme").style.backgroundColor = "#0FFF00"; // Color in light green
      break;
  }
}

function chooseLanguage() {
  var switchButton = document.querySelector("#button div.switchButton");
  var slider = switchButton.querySelector(".slider");

  if (languageSelected == "FR") {
    // Transform to EN
    // switchButton.style.justifyContent = "flex-end";
    slider.style.transform = "translateX(170%)"; // Déplacer le slider vers la droite
    document.querySelector('#button div.switchButton span').innerHTML = "EN";
  } else {
    // Transform to FR
    // switchButton.style.justifyContent = "flex-start";
    slider.style.transform = "translateX(0)"; // Déplacer le slider vers la gauche (position initiale)
    document.querySelector('#button div.switchButton span').innerHTML = "FR";
  }

  languageSelected = languageSelected == "FR" ? "EN" : "FR";
}

//! ========================
//! FUNCTIONS
//! ========================

//! ========================
//! DARK AND LIGHT MODE
//! ========================

document.addEventListener("DOMContentLoaded", () => {
  const sun =
    "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const moon =
    "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

  var theme = "dark";
  const root = document.querySelector(":root");
  const container = document.querySelectorAll(".theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }

  function setLight() {
    root.style.setProperty("--change-darkAndLight", "#ffffff");
    root.style.setProperty("--change-darkAndLightSecond", "#120534");
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }

  function setDark() {
    root.style.setProperty("--change-darkAndLight", "#120534");
    root.style.setProperty("--change-darkAndLightSecond", "#ffffff");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }
});

//! ========================
//! DARK AND LIGHT MODE
//! ========================

//! ========================
//! JSON
//! ========================

//? function getJSON()
//! paramètres : **
//! retour : un objet JSON
//* fonctionnement : récupère un objet JSON
//? creat by : Pierr.
function getJSON() {}
