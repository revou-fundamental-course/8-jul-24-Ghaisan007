document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const resetButton = document.getElementById("reset");
    const resultDiv = document.getElementById("result");
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");

    calculateButton.addEventListener("click", function() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const age = parseFloat(document.getElementById("age").value);
        const gender = document.querySelector('input[name="gender"]:checked');

        if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0 || !gender) {
            alert("Tolong masukkan nilai yang valid untuk semua input.");
            return;
        }

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let category = "";

        if (bmi < 18.5) {
            category = "Kekurangan Berat Badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal (Ideal)";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Kelebihan Berat Badan";
        } else {
            category = "Kegemukan (Obesitas)";
        }

        bmiValue.textContent = `BMI Anda : ${bmi}`;
        bmiCategory.textContent = `Kategori Anda : ${category}`;
        resultDiv.style.display = "block";
    });

    resetButton.addEventListener("click", function() {
        document.querySelector('input[name="gender"]:checked').checked = false;
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("age").value = "";
        resultDiv.style.display = "none";
    });
});
