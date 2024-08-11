const dictionary = ['cat', 'bat', 'bit', 'but', 'bus', 'bass', 'pass', 'past', 'cast', 'cost', 'most', 'moss']; // Sample dictionary

function startGame() {
    const startWord = document.getElementById('startWord').value.trim().toLowerCase();
    const endWord = document.getElementById('endWord').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    const wordLadder = document.getElementById('wordLadder');

    if (!dictionary.includes(startWord) || !dictionary.includes(endWord)) {
        feedback.textContent = 'Both start and end words must be in the dictionary.';
        return;
    }

    const ladder = findWordLadder(startWord, endWord);

    if (ladder.length === 0) {
        feedback.textContent = 'No ladder found.';
    } else {
        wordLadder.innerHTML = 'Ladder: ' + ladder.join(' → ');
        feedback.textContent = '';
    }
}

function findWordLadder(startWord, endWord) {
    const queue = [[startWord]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const word = path[path.length - 1];

        if (word === endWord) {
            return path;
        }

        for (const neighbor of getNeighbors(word)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return [];
}

function getNeighbors(word) {
    const neighbors = [];
    for (let i = 0; i < word.length; i++) {
        for (let charCode = 97; charCode <= 122; charCode++) {
            const letter = String.fromCharCode(charCode);
            const newWord = word.substring(0, i) + letter + word.substring(i + 1);
            if (dictionary.includes(newWord) && newWord !== word) {
                neighbors.push(newWord);
            }
        }
    }
    return neighbors;
}

function resetGame() {
    document.getElementById('startWord').value = '';
    document.getElementById('endWord').value = '';
    document.getElementById('wordLadder').textContent = '';
    document.getElementById('feedback').textContent = '';
}
