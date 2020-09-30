
/*:
 * @plugindesc Permit to create Menu/back button for menu, battle and map.
 * @author Nio Kasgami
 * @version 1.01
 * @require nothing
 *
 * @param MainMenuPosX
 * @desc for Menu in X-Axis.
 * @default 10
 *
 * @param MainMenuPosY
 * @desc for menu in Y-Axis.
 * @default 0
 *
 * @param MapButtonPosX
 * @desc for map in X-Axis.
 * @default 10
 *
 * @param MapButtonPosY
 * @desc for map in Y-Axis.
 * @default 0
 *
 * @param FileButtonPosX
 * @desc for save and load in X-Axis.
 * @default 10
 *
 * @param FileButtonPosY
 * @desc for save and load in Y-Axis.
 * @default 0
 *
 * @param OptionButtonPosX
 * @desc for options in X-Axis.
 * @default 10
 *
 * @param OptionButtonPosY
 * @desc for options in Y-Axis.
 * @default 0
 *
 * @param ItemPosButtonX
 * @desc for item in X-Axis.
 * @default 10
 *
 * @param ItemPosButtonY
 * @desc for item in Y-Axis.
 * @default 0
 *
 * @param ItemButtonPos2X
 * @desc for when you select a item who require a actor in X-Axis.
 * @default 30
 *
 * @param ItemButtonPos2Y
 * @desc for when you select a item who require a actor in Y-Axis.
 * @default 0
 *
 * @param EquipButtonPosX
 * @desc for equip in X-Axis.
 * @default 10
 *
 * @param EquipButtonPosY
 * @desc for equip in Y-Axis.
 * @default 0
 *
 * @param SkillButtonPosX
 * @desc for skill in X-Axis.
 * @default 10
 *
 * @param SkillButtonPosY
 * @desc for skill in Y-Axis.
 * @default 0
 *
 * @param SkillButtonPos2X
 * @desc for when you select a skill who require a actor in X-Axis.
 * @default 10
 *
 * @param SkillButtonPos2Y
 * @desc for when you select a skill who require a actor in Y-Axis.
 * @default 0
 *
 * @param StatusButtonPosX
 * @desc for status in X-Axis.
 * @default 10
 *
 * @param StatusButtonPosY
 * @desc for status in Y-Axis.
 * @default 0
 *
 * @param BattleButtonPosX
 * @desc when you are on the screen in X-Axis.
 * @default 10
 *
 * @param BattleButtonPosY
 * @desc when you are on the screen in Y-Axis.
 * @default 0
 *
 * @param BattleButtonPos2X
 * @desc when you are in skill window in X-Axis.
 * @default 10
 *
 * @param BattleButtonPos2Y
 * @desc when you are in skill window in Y-Axis.
 * @default 0
 *
 * @param BattleButtonPos3X
 * @desc when you are in item window in X-Axis.
 * @default 10
 *
 * @param BattleButtonPos3Y
 * @desc when you are in item window in Y-Axis.
 * @default 0
 *
 * @param BattleButtonPos4X
 * @desc when you are in target enemy in X-Axis.
 * @default 10
 *
 * @param BattleButtonPos4Y
 * @desc when you are in target enemy in Y-Axis.
 * @default 0
*/
var NioPlugin = NioPlugin || {};
 NioPlugin.Alias = NioPlugin.Alias || {};

 NioPlugin.Parameters = PluginManager.parameters('IntuitiveMobileButtonV2');

 NioPlugin.Param = NioPlugin.Param || {};
 
 // menu processing
 NioPlugin.Param.MainMenuPosX = Number(NioPlugin.Parameters['MainMenuPosX']);
 NioPlugin.Param.MainMenuPosY = Number(NioPlugin.Parameters['MainMenuPosY']);
 NioPlugin.Param.MapPosX = Number(NioPlugin.Parameters['MapButtonPosX']);
 NioPlugin.Param.MapPosY = Number(NioPlugin.Parameters['MapButtonPosY']);
 NioPlugin.Param.FilePosX = Number(NioPlugin.Parameters['FileButtonPosX']);
 NioPlugin.Param.FilePosY = Number(NioPlugin.Parameters['FileButtonPosY']);
 NioPlugin.Param.OptionPosX = Number(NioPlugin.Parameters['OptionButtonPosX']);
 NioPlugin.Param.OptionPosY = Number(NioPlugin.Parameters['OptionButtonPosY']);
 NioPlugin.Param.ItemPosX = Number(NioPlugin.Parameters['ItemPosButtonX']);
 NioPlugin.Param.ItemPosY = Number(NioPlugin.Parameters['ItemPosButtonY']);
 NioPlugin.Param.ItemPos2X = Number(NioPlugin.Parameters['ItemButtonPos2X']);
 NioPlugin.Param.ItemPos2Y = Number(NioPlugin.Parameters['ItemButtonPos2Y']);
 NioPlugin.Param.EquipPosX = Number(NioPlugin.Parameters['EquipButtonPosX']);
 NioPlugin.Param.EquipPosY = Number(NioPlugin.Parameters['EquipButtonPosY']);
 NioPlugin.Param.SkillPosX = Number(NioPlugin.Parameters['SkillButtonPosX']);
 NioPlugin.Param.SkillPosY = Number(NioPlugin.Parameters['SkillButtonPosY']);
 NioPlugin.Param.SkillPos2X = Number(NioPlugin.Parameters['SkillButtonPos2X']);
 NioPlugin.Param.SkillPos2Y = Number(NioPlugin.Parameters['SkillButtonPos2Y']);
 NioPlugin.Param.StatusPosX = Number(NioPlugin.Parameters['StatusButtonPosX']);
 NioPlugin.Param.StatusPosY = Number(NioPlugin.Parameters['StatusButtonPosY']);

 // Battle Processing
 NioPlugin.Param.BattlePosX = Number(NioPlugin.Parameters['BattleButtonPosX']); // on normal screen X.
 NioPlugin.Param.BattlePosY = Number(NioPlugin.Parameters['BattleButtonPosY']); // on normal screen Y.
 NioPlugin.Param.BattlePos2X = Number(NioPlugin.Parameters['BattleButtonPos2X']); // on item screen X.
 NioPlugin.Param.BattlePos2Y = Number(NioPlugin.Parameters['BattleButtonPos2Y']); // on target screen Y.
 NioPlugin.Param.BattlePos3X = Number(NioPlugin.Parameters['BattleButtonPos3X']); // on skill screen X.
 NioPlugin.Param.BattlePos3Y = Number(NioPlugin.Parameters['BattleButtonPos3Y']); // on skill screen Y.
 NioPlugin.Param.BattlePos4X = Number(NioPlugin.Parameters['BattleButtonPos4X']);  // on target screen X.
 NioPlugin.Param.BattlePos4Y = Number(NioPlugin.Parameters['BattleButtonPos4Y']); // on item screen Y.

//==============================================================================
// ■ NioPlugin
//------------------------------------------------------------------------------
// The Static class who handle param.
//==============================================================================

 function NKS(){this.initialize.apply(this, arguments);}
  NKS.prototype.constructor = NKS

  NKS.prototype.initialize = function(){
    this.getPlugin();
    this.getParam();
  };

  NKS.prototype.getPlugin = function(){
    this._mobileButton = this.setPluginName('IntuitiveMobileButtonV2');
  };

  NKS.prototype.getParam = function(){

  };

  NKS.prototype.setPluginName = function(plugin){
    return PluginManager.parameters(plugin);
  };

  NKS.prototype.setArray = function(plugin, param){
    return plugin[param].split(',').map( function (i) {return Number(i || 0);} );
  };

  NKS.prototype.setString = function(plugin, param){
    return String(plugin[param]);
  };


//===============================================================================
// => END : Game_Temp
//===============================================================================


//==============================================================================
// ■ Game_Temp
//------------------------------------------------------------------------------
// The game object class for temporary data that is not included in save data.
//==============================================================================

  NioPlugin.Alias.N01 = Game_Temp.prototype.setDestination;
  Game_Temp.prototype.setDestination = function(x,y){
    var button = SceneManager._scene._button;
    if(!button.isButtonTouched()){
        NioPlugin.Alias.N01.call(this,x,y);
    }
  };
//===============================================================================
// => END : Game_Temp
//===============================================================================


//==============================================================================
// ■ Scene_Boot
//------------------------------------------------------------------------------
// The scene class for initializing the entire game.
//==============================================================================

  NioPlugin.Alias.N02 = Scene_Boot.prototype.create;
  Scene_Boot.prototype.create = function(){
    NioPlugin.Alias.N02.call(this);
    ImageManager.loadSystem('MenuButton');
    ImageManager.loadSystem('CancelBackButton');
  };
//===============================================================================
// => END : Scene_Boot
//===============================================================================

//==============================================================================
// ■ Scene_MenuBase
//------------------------------------------------------------------------------
// The superclass of all the menu-type scenes.
//==============================================================================

  Scene_MenuBase.prototype._currentWindow = null;

  NioPlugin.Alias.N03 = Scene_MenuBase.prototype.create;
  Scene_MenuBase.prototype.create = function(){
    NioPlugin.Alias.N03.call(this);
    this.createButton();
  };

  Scene_MenuBase.prototype.createButton = function(){};

  Scene_MenuBase.prototype.currentHandler = function(){
    SoundManager.playCancel();
  };

  Scene_MenuBase.prototype.onMain = function(){
    this.setTrigger('Main');
    this.popScene();
  };

  Scene_MenuBase.prototype.setTrigger = function(trigger){
    this._currentWindow = trigger;
  };
//===============================================================================
// => END : Scene_MenuBase
//===============================================================================

//==============================================================================
// ■ Scene_Menu
//------------------------------------------------------------------------------
// The scene class of the menu screen.
//==============================================================================

  Scene_Menu.prototype.createButton = function(){
    Scene_MenuBase.prototype.createButton.call(this);
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.setTrigger('Main');
    this.addChild(this._button);
  };

  Scene_Menu.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth / 2) + NioPlugin.Param.MainMenuPosX;
  };

  Scene_Menu.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.MainMenuPosY;
  };

  
  Scene_Menu.prototype.currentHandler = function(){
    Scene_MenuBase.prototype.currentHandler.call(this);
    switch(this._currentWindow){
        case 'Main' : this.onMain(); break;
        case 'OnActor' : this.onActorCancel(); break;
        case 'OnFormation' : this.onFormationActorCancel(); break;
    } 
  };

  Scene_Menu.prototype.onActorCancel = function(){
    this.setTrigger('Main');
    this.onPersonalCancel();
  };


  Scene_Menu.prototype.onFormationActorCancel = function(){
    this.setTrigger('Main');
    this.onFormationCancel();
  };

  NioPlugin.Alias.N05 = Scene_Menu.prototype.commandPersonal;
  Scene_Menu.prototype.commandPersonal = function(){
    this.setTrigger('OnActor');
    NioPlugin.Alias.N05.call(this);
  };

  NioPlugin.Alias.N08 = Scene_Menu.prototype.onPersonalOk;
  Scene_Menu.prototype.onPersonalOk = function(){
    this.setTrigger('Main');
    NioPlugin.Alias.N08.call(this);
  };

  NioPlugin.Alias.N06 = Scene_Menu.prototype.commandFormation;
  Scene_Menu.prototype.commandFormation = function(){
    this.setTrigger('OnFormation');
    NioPlugin.Alias.N06.call(this);
  };

  NioPlugin.Alias.N07 = Scene_Menu.prototype.onFormationOk;
  Scene_Menu.prototype.onFormationOk = function(){
    this.setTrigger('Main');
    NioPlugin.Alias.N06.call(this);
  };

  // Actual obsolete method
  Scene_Menu.prototype.onMain = function(){
    Scene_MenuBase.prototype.onMain.call(this);
   
  };
//===============================================================================
// => END : Scene_Menu
//===============================================================================

//==============================================================================
// ■ Scene_File
//------------------------------------------------------------------------------
// The superclass of Scene_Save and Scene_Load.
//==============================================================================

  Scene_File.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.addChild(this._button);
  };

  Scene_File.prototype.currentHandler = function(){
    Scene_MenuBase.prototype.currentHandler.call(this);
    this.onMain();
  };
  Scene_File.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth / 2) + NioPlugin.Param.FilePosX;
  };

  Scene_File.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.FilePosY;
  };
//===============================================================================
// => END : Scene_File
//===============================================================================

//==============================================================================
// ■ Scene_Options
//------------------------------------------------------------------------------
// The scene class of the options screen.
//==============================================================================
  
  Scene_Options.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.addChild(this._button);
  };

  Scene_Options.prototype.currentHandler = function(){
    Scene_MenuBase.prototype.currentHandler.call(this);
    this.onMain();
  };

  Scene_Options.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth / 2) + NioPlugin.Param.OptionPosX;
  };

  Scene_Options.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.OptionPosY;
  };
//===============================================================================
// => END : Scene_Options
//===============================================================================

//==============================================================================
// ■ Scene_Status
//------------------------------------------------------------------------------
// The scene class of the status screen.
//==============================================================================
  
  Scene_Status.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.addChildAt(this._button,2);
  };

  Scene_Status.prototype.currentHandler = function(){
    Scene_MenuBase.prototype.currentHandler.call(this);
    this.onMain();
  };

  Scene_Status.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth / 2) + NioPlugin.Param.StatusPosX;
  };

  Scene_Status.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.StatusPosY;
  }; 
//===============================================================================
// => END : Scene_Status
//===============================================================================

//==============================================================================
// ■ Scene_Item
//------------------------------------------------------------------------------
// The scene class of the item screen.
//==============================================================================

  Scene_Item.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.setTrigger('Main');
    this.addChildAt(this._button, 2);
  };

  Scene_Item.prototype.buttonScreenX = function(){
    var width = (Graphics.boxWidth / 2);
    if(this._currentWindow === 'Actor'){
      return width +  NioPlugin.Param.ItemPos2X;
    } else {
      return width + NioPlugin.Param.ItemPosX;
    }      
  };

  Scene_Item.prototype.buttonScreenY = function(){
    var height = (Graphics.boxHeight / 2);
    if(this._currentWindow === 'Actor'){
      return height + NioPlugin.Param.ItemPos2X;
    } else {
      return height + NioPlugin.Param.ItemPosY;
    }  
  }; 

  Scene_Item.prototype.currentHandler = function(){
    Scene_ItemBase.prototype.currentHandler.call(this);
    switch(this._currentWindow){
      case 'Main' : this.onMain(); break;
      case 'category' : this.cancelCategory(); break;
      case 'Actor' : this.cancelActor(); break;
    }
  };

  NioPlugin.Alias.N10 = Scene_Item.prototype.onCategoryOk;
  Scene_Item.prototype.onCategoryOk = function() {
    NioPlugin.Alias.N10.call(this);
    this.setTrigger('category');
  };

  Scene_Item.prototype.cancelCategory = function(){
    this.onItemCancel();
    this.setTrigger('Main');
  };

  NioPlugin.Alias.N11 = Scene_Item.prototype.onItemOk;
  Scene_Item.prototype.onItemOk = function(){
    NioPlugin.Alias.N11.call(this);
    this.setTrigger('Actor');
    this._button.x = this.buttonScreenX() - 50;
  };

  Scene_Item.prototype.cancelActor = function(){
    this.onActorCancel();
    this.setTrigger('category');
  };

  Scene_Item.prototype.update = function(){
    Scene_ItemBase.prototype.update.call(this);
    this.updateButtonPos();
  };

  Scene_Item.prototype.updateButtonPos = function(){
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
  };
//===============================================================================
// => END : Scene_Item
//===============================================================================

//==============================================================================
// ■ Scene_Equip
//------------------------------------------------------------------------------
// The scene class of the equipment screen.
//==============================================================================

  Scene_Equip.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.setTrigger('Main');
    this.addChildAt(this._button, 2);
  };

  Scene_Equip.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth/ 2) + NioPlugin.Param.EquipPosX;
  };

  Scene_Equip.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.EquipPosY;
  };

  Scene_Equip.prototype.currentHandler = function(){
    Scene_MenuBase.prototype.currentHandler.call(this);
    switch(this._currentWindow){
      case 'Main' : this.onMain(); break;
      case 'Slot' : this.onSlot(); break;
      case 'List' : this.onList(); break;
    }
  };

  NioPlugin.Alias.N12 = Scene_Equip.prototype.onSlotOk;
  Scene_Equip.prototype.onSlotOk = function(){
    NioPlugin.Alias.N12.call(this);
    this.setTrigger('List');
  };

  Scene_Equip.prototype.onSlot = function(){
    this.onSlotCancel();
    this.setTrigger('Main');
  };

  NioPlugin.Alias.N13 = Scene_Equip.prototype.onItemOk;
  Scene_Equip.prototype.onItemOk = function(){
    NioPlugin.Alias.N13.call(this);
    this.setTrigger('Slot');
  };

  Scene_Equip.prototype.onList = function(){
    this.onItemCancel();
    this.setTrigger('Slot');
  };
//===============================================================================
// => END : Scene_Equip
//===============================================================================

//==============================================================================
// ■ Scene_Skill
//------------------------------------------------------------------------------
// The scene class of the skill screen.
//==============================================================================
  
  Scene_Skill.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.setTrigger('Main');
    this.addChildAt(this._button, 2);
  };

  Scene_Skill.prototype.buttonScreenX = function(){
    var width = (Graphics.boxWidth / 2 );
    if(this._currentWindow === 'Actor'){
      return width + NioPlugin.Param.SkillPos2X;
    } else {
      return width + NioPlugin.Param.SkillPosX;
    }
  };

  Scene_Skill.prototype.buttonScreenY = function(){
    var height = (Graphics.boxHeight / 2 );
    if(this._currentWindow === 'Actor'){
      return height + NioPlugin.Param.SkillPos2Y;
    } else {
      return height + NioPlugin.Param.SkillPosY;
    }
  };

  Scene_Skill.prototype.currentHandler = function(){
    Scene_ItemBase.prototype.currentHandler.call(this);
    switch(this._currentWindow){
      case 'Main' : this.onMain(); break;
      case 'List' : this.onList(); break;
      case 'Actor': this.onActor(); break;
    }
  };

  NioPlugin.Alias.N14 = Scene_Skill.prototype.commandSkill;
  Scene_Skill.prototype.commandSkill = function(){
    NioPlugin.Alias.N14.call(this);
    this.setTrigger('List');
  };
  Scene_Skill.prototype.onList = function(){
    this.onItemCancel();
    this.setTrigger('Main');
  };

  Scene_Skill.prototype.onActor = function(){
    this.onActorCancel();
    this.setTrigger('List');
  };

  NioPlugin.Alias.N25 = Scene_Skill.prototype.onItemOk;
  Scene_Skill.prototype.onItemOk = function(){
    NioPlugin.Alias.N25.call(this);
    this.setTrigger('Actor');
  };

  Scene_Skill.prototype.update = function(){
    Scene_ItemBase.prototype.update.call(this);
    this.updateButtonPos();
  };

  Scene_Skill.prototype.updateButtonPos = function(){
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
  };
//===============================================================================
// => END : Scene_Skill
//===============================================================================

//==============================================================================
// ■ Scene_Shop
//------------------------------------------------------------------------------
// The scene class of the shop screen.
//==============================================================================
  
  Scene_Shop.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem("CancelBackButton");
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.addChildAt(this._button, 2);
  };

  Scene_Shop.prototype.buttonScreenX = function(){};
//===============================================================================
// => END : Scene_Skill
//===============================================================================

//==============================================================================
// ■ Scene_Map
//------------------------------------------------------------------------------
// The scene class of the map screen.
//==============================================================================

 NioPlugin.Alias.N04 = Scene_Map.prototype.createDisplayObjects;
 Scene_Map.prototype.createDisplayObjects = function(){
    NioPlugin.Alias.N04.call(this);
    this.createButton();
 };
 Scene_Map.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem("MenuButton");
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
    this._button.setClickHandler(this.callMenu.bind(this));
    this.addChild(this._button);
 };

 NioPlugin.Alias.N09 = Scene_Map.prototype.update;
 Scene_Map.prototype.update = function(){
    this.updateButtonVisibility();
    NioPlugin.Alias.N09.call(this);
 };

 Scene_Map.prototype.updateButtonVisibility = function(){
    if($gameSystem.isMenuEnabled()){
        this._button.visible = true;
    } else {
        this._button.visible = false;
    }
 };
 Scene_Map.prototype.buttonScreenX = function(){
    return (Graphics.boxWidth / 2) + NioPlugin.Param.MapPosX;
 };

 Scene_Map.prototype.buttonScreenY = function(){
    return (Graphics.boxHeight / 2) + NioPlugin.Param.MapPosY;
 };
//===============================================================================
// => END : Scene_Map
//===============================================================================

//==============================================================================
// ■ Scene_Battle
//------------------------------------------------------------------------------
// The scene class of the battle screen.
//==============================================================================

  Scene_Battle.prototype._currentWindow = null;

  Scene_Battle.prototype.setTrigger = function(trigger){
    this._currentWindow = trigger;
  };

  NioPlugin.Alias.N15 = Scene_Battle.prototype.createDisplayObjects;
  Scene_Battle.prototype.createDisplayObjects = function(){
    NioPlugin.Alias.N15.call(this);
    this.createButton();
  };

  Scene_Battle.prototype.createButton = function(){
    this._button = new Sprite_Button();
    this._button.bitmap = ImageManager.loadSystem('CancelBackButton');
    this._button.setClickHandler(this.currentHandler.bind(this));
    this.setTrigger('Party');
    this._button.visible = true;
    this.addChild(this._button);
    this.updateButtonVisibility();
    console.log( NioPlugin.Param.BattlePosX);
  };

  Scene_Battle.prototype.buttonScreenX = function(){
   // var width = (Graphics.boxWidth / 2);
    switch(this._currentWindow){
      case 'OnCommand' : return (Graphics.boxWidth / 2) + NioPlugin.Param.BattlePosX; break;
      case 'OnActor' : return  (Graphics.boxWidth / 2)  + NioPlugin.Param.BattlePosX; break;
      case 'OnSkill' : return (Graphics.boxWidth / 2)  + NioPlugin.Param.BattlePos2X; break;
      case 'OnItem' : return (Graphics.boxWidth / 2)  + NioPlugin.Param.BattlePos3X; break;
      case 'OnTarget' : return (Graphics.boxWidth / 2)  + NioPlugin.Param.BattlePos4X; break;
    }
  };

  Scene_Battle.prototype.buttonScreenY = function(){
   // var height = (Graphics.boxheight / 2);
    switch(this._currentWindow){
      case 'OnCommand' : return (Graphics.boxHeight / 2) + NioPlugin.Param.BattlePosY; break;
      case 'OnActor' : return  (Graphics.boxHeight / 2) + NioPlugin.Param.BattlePosY; break;
      case 'OnSkill' : return (Graphics.boxHeight / 2) + NioPlugin.Param.BattlePos2Y; break;
      case 'OnItem' : return (Graphics.boxHeight / 2) + NioPlugin.Param.BattlePos3Y; break;
      case 'OnTarget' : return (Graphics.boxHeight / 2) + NioPlugin.Param.BattlePos4Y; break;
    }
  };

  NioPlugin.Alias.N16 = Scene_Battle.prototype.update
  Scene_Battle.prototype.update = function(){
    NioPlugin.Alias.N16.call(this);
    this.updateButtonVisibility();
    this.updateButtonPos();
  };

  Scene_Battle.prototype.updateButtonVisibility = function(){
    if(this._currentWindow === 'Party' || BattleManager.isAborting() || BattleManager.isBattleEnd() ){ 
      this._button.visible = false;
    } else {
      this._button.visible = true;
    }
  };

  Scene_Battle.prototype.updateButtonPos = function(){
    this._button.x = this.buttonScreenX();
    this._button.y = this.buttonScreenY();
  };

  Scene_Battle.prototype.currentHandler = function(){
   // console.log("Was before " + this._currentWindow);
    switch(this._currentWindow){
      case 'OnCommand' : this.onCommand(); break;
      case 'OnActor' : this.onActor(); break;
      case 'OnTarget' : this.onTarget(); break;
      case 'OnSkill' : this.onSkill(); break;
      case 'OnItem' : this.onItem(); break;
    }
   // console.log("Is now " + this._currentWindow);
    SoundManager.playCancel();
  };

  NioPlugin.Alias.N17 = Scene_Battle.prototype.commandFight;
  Scene_Battle.prototype.commandFight = function(){
    NioPlugin.Alias.N17.call(this);
    this.setTrigger('OnCommand');
  };

  NioPlugin.Alias.N18 = Scene_Battle.prototype.commandAttack;
  Scene_Battle.prototype.commandAttack = function(){
    NioPlugin.Alias.N18.call(this);
    this.setTrigger('OnTarget');
  };

  NioPlugin.Alias.N19 = Scene_Battle.prototype.commandSkill;
  Scene_Battle.prototype.commandSkill = function(){
    NioPlugin.Alias.N19.call(this);
    this.setTrigger('OnSkill');
  };

  NioPlugin.Alias.N20 = Scene_Battle.prototype.commandItem;
  Scene_Battle.prototype.commandItem = function(){
    NioPlugin.Alias.N20.call(this);
    this.setTrigger('OnItem');
  };
  
  Scene_Battle.prototype.onCommand = function(){
    this.selectPreviousCommand();
    if(BattleManager.actor() <= 0){ //this._actorCommandWindow.currentSymbol() === 'Guard'
      this.setTrigger('Party');
    }
  };

  Scene_Battle.prototype.onActor = function(){
    this.onActorCancel();
    switch(this._actorCommandWindow.currentSymbol()){
      case 'skill' : this.setTrigger('OnSkill'); break;
      case 'item' : this.setTrigger('OnItem'); break;
    }  
  };

  Scene_Battle.prototype.onTarget = function(){
    this.onEnemyCancel();
    switch(this._actorCommandWindow.currentSymbol()){
      case 'attack' : this.setTrigger('OnCommand'); break;
      case 'skill' : this.setTrigger('OnSkill'); break;
      case 'item' : this.setTrigger('OnItem'); break;
    }   
  };

  Scene_Battle.prototype.onSkill = function(){
    this.onSkillCancel();
    this.setTrigger('OnCommand');
  };

  Scene_Battle.prototype.onItem = function(){
    this.onItemCancel();
    this.setTrigger('OnCommand');
  };

  NioPlugin.Alias.N21 = Scene_Battle.prototype.onEnemyOk;
  Scene_Battle.prototype.onEnemyOk = function(){
    NioPlugin.Alias.N21.call(this);
    this.setTrigger('OnCommand');
    console.log(this._button.visible);
  };

  NioPlugin.Alias.N22 = Scene_Battle.prototype.onActorOk;
  Scene_Battle.prototype.onActorOk = function(){
    NioPlugin.Alias.N22.call(this);
    this.setTrigger('OnCommand');
  };
  /*
  NioPlugin.Alias.N23 = Scene_Battle.prototype.onItemOk;
  Scene_Battle.prototype.onItemOk = function(){
    NioPlugin.Alias.N23.call(this);
    var action = BattleManager.inputtingAction();
    if(!action.needsSelection()){
      this.setTrigger('OnCommand');
    } else if(action.isForOpponent()){
      this.setTrigger('OnTarget');
    } else {
      this.setTrigger('OnActor');
    }
  };
  */
 /*
  NioPlugin.Alias.N24 = Scene_Battle.prototype.onSkillOk;
  Scene_Battle.prototype.onSkillOk = function(){
    this._helpWindow.clear();
    NioPlugin.Alias.N24.call(this);
    var action = BattleManager.inputtingAction();
    if(!action.needsSelection()){
      this.setTrigger('OnCommand');
    } else if(action.isForOpponent()){
      this.setTrigger('OnTarget');
    } else {
      this.setTrigger('OnActor');
    }
  };
 */

 Scene_Battle.prototype.onSelectAction = function() {
    var action = BattleManager.inputtingAction();
    this._skillWindow.hide();
    this._itemWindow.hide();
    if (!action.needsSelection()) {
        this.selectNextCommand();
        this.setTrigger('OnCommand');
    } else if (action.isForOpponent()) {
        this.selectEnemySelection();
        this.setTrigger('OnTarget');
    } else {
        this.selectActorSelection();
        this.setTrigger('OnActor');
    }
  };


  Scene_Battle.prototype.endCommandSelection = function(){
    this._partyCommandWindow.close();
    this._actorCommandWindow.close();
    this._statusWindow.deselect();
    this.setTrigger('Party');
  };


//===============================================================================
// => END : Scene_Battle
//===============================================================================