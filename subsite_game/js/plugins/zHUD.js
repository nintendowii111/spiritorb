/*:
 * zHUD.js
 *
 * @plugindesc (v0.8)
 * A Zelda-esque Head-Up Display.
 * 
 * @author dismal_science__, caethyril
 *
 * @help
 *
 * zHUD is a very rudimentary HP HUD, reminiscent to the style used in the 
 * Zelda series.
 *
 * zHUD is designed for use with single-actor games.
 *
 * zHUD uses a set of image files to indicate HP status.
 *
 *
 * =[ U S A G E ]===========================================================
 *
 * zHUD's filename must remain "zHUD.js" in order to work properly. 
 *
 * The example includes 33 image files, all named similarly with the 
 * prefix "zhud_x_hp_" and bearing the same width of "237" pixels.
 * 
 * The first image file- "zhud_x_hp_0.png"- represents the image shown when 
 * HP is at its lowest.
 *
 * The second image file- "zhud_x_hp_128.png"- represents the image shown 
 * when HP is full.
 *
 * The 31 images in-between represent the various possible HP states, in this 
 * case, increasing/reducing in increments of 4.
 *
 * The example uses 33 images, but the plug-in can use any number of files.
 * The plug-in adjusts depending on the ImgMax and LastImgSuffix parameters.
 *
 * For the included example, the parameter ImgMax should be set to "33" and 
 * LastImgSuffix should be set to "128".
 *
 * For this example, the ImgWidth parameter should be set to "237".  
 * This may be adjusted depending on the size of the image used.
 *
 * Place image files in your project's IMG/PICTURES folder.
 *
 * During gameplay, when HP reaches a critical low, zHUD activates an 
 * audible warning- specified in the LowHealthSE parameter.
 *
 * For the example- LowHealthSE is set to "LowHPBeep", which represents the 
 * audio files "LowHPBeep.ogg" and "LowHPBeep.m4a".
 *
 * Place audio files in the project's AUDIO/SE folder.
 *
 * SE_Interval represents the amount of time in milliseconds between beeping.  
 * It is set to "700" by default but may need to be adjusted depending on the 
 * length of the audio file that is used.
 *
 * Finally, the zActorID parameter is the number of the Actor whose HP will be 
 * displayed.
 *
 * zHUD usually updates its display automatically, but in cases where this 
 * doesn't happen, you may need to use a script call to do it manually.  
 *
 * Script call: dismal_sci.zHUD.refreshHUD();
 *
 *
 * =[ E T C . ]===========================================================
 *
 * zHUD is written by dismal_science__ and caethyril.
 *
 * zHUD is free for use in both commercial and non-commercial projects,
 * as long as both authors are credited accordingly.
 *
 * For updates and copies of the example files mentioned in this help file, 
 * please check out-
 *
 * https://ameblo.jp/dismal-science/entry-12454556656.html
 *
 * 
 * For more of Caethyril's plug-ins, please check out-
 * 
 * http://bit.ly/2UYQnpS
 *
 *
 * @param Prefix
 * @type text
 * @desc Filename prefix, ex. "zhud_x_hp_"
 * @default zhud_x_hp_
 *
 * @param ImgWidth
 * @type number
 * @desc Width of image (in pixels).
 * @default 237
 *
 * @param ImgMax
 * @type number
 * @desc Total number of images.
 * @default 33
 *
 * @param LastImgSuffix
 * @type number
 * @desc Suffix of last image in group.
 * @default 128
 *
 * @param LowHealthSE
 * @type file
 * @dir audio/se
 * @require 1
 * @desc Low HP Sound Effect, place in AUDIO/SE folder.
 * @default LowHPBeep
 * 
 * @param SE_Interval
 * @type number
 * @desc Interval between Low HP Sound Effect beeps (in milliseconds).
 * @default 700
 *
 * @param zActorID
 * @type number
 * @desc ID of Actor whose HP will be displayed.
 * @default 1
 *
 */

var dismal_sci = dismal_sci || {};		// Author namespace
dismal_sci.zHUD = dismal_sci.zHUD || {};	// Plugin namespace

(function($) {

	// Get parameters
	$.params = PluginManager.parameters('zHUD');
	if ($.params === undefined) throw new Error('zHUD parameters not found! Check the plugin is named correctly and try again.');

	// Define parameter variables on plugin namespace
	$.Prefix = $.params['Prefix'];
	$.ImgWidth = Number($.params['ImgWidth']);
	$.ImgMax = Number($.params['ImgMax']) - 1;
	$.LastImgSuffix = Number($.params['LastImgSuffix']);
	$.LowHealthSE = $.params['LowHealthSE'];
	$.SE_Interval = Number($.params['SE_Interval']);
	$.zActorID = Number($.params['zActorID']);

	// Other plugin variables
	$.lastHP = 0;
//	$.xRight = Graphics.boxWidth - ($.ImgWidth + 24);	// boxWidth is not set yet!
	$.xOffset = $.ImgWidth + 760;				// Alternative approach
	$.xRound = $.LastImgSuffix / $.ImgMax;

	// Round to nearest multiple of integer num
	Number.prototype.roundTo = function(num) {
		return Math.ceil(this/num) * num;
	};
	
	$.lowHP = Math.pow($.xRound,2);
	$.lowHP_SND = {name: $.LowHealthSE, volume: 90, pitch: 100, pan: 0};
	
	$.lowHP_beep = function() {
		if ($.beepInterval === undefined) {
			$.beepInterval = setInterval(function(){
				AudioManager.playSe($.lowHP_SND);
			}, $.SE_Interval);
		}
	};
	
	$.lowHP_beep_kill = function() {
		if ($.beepInterval != undefined) {
			clearInterval(this.beepInterval);
			delete this.beepInterval;
		}
	};
	
	// Display appropriate picture for HUD, via showPicture
	$.refreshHUD = function() {
	        console.log('Refreshing HUD!');
	        var actor = $gameActors.actor($.zActorID);
	        var calcHP = ($.LastImgSuffix * actor.hp / actor.mhp).roundTo($.xRound);
	        if ($.lastHP === calcHP) return;    // Only continue if changed
	        $.lastHP = calcHP;            // Remember HP
	        console.log('calculated:', calcHP, '\nlow:', $.lowHP);
	        if (calcHP <= $.lowHP && calcHP > 0) {  // at or below low HP, and not dead
	            $.lowHP_beep();
	        } else {   // end beep in all other cases
	            $.lowHP_beep_kill();
		};
	        var id = 1;
	        var name = $.Prefix + String(calcHP);
	        var origin = 0, x = Graphics.boxWidth - $.xOffset, y = 3;
	        var scaleX = 100, scaleY = 100, opacity = 255, blend = 0;
	        $gameScreen.showPicture(id, name, origin, x, y, scaleX, scaleY, opacity, blend);
	    };
	
	// Refresh HUD when Scene_Map loads
	var _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		_Scene_Map_start.call(this);
		// console.log('Scene_Map has started!');
		$.refreshHUD();
	};
	
	// Refresh HUD when actor gains/loses HP
	var _Game_Actor_setHp = Game_Actor.prototype.setHp;
	Game_Actor.prototype.setHp = function(value) {
		_Game_Actor_setHp.call(this, value);
		// console.log('Actor HP changed!');
		$.refreshHUD();
	};
	
})(dismal_sci.zHUD);