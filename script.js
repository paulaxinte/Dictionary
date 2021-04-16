// A dictionary example, in order to test the search function
var dictionary = ["kaiju", "wii", "abra", "kadabra", "second", "minute"]
var wordValue = 0

function insertWord() {
    wordValue = $('#insertField').val()
    if (dictionary.find(checkWordList) === undefined) {
        dictionary.push(wordValue)
        updateList()
    }
}

function checkWordList(word) {
    return word.localeCompare(wordValue) === 0
}

function updateList() {
    dictionary.sort()
    $('#dictionary').empty()
    for (word of dictionary) {
        $('#dictionary').append(`
            <div class="card">
                <div class="card-body">` + word + `</div>
            </div>
        `)
    }
}

function searchWord() {
    wordValue = $('#searchField').val()
    if (dictionary.find(checkWordList) === undefined) {
        document.getElementById("searchMessage").innerHTML = "The word \"" + wordValue + "\" has not been found in the dictionary."
        document.getElementById("searchMessage").style.color = "red"
    } else {
        document.getElementById("searchMessage").innerHTML = "The word \"" + wordValue + "\" has been found in the dictionary."
        document.getElementById("searchMessage").style.color = "green"
    }
}