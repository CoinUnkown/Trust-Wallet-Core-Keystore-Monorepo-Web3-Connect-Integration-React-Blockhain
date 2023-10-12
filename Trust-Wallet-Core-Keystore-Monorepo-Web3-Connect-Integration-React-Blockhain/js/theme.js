.pragma library;

var darkTheme             = true;
var borderWidth           = 5;
var lineSize              = 2;
var roundness             = 6;
var containerRadius       = 30;

var _l_containerBackgroundColor   = "#2E3542";
var _l_buttonbackgroundColor      = "#17B0E7";
var _l_containerBorderColor       = "#17B0E7";
var _l_buttonBorderColor          = "#ffffff";
var _l_textColor                  = "#ffffff";

var _d_containerBackgroundColor   = "#2E3542";
var _d_buttonbackgroundColor      = "#17B0E7";
var _d_containerBorderColor       = "#17B0E7";
var _d_buttonBorderColor          = "#ffffff";
var _d_textColor                  = "#ffffff";

var containerBackgroundColor      = darkTheme ? _l_containerBackgroundColor : _d_containerBackgroundColor;
var buttonbackgroundColor         = darkTheme ? _l_buttonbackgroundColor : _d_buttonbackgroundColor;
var containeBorderColor           = darkTheme ? _l_containerBorderColor : _d_containerBorderColor;
var buttonBorderColor             = darkTheme ? _l_buttonBorderColor : _d_buttonBorderColor;
var textColor                     = darkTheme ? _l_textColor : _d_textColor;