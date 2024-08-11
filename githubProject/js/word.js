const gridContainer = document.getElementById('grid');
        const wordList = document.getElementById('wordList');
        const words = ['안녕하세요', '감사합니다', '학교', '커피', '컴퓨터', '친구', '가족', '마시다', '말하다', '보다']; // Korean words to find
        const gridSize = 10;
        const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
        let selectedCells = [];
        let highlightedWords = [];

        // Fill grid with words and random letters
        function fillGrid() {
            // Clear grid
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    grid[i][j] = '';
                }
            }

            words.forEach(word => {
                placeWord(word);
            });

            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    if (grid[i][j] === '') {
                        grid[i][j] = String.fromCharCode(12593 + Math.floor(Math.random() * 58)); // Random Korean letter
                    }
                }
            }
        }

        // Place word in grid
        function placeWord(word) {
            const direction = Math.floor(Math.random() * 3); // 0: horizontal, 1: vertical, 2: diagonal
            let placed = false;

            while (!placed) {
                const row = Math.floor(Math.random() * gridSize);
                const col = Math.floor(Math.random() * gridSize);
                const fits = checkFit(word, row, col, direction);

                if (fits) {
                    for (let i = 0; i < word.length; i++) {
                        const [r, c] = getNextCell(row, col, direction, i);
                        grid[r][c] = word[i];
                    }
                    placed = true;
                }
            }
        }

        // Check if the word fits in the grid
        function checkFit(word, row, col, direction) {
            for (let i = 0; i < word.length; i++) {
                const [r, c] = getNextCell(row, col, direction, i);
                if (r < 0 || r >= gridSize || c < 0 || c >= gridSize || (grid[r][c] !== '' && grid[r][c] !== word[i])) {
                    return false;
                }
            }
            return true;
        }

        // Get the next cell based on direction
        function getNextCell(row, col, direction, offset) {
            switch (direction) {
                case 0: return [row, col + offset]; // horizontal
                case 1: return [row + offset, col]; // vertical
                case 2: return [row + offset, col + offset]; // diagonal
            }
        }

        // Create grid HTML
        function createGrid() {
            gridContainer.innerHTML = '';
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.textContent = grid[i][j];
                    cell.dataset.row = i;
                    cell.dataset.col = j;
                    cell.addEventListener('click', selectCell);
                    gridContainer.appendChild(cell);
                }
            }
        }

        // Handle cell selection
        function selectCell(e) {
            const cell = e.target;
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            const cellObj = { row, col, element: cell };
            cell.classList.toggle('selected');
            
            const index = selectedCells.findIndex(c => c.row === row && c.col === col);
            if (index > -1) {
                selectedCells.splice(index, 1);
            } else {
                selectedCells.push(cellObj);
            }

            checkSelectedWord();
        }

        // Check if the selected cells form a valid word
        function checkSelectedWord() {
            const selectedText = selectedCells.map(c => grid[c.row][c.col]).join('');
            
            if (words.includes(selectedText)) {
                highlightWord(selectedCells, true);
                highlightedWords.push(selectedText);
                wordList.querySelectorAll('li').forEach(li => {
                    if (li.textContent === selectedText) {
                        li.classList.add('text-success');
                    }
                });
            } else if (selectedCells.length > 0) {
                highlightWord(selectedCells, false);
            }
        }

        // Highlight the selected word on the grid
        function highlightWord(cells, isCorrect) {
            cells.forEach(cellObj => {
                if (isCorrect) {
                    cellObj.element.classList.add('highlight');
                } else {
                    cellObj.element.classList.add('incorrect');
                }
            });
            // Clear selected cells after checking
            selectedCells.forEach(cellObj => {
                if (!isCorrect) {
                    cellObj.element.classList.remove('selected');
                }
            });
            if (isCorrect) selectedCells = [];
        }

        // Reset game
        function resetGame() {
            selectedCells = [];
            highlightedWords = [];
            fillGrid();
            createGrid();
            wordList.innerHTML = words.map(word => `<li>${word}</li>`).join('');
        }

        // Initialize the game
        resetGame();