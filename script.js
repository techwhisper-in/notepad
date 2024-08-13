// Save button click event
document.getElementById('save').addEventListener('click', function() {
	// Get the text from the textarea
	var text = document.getElementById('notepad').value;
	// Save the text to local storage
	localStorage.setItem('notepad', text);
	alert('Text saved!');
});


function saveFile() {
    const text = document.getElementById('notepad').value;
    const fileName = prompt('Enter file name:', 'note.txt');
    if (fileName) {
        const blob = new Blob([text], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.download = fileName;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = '_blank';
        anchor.click();
    }
}

// Clear button click event
document.getElementById('clear').addEventListener('click', function() {
	// Clear the textarea
	document.getElementById('notepad').value = '';
	// Clear local storage
	localStorage.removeItem('notepad');
	alert('Text cleared!');
});

// Find button click event
document.getElementById('find').addEventListener('click', function() {
	// Get the search query from the input field
	var query = document.getElementById('search').value;
	// Get the text from the textarea
	var text = document.getElementById('notepad').value;
	// Find the query in the text
	var result = text.indexOf(query);
	if (result !== -1) {
		// Highlight the found text
		document.getElementById('notepad').selectionStart = result;
		document.getElementById('notepad').selectionEnd = result + query.length;
		// Show the result
		document.getElementById('result').innerHTML = 'Found at position ' + result;
	} else {
		// Show a message if not found
		document.getElementById('result').innerHTML = 'Not found!';
	}
});



function findText() {
    const notepad = document.getElementById('notepad');
    const find = document.getElementById('findText').value;
    const text = notepad.innerText;

    // Remove previous highlights
    notepad.innerHTML = text;

    if (find) {
        const regex = new RegExp(`(${find})`, 'gi');
        const newText = text.replace(regex, '<span class="highlight">$1</span>');
        notepad.innerHTML = newText;
    }
}