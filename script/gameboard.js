class GameBoard {
  constructor(boardElement) {
    this.boardElement = {
      menuButton: boardElement.menuButton,
      statButton: boardElement.statButton,
      settingsButton: boardElement.settingsButton,
      resetButton: boardElement.resetButton,
      pauseButton: boardElement.pauseButton,
      muteButton: boardElement.muteButton,
      soundButton: boardElement.soundButton,
      resumeButton: boardElement.resumeButton,
      // selectionCloseButton: boardElement.selectionCloseButton,
      // settingsCloseButton: boardElement.settingsCloseButton,
      // statCloseButton: boardElement.statCloseButton,
      selectionModalArea: boardElement.selectionModalArea,
      settingsModalArea: boardElement.settingsModalArea,
      mainContent: boardElement.mainContent
    }
    this.gameMode = ["random", "draft", "custom"];
    this.gameModeHint = ["Use a random Pokemon team for a battle!", "Draft team from groups of random Pokemon!", "Pick your own team and battle!"];
    this.difficulty = ["easy", "normal", "hard", "inferno"];
    this.type = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel",
      "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"]
    this.selectedGameMode = null;
    this.selectedTeamSize = null;
    this.selectedDifficulty = null;

    this.handleMenu = this.handleMenu.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
    this.closeSelectionModal = this.closeSelectionModal.bind(this);
    this.handleGameModeReturn = this.handleGameModeReturn.bind(this);
    this.handleDifficultyReturn = this.handleDifficultyReturn.bind(this);
    this.gameModeSelection = this.gameModeSelection.bind(this);
    this.teamSizeSelection = this.teamSizeSelection.bind(this);
    this.difficultySelection = this.difficultySelection.bind(this);
    this.requestPokemon = this.requestPokemon.bind(this);
  }

  addEventHandlers(element, elementEvent) {
    if (element && elementEvent) {
      element.click(elementEvent);
      return true;
    }
    this.boardElement.menuButton.click(this.handleMenu);
    //this.boardElement.statButton.click();
    this.boardElement.settingsButton.click(this.handleSettings);
  }

  handleMenu() {
    const closeIcon = $('<div>', {
      class: 'modal_header'
    }).append($('<span>', {
      class: 'close',
    }).html('&times;'));
    const selectionModal = $('<div>', {
      class: 'selection_modal_content'
    }).append(closeIcon);
    this.boardElement.selectionModalArea.addClass('pop_left').append(selectionModal);
    this.createGameModeMenu();
  }

  handleSettings() {
    this.boardElement.resetButton = $('<img>', {
      class: 'resetButton button settings_button',
      src: '././media/images/icon/reset.png',
      alt: 'reset button'
    });
    this.boardElement.pauseButton = $('<img>', {
      class: 'pauseButton button settings_button',
      src: './media/images/icon/pause.png',
      alt: 'pause button'
    });
    this.boardElement.muteButton = $('<img>', {
      class: 'muteButton button settings_button',
      src: './media/images/icon/mute.png',
      alt: 'mute button'
    });
    this.boardElement.soundButton = $('<img>', {
      class: 'soundButton button settings_button',
      src: './media/images/icon/sound.png',
      alt: 'sound button'
    });
    this.boardElement.resumeButton = $('<img>', {
      class: 'resumeButton button settings_button',
      src: './media/images/icon/resume.png',
      alt: 'resume button'
    });
    const closeIcon = $('<div>', {
      class: 'modal_header'
    }).append($('<span>', {
      class: 'close',
    }).html('&times;'));
    const settingsModal = $('<div>', {
      class: 'settings_modal_content'
    }).append(closeIcon, this.boardElement.resetButton, this.boardElement.pauseButton,
      this.boardElement.resumeButton, this.boardElement.muteButton, this.boardElement.soundButton);
    this.boardElement.settingsModalArea.addClass('pop_right').append(settingsModal);
  }
  //close modal when click outside

  createGameModeMenu() {
    const selectionHead = $('<div>', {
      class: 'selection_head'
    }).append($('<div>', { class: 'game_mode_head sub_selection_head' }).append($('<p>').text("Game Mode")),
      $('<div>', { class: 'team_size_head sub_selection_head' }).append($('<p>').text("Team Size")));

    const modalContent = $('.selection_modal_content').append(selectionHead);
    const modalFooter = $('<div>', {
      class: 'modal_footer'
    });

    for (let i = 0; i < this.gameMode.length; i++) {
      let sectionClass = "selection_menu_" + i + " selection_section";
      let gameModeClass = "game_mode_" + i + " button";

      let selectionBtnContainer = $('<div>', {
        class: 'selection_button_container sub_selection_container'
      });

      let gameModeBtnContainer = $('<div>', {
        class: 'game_mode_button_container'
      }).append($('<button>', { class: gameModeClass, game_mode: i }).text(this.gameMode[i].toUpperCase()));

      let teamSizeBtnContainer = $('<div>', {
        class: 'team_size_button_container'
        }).append($('<button>', { class: "team_size_1 hide " + gameModeClass }).text("1"),
        $('<button>', { class: "team_size_3 hide " + gameModeClass }).text("3"),
        $('<button>', { class: "team_size_6 hide " + gameModeClass }).text("6"));

        let hintContainer = $('<div>', {
          class: 'selection_hint_container sub_selection_container'
      }).append($('<span>').text(this.gameModeHint[i]));

      modalContent.append($('<div>', {
        class: sectionClass
      }).append(selectionBtnContainer.append(gameModeBtnContainer, teamSizeBtnContainer), hintContainer));
    }
    this.boardElement.selectionModalArea.append(modalContent.append(modalFooter));
    this.removeEvent($('.game_mode_button_container > button'));
    this.addEventHandlers($('.selection_modal .close'), this.closeSelectionModal);
    this.addEventHandlers($('.game_mode_button_container > button'), this.gameModeSelection);
    this.removeEvent(this.boardElement.menuButton);
  }

  closeSelectionModal() {
    this.boardElement.selectionModalArea.removeClass('pop_left').empty();
    this.removeEvent($('.selection_modal .close'));
    this.addEventHandlers(this.boardElement.menuButton, this.handleMenu);
  }

  createTeamRosterMenu() {
    this.boardElement.selectionModalArea.empty();
    const returnIcon = $('<div>', {
      class: 'modal_header'
    }).append($('<img>', {
      class: 'return button',
      src: './media/images/icon/return.png'
    }));
    const selectionModalContent = $('<div>', {
      class: 'selection_modal_content overflow'
    }).append(returnIcon);
    this.boardElement.selectionModalArea.append(selectionModalContent);

    const selectedTeamArea = $('<div>', {
      class: 'selected_team_container'
    });
    for (var i = 0; i < 6; i++) {
      selectedTeamArea.append($('<div>', {
        class: 'selected_team_' + i + ' selected_team_slot',
        selectedTeam: i
      }))
    }

    const teamMainArea = $('<div>', {
      class: 'team_main_container selection_button_container'
    });
    for (var j = 0; j < 18; j++) {
      teamMainArea.append($('<div>', {
        class: 'type_' + j + ' type_slot',
        type: j
      }).append($('<button>', {
        class: 'type_button button type_button_' + j,
        type: j
      }).text(this.type[j])))
    }

    const confirmButtonArea = $('<div>', {
      class: 'confirm_button_container selection_button_container'
    }).append($('<button>', {
      class: 'team_confirm_button button'
    }).text("Game Start"));
    const modalFooter = $('<div>', {
      class: 'modal_footer'
    });
    selectionModalContent.append(selectedTeamArea, confirmButtonArea, teamMainArea, modalFooter);
    this.removeEvent($('.return'));
    this.addEventHandlers($('.return'), this.handleDifficultyReturn);
    this.removeEvent($('.type_button'));
    this.addEventHandlers($('.type_button'), this.requestPokemon);
    //click on types will go to new function
    //use different css to indicate team size
    //general css
    //responsive design
  }

  createDifficultyMenu() {
    this.boardElement.selectionModalArea.empty();
    const returnIcon = $('<div>', {
      class: 'modal_header'
    }).append($('<img>', {
      class: 'return button',
      src: './media/images/icon/return.png'
    }));
    const selectionModalContent = $('<div>', {
      class: 'selection_modal_content'
    }).append(returnIcon);
    this.boardElement.selectionModalArea.append(selectionModalContent);

    const difficultyHead = $('<div>', {
      class: 'selection_head'
    }).append($('<div>', { class: 'difficulty_head' }).append($('<p>').text("Difficulty")));
    const modalContent = $('.selection_modal_content').append(difficultyHead);
    const modalFooter = $('<div>', {
      class: 'modal_footer'
    });

    for (let i = 0; i < this.difficulty.length; i++) {
      let sectionClass = "selection_menu_" + i + " difficulty_section";
      let difficultyClass = "difficulty_" + i + " button";

      let selectionBtnContainer = $('<div>', {
        class: 'selection_button_container'
      }).append($('<button>', { class: difficultyClass, difficulty: i }).text(this.difficulty[i].toUpperCase()));

      modalContent.append($('<div>', {
        class: sectionClass
      }).append(selectionBtnContainer));
    }
    this.boardElement.selectionModalArea.append(modalContent.append(modalFooter));
    this.removeEvent($('.difficulty_section button'));
    this.addEventHandlers($('.difficulty_section button'), this.difficultySelection);
    this.removeEvent($('.return'));
    this.addEventHandlers($('.return'), this.handleGameModeReturn);
  }

  handleGameModeReturn() {
    //try to modify this portion of code later
    this.boardElement.selectionModalArea.empty();
    const closeIcon = $('<div>', {
      class: 'modal_header'
    }).append($('<span>', {
      class: 'close',
    }).html('&times;'));
    const selectionModal = $('<div>', {
      class: 'selection_modal_content'
    }).append(closeIcon);
    this.boardElement.selectionModalArea.append(selectionModal);
    this.createGameModeMenu();
    if (this.selectedGameMode) {
      for (var i = 0; i < this.gameMode.length; i++) {
        if (this.gameMode[i] === this.selectedGameMode) {
          $('.game_mode_button_container > .game_mode_' + i).addClass('choice');
          $('.team_size_button_container > .game_mode_' + i).removeClass('hide');
        }
      }
    }
    this.removeEvent($('.team_size_button_container > button'));
    this.addEventHandlers($('.team_size_button_container > button'), this.teamSizeSelection);
  }

  handleDifficultyReturn() {
    this.boardElement.selectionModalArea.empty();
    this.createDifficultyMenu();
  }

  removeEvent(element) {
    element.off();
  }

  gameModeSelection() {
    const gameModeNumber = $(event.currentTarget).attr('game_mode');
    this.selectedGameMode = this.gameMode[gameModeNumber];
    $('.game_mode_button_container > button').removeClass('choice');
    $(event.currentTarget).addClass('choice');
    $('.team_size_button_container > button').addClass('hide');
    $('.team_size_button_container > .game_mode_' + gameModeNumber).removeClass('hide');
    this.removeEvent($('.team_size_button_container > button'));
    this.addEventHandlers($('.team_size_button_container > button'), this.teamSizeSelection);
  }

  teamSizeSelection() {
    const teamSizeNumber = $(event.currentTarget).text();
    this.selectedTeamSize = parseInt(teamSizeNumber);
    $('.team_size_button_container > button').removeClass('choice');
    $(event.currentTarget).addClass('choice');
    this.createDifficultyMenu();
  }

  difficultySelection() {
    const difficultyNumber = $(event.currentTarget).attr('difficulty');
    this.selectedDifficulty = this.difficulty[difficultyNumber];
    this.createTeamRosterMenu();
  }

  requestPokemon() {
    const typeIndex = $(event.currentTarget).attr('type');
    const typeUrl = "https://pokeapi.co/api/v2/type/" + (parseInt(typeIndex) + 1);
    var ajaxConfigObject = {
      dataType: "json",
      url: typeUrl,
      method: "GET",
      success: this.processGetPokemonData,
      error: this.processGetPokemonError
    };
    $.ajax(ajaxConfigObject);
  }

  processGetPokemonData(response) {
    console.log(response);
    //get type pokemon length
    //create length amount of divs
    //get pokemon sprites and insert into divs
    //name array or key, sprite array or value
    //css
    //add event handlers
    //adjust return icon
  }

  processGetPokemonError(response) {
    console.log(response);
    alert("Error: cannot retrieve type information.")
  }
}
