    document.getElementById('bmiForm').addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const bmiValue = document.getElementById("bmivalue");

    bmiValue.innerText = `Your BMI: ${bmi}`;
    });
