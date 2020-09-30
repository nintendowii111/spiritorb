"use strict";
/*:
╔════════════════╗
║ Plugin Manager ║
╚════════════════╝
 * @plugindesc v1.10 - This Key-Mapper is for plugin-developers and for other scripts that require this plugin.
 * @author Squirting Elephant
   ╔══════╗
   ║ Help ║
   ╚══════╝
 * @help
 * License: Public Domain or CC0.
 *
 * Example usage:
 * var myKey = SE.Keys.fromStringParam('pageup');
 * SE.Minimap.ScrollKey = SE.Keys.fromStringParam(SE.Parameters['home']);
 * Note: string-value is NOT case-sensitive
 
 * Example usage 2 (press home-key and watch console window):
 * 
 * var myKey = SE.Keys.fromStringParam('home');
 * 
 *  (function()
 *  {	
 *   var test2 = Input.update;
 *   Input.update = function()
 *   {
 *     test2.call(this);
 *     if (Input.isPressed(myKey)){ console.log('PRESSED!, key used: ' + myKey); }
 *   }
 *  })();
 *
 * Overrides & Aliases:
 * * <None>
 *
 * Version History:
 * v1.10 (28 September 2019)
 * - Updated this plugin for the latest version of RMMV and SE_Keys.
 * - Changed the names from Silv --> SE.
 * - Added and used a new function removeHiddenControlCharacters() because of an old bug in RMMV.
 */

/*╔═══════════════════════╗
  ║ Plugin Initialization ║
  ╚═══════════════════════╝*/
var Imported = Imported || {};
Imported.SE_Keys = { name: 'SE_Keys', version: 1.10, author: 'Squirting Elephant', date:'2019-09-28'};
var SE = SE || {};
SE.Keys = {}

/*╔═════════════╗
  ║ Key Mapping ║
  ╚═════════════╝*/
SE.Keys.MappingInv =
{
	'':-1,
	'none':-1,
	
	'backspace':8,
	'tab':9,
	'enter':13,
	'shift':16,
	'control':17,
	'alt':18,
	'pause':19,
	'capslock':20,
	'escape':27,
	'space':32,
	'pageup':33,
	'pagedown':34,
	'end':35,
	'home':36,
	'left':37,
	'up':38,
	'right':39,
	'down':40,
	'insert':45,
	'delete':46,
	
	'0':48,
	'1':49,
	'2':50,
	'3':51,
	'4':52,
	'5':53,
	'6':54,
	'7':55,
	'8':56,
	'9':57,
	
	'a':65,
	'b':66,
	'c':67,
	'd':68,
	'e':69,
	'f':70,
	'g':71,
	'h':72,
	'i':73,
	'j':74,
	'k':75,
	'l':76,
	'm':77,
	'n':78,
	'o':79,
	'p':80,
	'q':81,
	'r':82,
	's':83,
	't':84,
	'u':85,
	'v':86,
	'w':87,
	'x':88,
	'y':89,
	'z':90,
	
	'windows_left':91,
	'windows_right':92,
	'media':93,
	
	'numpad0':96,
	'numpad1':97,
	'numpad2':98,
	'numpad3':99,
	'numpad4':100,
	'numpad5':101,
	'numpad6':102,
	'numpad7':103,
	'numpad8':104,
	'numpad9':105,
	
	'*':106,
	'+':107,
	'-':109, // same as 189
	'.':110,
	'/':111,
	
	'f1':112,
	'f2':113,
	'f3':114,
	'f4':115,
	'f5':116,
	'f6':117,
	'f7':118,
	'f8':119,
	'f19':120,
	'f10':121,
	'f11':122,
	'f12':123,
	
	'numlock':144,
	'num_lock':144,
	'scrolllock':145,
	'scroll_lock':145,
	';':186,
	'semicolon':186,
	'semi_colon':186,
	'=':187,
	'equal':187,
	'equal_sign':187,
	',':188,
	'comma':188,
	//'-':189, // duplicate of 109
	'.':190,
	'dot':190,
	'decimal':190,
	'decimal_point':190,
	'decimal_dot':190,
	'/':191,
	'forwardslash':191,
	'forward_slash':191,
	'grave_accent':192,
	'graveaccent':192,
	'[':219,
	'openbracket':219,
	'open_bracket':219,
	'backslash':220,
	']':221,
	'closebracket':221,
	'close_bracket':221,
	'single_quote':222
};
//Input.keyMapper[36] = 'home sweet home'; // DEBUG
//Input.keyMapper[121] = 'f10'; // DEBUG
//Input.keyMapper[187] = 'gregnergnreiogneiogneoi'; // DEBUG, yes even this works!
SE.Keys.fromStringParam = function(key_str)
{
	// The removal of hidden control characters MUST be performaned because RMMV still bugs after so many years. See: https://forums.rpgmakerweb.com/index.php?threads/parameter-string-does-not-equal-string.113697/
	key_str = key_str.replace('\r', '').toLowerCase();

	var keyCode = SE.Keys.MappingInv[key_str];
	if (keyCode === undefined) { throw 'No key found for: ' + key_str; }
	if (Input.keyMapper[keyCode] === undefined) { Input.keyMapper[keyCode] = key_str; }
	return Input.keyMapper[keyCode];
}
/*╔═════════════╗
  ║ End of File ║
  ╚═════════════╝*/