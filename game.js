word = "DREAD"
input = ""
tries = 0
greens = ""
td = ""
tr = ""
win = false;
console.log(wordList)

randomWord()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function randomWord() {
    word = wordList[getRandomInt(wordList.length)].toUpperCase()
}

function onKeyDown(event) {
    event.preventDefault();
}
function deleteBoxes() {
    tr = document.getElementsByTagName('tr')[tries]
    td = tr.getElementsByTagName('td')[input.length]
    td.innerHTML = ""
    //console.log('here')
}
function writeBoxes() {
    tr = document.getElementsByTagName('tr')[tries]
    td = tr.getElementsByTagName('td')[input.length-1]
    td.innerHTML = input[input.length-1]
}

function nextTry() {
    if (input.length != 5) {
       return;
    }
    if (!dictionaryChecker()){
        return;
    }
    wordChecker()

    if (input ==  word) {
        //win
        win = true;
        tries = 7;
        return;
    }
    //reset for next try
    tries += 1
    input = ""
    greens = ""
}

function dictionaryChecker(){
    console.log(wordList.includes(input.toLowerCase()));
    return wordList.includes(input.toLowerCase());
}

function wordChecker() {
    for (let i = 0; i < 5; i++) {
        //console.log(word.includes(input[i]))
        if (word.includes(input[i])) {
            if (word[i] == input[i]) {
                //green
                boxChanger(i, 'green')
                greens += input[i]
            }
            else {
                //yellow
                if (!greens.includes(input[i]))
                    boxChanger(i, 'yellow')
            }
        }
        else
            //grey
            boxChanger(i, 'grey')
      }

    for (let i = 0; i < word.length; i++) {
        letter = word[i]
      }
      
}

function boxChanger(num, color) {
    tr = document.getElementsByTagName('tr')[tries]
    td = tr.getElementsByTagName('td')[num]
    td.className = color += 'Box'
}


window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    

    //handles user input
    switch (event.key) {
        case 'a': input += event.key.toUpperCase(); break;
        case 'b': input += event.key.toUpperCase(); break;
        case 'c': input += event.key.toUpperCase(); break;
        case 'd': input += event.key.toUpperCase(); break;
        case 'e': input += event.key.toUpperCase(); break;
        case 'f': input += event.key.toUpperCase(); break;
        case 'g': input += event.key.toUpperCase(); break;
        case 'h': input += event.key.toUpperCase(); break;
        case 'i': input += event.key.toUpperCase(); break;
        case 'j': input += event.key.toUpperCase(); break;
        case 'k': input += event.key.toUpperCase(); break;
        case 'l': input += event.key.toUpperCase(); break;
        case 'm': input += event.key.toUpperCase(); break;
        case 'n': input += event.key.toUpperCase(); break;
        case 'o': input += event.key.toUpperCase(); break;
        case 'p': input += event.key.toUpperCase(); break;
        case 'q': input += event.key.toUpperCase(); break;
        case 'r': input += event.key.toUpperCase(); break;
        case 's': input += event.key.toUpperCase(); break;
        case 't': input += event.key.toUpperCase(); break;
        case 'u': input += event.key.toUpperCase(); break;
        case 'v': input += event.key.toUpperCase(); break;
        case 'w': input += event.key.toUpperCase(); break;
        case 'x': input += event.key.toUpperCase(); break;
        case 'y': input += event.key.toUpperCase(); break;
        case 'z': input += event.key.toUpperCase(); break;
        case 'Delete': input = input.slice(0,-1); deleteBoxes(); break;
        case 'Backspace': input = input.slice(0,-1); deleteBoxes(); break;
        case 'Enter': nextTry();
    }
    while (input.length > 5) {
        input = input.slice(0,-1);
    }
    console.log(input)
    if (input.length > 0)
        writeBoxes()
    
})
