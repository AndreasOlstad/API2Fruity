
document.getElementById('analyzeButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload a JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const data = JSON.parse(event.target.result);

        const apple = data.find(item => item.name === 'Apple');
        const avocado = data.find(item => item.name === 'Avocado');
        const mango = data.find(item => item.name === 'Mango');
        
        let results = '<h2>Analysis Results:</h2>';
        results += `<p>Apple calories: ${apple.nutritions.calories}</p>`;
        results += `<p>Avocado fat: ${avocado.nutritions.fat}</p>`;
        results += `<p>Mango carbohydrates: ${mango.nutritions.carbohydrates}</p>`;
        
        document.getElementById('results').innerHTML = results;
    };
    
    reader.readAsText(file);
});
