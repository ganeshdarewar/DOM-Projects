let optionsButtons = document.querySelectorAll(".option-button");
let advanceOptionsButtons = document.querySelectorAll(".adv-option-button");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let scriptButtons = document.querySelectorAll(".script");
let formatButtons = document.querySelectorAll(".format");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

//   intial settings

function initializer() {
  /*
    function calls for highlighting buttons
    no highlights for link, unlink, undo, redo
    since they are one time operations
    */
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //    create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerText = value;
    fontName.appendChild(option);
  });

  // fontsize allows only till 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    fontSizeRef.appendChild(option);
  }
  // default font size
  fontSizeRef.value = 3;
}

// highlight clcik button
function highlighter(className, needsRemoval) {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      // needremoval = true means only one buttons should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;
        // if currentlty click button is active
        if (button.classList.contain("active")) {
          alreadyActive = true;
        }

        //remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          // highlight clicked button
          button.classList.add("active");
        }
      } else {
        // if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
}

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

// main logic

function modifyText(command, defaultUi, value) {
  // execCommand executes command on selected
  document.execCommand(command, defaultUi, value);
}

// for basic opertions which dont need value

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

// options that require value parameter (e.g. colors, fonts)
advanceOptionsButtons.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

// link
linkButton.addEventListener("click", () => {
  let userLink = prompt("enter a URL");

  // if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = `https://${userLink}`;
    modifyText(linkButton.id, false, userLink);
  }
});

window.addEventListener("load", initializer);
