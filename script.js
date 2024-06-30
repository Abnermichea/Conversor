document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultDiv = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        // Tasa de cambio fija para simplificar, en un caso real se debería obtener de una API
        const exchangeRates = {
            'USD': { 'EUR': 0.85, 'GBP': 0.75, 'USD': 1 },
            'EUR': { 'USD': 1.18, 'GBP': 0.88, 'EUR': 1 },
            'GBP': { 'USD': 1.33, 'EUR': 1.14, 'GBP': 1 }
        };

        if (!amount || isNaN(amount)) {
            resultDiv.innerHTML = 'Por favor, ingrese una cantidad válida.';
            return;
        }

        const rate = exchangeRates[fromCurrency][toCurrency];
        const result = amount * rate;

        resultDiv.innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    });
});