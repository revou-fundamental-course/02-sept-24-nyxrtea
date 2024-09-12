document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the values from the input fields
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    // Get the selected calculation type
    const calculationType = document.getElementById('calculationType').value;

    // Get the result element
    const resultElement = document.getElementById('result');

    // Validate input
    if (calculationType === 'area-base-height') {
        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            resultElement.textContent = 'Please enter valid positive numbers for base and height.';
            return;
        }
        // Calculate area using base and height
        const area = 0.5 * base * height;
        resultElement.textContent = `Area of Triangle: ${area.toFixed(2)}`;
    } else {
        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            resultElement.textContent = 'Please enter valid positive numbers for all sides.';
            return;
        }
        // Check if the sides form a valid triangle
        if (!(a + b > c && a + c > b && b + c > a)) {
            resultElement.textContent = 'The provided sides do not form a valid triangle.';
            return;
        }

        if (calculationType === 'perimeter') {
            // Calculate perimeter
            const perimeter = a + b + c;
            resultElement.textContent = `Perimeter of Triangle: ${perimeter.toFixed(2)}`;
        } else if (calculationType === 'area') {
            // Calculate perimeter
            const perimeter = a + b + c;
            // Calculate semi-perimeter
            const s = perimeter / 2;
        }
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset all input fields
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('calculationType').value = 'area';
    document.getElementById('result').textContent = '';
    document.getElementById('baseHeightFields').style.display = 'none';
});

document.getElementById('calculationType').addEventListener('change', function() {
    const calcType = this.value;
    const baseHeightFields = document.getElementById('baseHeightFields');
    
    if (calcType === 'area-base-height') {
        baseHeightFields.style.display = 'block';
        document.getElementById('sideFields').style.display = 'none';
    } else {
        baseHeightFields.style.display = 'none';
        document.getElementById('sideFields').style.display = 'block';
    }
});
