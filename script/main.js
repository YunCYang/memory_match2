$(document).ready(startGame);

function startGame() {
  const NewBoard = new GameBoard({
    menuButton: $('.menu_image'),
    //random_1B_Button: null,
    //randomDraftButton: null,
    //draftSimpleButton: null,
    //draftTournamentButton: null,
    statButton: null,
    settingsButton: $('.settings_image'),
    resetButton: null,
    pauseButton: null,
    muteButton: null,
    soundButton: null,
    resumeButton: null,
    selectionCloseButton: null,
    settingsCloseButton: null,
    statCloseButton: null,
    //gameModeArea: null,
    //random_1B_Area: null,
    //randomDraftArea: null,
    //draftSimpleArea: null,
    //draftTournamentArea: null,  //probably a better idea to put these into a new class
    //teamSelectionArea
    //deckSelectionArea
    //settingsArea
    selectionModalArea: $('.selection_modal'),
    settingsModalArea: $('.settings_modal'),
    mainContent: $('.main_content')
    //reserved for aside part
  });
  NewBoard.addEventHandlers();
}

/* test area
*/
