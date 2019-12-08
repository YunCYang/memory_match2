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
    this.selectedGameMode = null;
    this.selectedTeamSize = null;

    this.handleMenu = this.handleMenu.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
    this.closeSelectionModal = this.closeSelectionModal.bind(this);
    this.gameModeSelection = this.gameModeSelection.bind(this);
    this.teamSizeSelection = this.teamSizeSelection.bind(this);
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

    let modalContent = $('.selection_modal_content').append(selectionHead);
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
    this.addEventHandlers($('.selection_modal .close'), this.closeSelectionModal);
    this.addEventHandlers($('.game_mode_button_container > button'), this.gameModeSelection);
    this.removeEvent(this.boardElement.menuButton);
  }

  closeSelectionModal() {
    $('.selection_modal').removeClass('pop_left').empty();
    this.removeEvent($('.selection_modal .close'));
    this.addEventHandlers(this.boardElement.menuButton, this.handleMenu);
  }

  createTeamRosterMenu() {
    $('.selection_modal').empty();
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
    this.createTeamRosterMenu();
  }
}
