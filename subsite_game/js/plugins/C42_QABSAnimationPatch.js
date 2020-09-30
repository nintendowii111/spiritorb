/*=============================================================================
 * Animation Patch for Quxios' QABS.js
 * by Cormorant42 ... visit me at https://cormorant42.itch.io/
 * Filename: C42_QABSAnimationPatch.js
 * Version: 1.0
 * License: CC-BY-SA
 *=============================================================================*/
/*:
 * @plugindesc Allows QABS user animations to rotate with the player.                           https://cormorant42.itch.io/
 * @author Cormorant42
 *
 * @help
 *
 * This plugin has no parameters.
 * Make sure to place it below QABS and enable it in your plugin manager.
 *
 * How it works:
 *
 * When using the 'user animation x' skill sequence action, add 'true' afterwards
 * to have the animation rotate based on the player's current facing direction.
 *
 * Example: user animation 1 true
 *
 * This is compatible with the standard 4 directions (up, down, left, right)
 * as well as the four diagonal directions (left-up, left-down, right-up, and
 * right-down).
 *
 * This plugin is licensed under the CC-BY-SA license.
 * You are free to use it in commercial/noncommercial games,
 * as well as modify it to your liking, as long as you give credit to
 * Cormorant42.
*/

var Imported = Imported || {};
Imported["Cormorant42 QABS Animation Patch"] = 1.0;

if (!Imported.QABS) {
	alert('Error: QABS is not installed.');
	throw new Error('Error: QABS is not installed.');
};

(function() {

QABSManager.prototype.startAnimation = function(id, x, y, dfx) {
	var scene = SceneManager._scene;
	if (scene.constructor !== Scene_Map) return;
	if (id < 0) id = 1;
	if (id <= 0) return;
	var animation = $dataAnimations[id];
	var temp = new Sprite_MapAnimation(animation);
	temp.move(x, y);
	if (dfx == true) {
		temp.rotate(0)
	};
	this._animations.push(temp);
	scene._spriteset._tilemap.addChild(temp);
};

Skill_Sequencer.prototype.userAnimation = function(action) {
	var id = Number(action[0]);
	// Basically we just add another parameter to the user animation feature, boolean value
	var dfx = action[1];
	var x = this._character.cx();
	var y = this._character.cy();
	QABSManager.startAnimation(id, x, y, dfx);
};

Sprite_MapAnimation.prototype.rotate = function(dir) {
	
	if (dir == 0) {
		var dir = $gamePlayer.direction();
	};
	
	// We're going to get the four basic angles out of the way before doing diagonals
	if (dir == 2) {
		return;
		// Assumes the animation is downward-oriented
	};
	if (dir == 4) {
		var angle = (Math.PI / 2) * 3;
	};
	if (dir == 6) {
		var angle = (Math.PI / 2);
	};
	if (dir == 8) {
		var angle = Math.PI;
	};
	
	// Ok, time for diagonals
	if (dir == 1) {
		var angle = (Math.PI / 4) * 7;
	};
	if (dir == 3) {
		var angle = (Math.PI / 4);
	};
	if (dir == 7) {
		var angle = (Math.PI / 4) * 5;
	};
	if (dir == 9) {
		var angle = (Math.PI / 4) * 3;
	};
	
	// Time for some PIXI magic
	this.pivot.set(this.height, this.width);
	this.rotation = angle;
};

})();