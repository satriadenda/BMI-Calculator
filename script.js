const hitungBtn = document.querySelector('#hitung-btn');
const beratInput = document.querySelector('#berat');
const tinggiInput = document.querySelector('#tinggi');
const bmiResult = document.querySelector('#bmi');
const statusResult = document.querySelector('#status');

hitungBtn.addEventListener('click', () => {
	const berat = parseFloat(beratInput.value);
	const tinggi = parseFloat(tinggiInput.value) / 100;
	
	if (berat && tinggi) {
		const bmi = berat / (tinggi ** 2);
		bmiResult.textContent = `BMI: ${bmi.toFixed(1)}`;
		
		if (bmi < 18.5) {
			statusResult.textContent = 'Underweight';
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			statusResult.textContent = 'Normal weight';
		} else if (bmi >= 25 && bmi <= 29.9) {
			statusResult.textContent = 'Overweight';
		} else {
			statusResult.textContent = 'Obesity';
		}
	} else {
		bmiResult.textContent = '';
		statusResult.textContent = 'Silakan masukkan berat badan dan tinggi badan Anda';
	}
});
