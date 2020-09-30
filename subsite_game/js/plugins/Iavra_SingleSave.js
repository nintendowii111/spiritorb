/*:
 * @plugindesc Replaces the normal save/load menus with a single save file, that gets used for all games.
 * <Iavra Single Save>
 * @author Iavra
 *
 * @param Position
 * @desc Y coordinate of the save/load windows. Default: 100
 * @default 100
 *
 * @param Width
 * @desc Width of the save/load windows. Default: 600
 * @default 600
 *
 * @param Message Save
 * @desc The message to be shown, when saving a game.
 * @default Save the game?
 *
 * @param Message Load
 * @desc The message to be shown, when loading a game.
 * @default Load the game?
 *
 * @param Message New
 * @desc The message to be shown, when starting a new game and overwriting the old save.
 * @default This will overwrite your old save. Continue?
 *
 * @param Label Yes
 * @desc Text to be used for the "yes" option, when attempting to save/load a game. Default: Yes
 * @default Yes
 *
 * @param Label No
 * @desc Text to be used for the "no" option, when attempting to save/load a game. Default: No
 * @default No
 */

var IAVRA = IAVRA || {};

(function($) {
    "use strict";

    /**
     * Loads the plugin parameters independent from the plugin's actual filename.
     */
    var _params = $plugins.filter(function(p) { return p.description.contains('<Iavra Single Save>'); })[0].parameters;
    var _param_position = parseInt(_params['Position']) || 0;
    var _param_width = parseInt(_params['Width']) || 0;
    var _text = {
        messageSave: _params['Message Save'],
        messageLoad: _params['Message Load'],
        messageNew: _params['Message New'],
        labelYes: _params['Label Yes'],
        labelNo: _params['Label No']
    };

    //=============================================================================
    // IAVRA.SINGLESAVE
    //=============================================================================

    $.SINGLESAVE = {

        /**
         * Saves the game and returns true or false, depending on whether the save was a success. Can also be used for
         * autosave or quicksave.
         */
        save: function() {
            $gameSystem.onBeforeSave();
            return DataManager.saveGame(1);
        },

        /**
         * Loads the game and returns true or false, depending on whether the load was a success. Can also be used for
         * quickload.
         */
        load: function() {
            if(DataManager.loadGame(1)) {
                $gameSystem.onAfterLoad();
                Scene_Load.prototype.reloadMapIfUpdated.call(null);
                SceneManager.goto(Scene_Map);
                if(SceneManager._scene) { SceneManager._scene.fadeOutAll(); }
                return true;
            } else { return false; }
        },

        /**
         * Displays a simple message, when saving, loading or starting a game.
         */
        Window_Message: function() { this.initialize.apply(this, arguments); },

        /**
         * Displays the contents of the savefile, basically like a simpler version of Window_SavefileList.
         */
        Window_Savefile: function() { this.initialize.apply(this, arguments); },

        /**
         * Confirm dialogue, that gets used to confirm the save/load/creation of a savegame.
         */
        Window_Confirm: function() { this.initialize.apply(this, arguments); },

        /**
         * Modified Scene_Save, that gets called when starting a new game, that will overwrite the old savefile.
         */
        Scene_New: function() { this.initialize.apply(this, arguments); }
    };

    //=============================================================================
    // IAVRA.SINGLESAVE.Window_Message
    //=============================================================================

    (function($) {

        ($.prototype = Object.create(Window_Base.prototype)).constructor = $;

        /**
         * This is a simple window, so we don't need any fancy initialization apart from our positioning.
         */
        $.prototype.initialize = function() {
            var width = this.windowWidth(), height = this.windowHeight();
            Window_Base.prototype.initialize.call(this, (Graphics.width - width) / 2, 0, width, height);
        };

        /**
         * The displayed text depends on the current scene (save/load/new game).
         */
        $.prototype.setText = function(text) {
            this.contents.clear();
            this.drawText(text, 0, 0);
        };

        $.prototype.windowWidth = function() { return _param_width; };
        $.prototype.windowHeight = function() { return this.fittingHeight(1); };

    })(IAVRA.SINGLESAVE.Window_Message);

    //=============================================================================
    // IAVRA.SINGLESAVE.Window_Savefile
    //=============================================================================

    (function($) {

        ($.prototype = Object.create(Window_Base.prototype)).constructor = $;

        /**
         * See Window_SavefileList
         */
        $.prototype.initialize = function() {
            var width = this.windowWidth(), height = this.windowHeight();
            Window_Base.prototype.initialize.call(this, (Graphics.width - width) / 2, 0, width, height);
            this._mode = null;
        };

        /**
         * This is basically Window_SavefileList for 1 elements, but without the savefileId (since it doesn't make any
         * sense, if we only have 1 save, anyway).
         */
        $.prototype.refresh = function() {
            this.contents.clear();
            var valid = DataManager.isThisGameFile(1);
            var info = DataManager.loadSavefileInfo(1);
            var rect = new Rectangle(0, 0, this.width - this.padding * 2, this.height - this.padding * 2);
            this.resetTextColor();
            if (this._mode === 'load') { this.changePaintOpacity(valid); }
            this.drawContents(info, rect);
        };

        /**
         * See Window_SavefileList
         */
        $.prototype.drawContents = function(info, rect) {
            if(info) {
                var bottom = rect.y + rect.height;
                Window_SavefileList.prototype.drawGameTitle.call(this, info, rect.x, rect.y, rect.width);
                Window_SavefileList.prototype.drawPartyCharacters.call(this, info, rect.x + 28, bottom - 4);
                Window_SavefileList.prototype.drawPlaytime.call(this, info, rect.x, bottom - this.lineHeight(), rect.width);
            }
        };

        $.prototype.windowWidth = function() { return _param_width; };
        $.prototype.windowHeight = function() { return this.fittingHeight(3); };
        $.prototype.setMode = Window_SavefileList.prototype.setMode;

    })($.SINGLESAVE.Window_Savefile);

    //=============================================================================
    // IAVRA.SINGLESAVE.Window_Confirm
    //=============================================================================

    (function($) {
        ($.prototype = Object.create(Window_Command.prototype)).constructor = $;

        /**
         * The window starts closed, so we can have a little, fancy animation.
         */
        $.prototype.initialize = function() {
            Window_Command.prototype.initialize.call(this);
            this.openness = 0;
        };

        /**
         * This is a simple confirmation window, so we only have 2 commands.
         */
        $.prototype.makeCommandList = function() {
            this.addCommand(_text.labelYes, 'ok');
            this.addCommand(_text.labelNo, 'cancel');
        };

    })($.SINGLESAVE.Window_Confirm);

    //=============================================================================
    // IAVRA.SINGLESAVE.Scene_New
    //=============================================================================

    (function($) {

        ($.prototype = Object.create(Scene_Save.prototype)).constructor = $;

        /**
         * Save after creating a new game.
         */
        $.prototype.onSaveSuccess = function() {
            SoundManager.playSave();
            DataManager.setupNewGame();
            this.fadeOutAll();
            SceneManager.goto(Scene_Map);
        };

        $.prototype.message = function() { return _text.messageNew; };

    })($.SINGLESAVE.Scene_New);

    //=============================================================================
    // Scene_Title
    //=============================================================================

    (function($) {

        /**
         * On creating a new game, check if a savefile already exists and open the save dialogue. If not, create a new
         * save and continue.
         */
        var alias_commandNewGame = $.prototype.commandNewGame;
        $.prototype.commandNewGame = function() {
            if(DataManager.isAnySavefileExists()) {
                this._commandWindow.close();
                SceneManager.push(IAVRA.SINGLESAVE.Scene_New);
            } else {
                alias_commandNewGame.call(this);
                SoundManager.playSave();
                IAVRA.SINGLESAVE.save();
            }
        };

    })(Scene_Title);

    //=============================================================================
    // Scene_File
    //=============================================================================

    (function($) {

        /**
         * The scene has been completely remade, since we only have 1 save slot, anyway.
         */
        $.prototype.create = function() {
            Scene_MenuBase.prototype.create.call(this);
            DataManager.loadAllSavefileImages();
            this.createMessageWindow();
            this.createSavefileWindow();
            this.createConfirmWindow();
        };

        $.prototype.start = function() {
            Scene_MenuBase.prototype.start.call(this);
            this._savefileWindow.refresh();
            this._confirmWindow.open();
        };

        $.prototype.createMessageWindow = function() {
            this.addWindow(this._messageWindow = new IAVRA.SINGLESAVE.Window_Message());
            this._messageWindow.setText(this.message());
            this._messageWindow.y = _param_position;
        };

        $.prototype.createSavefileWindow = function() {
            this.addWindow(this._savefileWindow = new IAVRA.SINGLESAVE.Window_Savefile());
            this._savefileWindow.setMode(this.mode());
            this._savefileWindow.y = this._messageWindow.y + this._messageWindow.height;
        };

        $.prototype.createConfirmWindow = function() {
            this.addWindow(this._confirmWindow = new IAVRA.SINGLESAVE.Window_Confirm());
            this._confirmWindow.setHandler('ok', this.onSavefileOk.bind(this));
            this._confirmWindow.setHandler('cancel', this.popScene.bind(this));
            this._confirmWindow.x = this._savefileWindow.x + this._savefileWindow.width - this._confirmWindow.width;
            this._confirmWindow.y = this._savefileWindow.y + this._savefileWindow.height;
        };

        $.prototype.savefileId = function() { return 1; };

        /**
         * The displayed message depends on the active scene (save/load/new game).
         */
        $.prototype.message = function() { return ''; };

    })(Scene_File);

    //=============================================================================
    // Scene_Save
    //=============================================================================

    (function($) {

        $.prototype.onSaveFailure = function() {
            SoundManager.playBuzzer();
            this._confirmWindow.activate();
        };

        $.prototype.message = function() { return _text.messageSave; };

    })(Scene_Save);

    //=============================================================================
    // Scene_Load
    //=============================================================================

    (function($) {

        $.prototype.onLoadFailure = function() {
            SoundManager.playBuzzer();
            this._confirmWindow.activate();
        };

        $.prototype.message = function() { return _text.messageLoad; };

    })(Scene_Load);

    //=============================================================================
    // DataManager
    //=============================================================================

    DataManager.isAnySavefileExists = function() { return this.isThisGameFile(1); };

})(IAVRA);