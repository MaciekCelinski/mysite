const TypeWriter = function (textElement, words, wait) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    // drugi parametr '10' oznacza system dzisiętny
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false
}

// Type Method

// nadpisujemy funkcje type() która znajduje się w 'TypeWriter'
TypeWriter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Full text of current word
    const fullTxt = this.words[current]

    // Check if deleting
    if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // Insert txt into element
    this.textElement.innerHTML = `<span class='txt'>${this.txt}</span>`

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
        // dwukrotnie szybciej
        typeSpeed /= 2;
    }

    // if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Make a pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
        if (this.wordIndex === 1) {
            this.textElement.className = 'txt2'
            start = false;
            return start
        }
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init od DOM Load
// document.addEventListener('DOMContentLoaded', init)
// można też użyć 
window.onload = init

let start = true
// Init App
function init() {
    const textElement = document.querySelector('.txt-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    if (start === true) {
        // init TypeWriter
        new TypeWriter(textElement, words, wait);
    }
}