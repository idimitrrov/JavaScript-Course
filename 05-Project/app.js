// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide Results     
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(calculateResults, 1000);
    // Show loader 

    e.preventDefault();
});

// Calculate Results
function calculateResults(){
    // Ui Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2) + "$";
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)  + "$";
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2)  + "%";

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';
    } else{
        showError('Please check your numbers!');
        // Hide results
        document.getElementById('results').style.display = 'none';
         // Hide loader
         document.getElementById('loading').style.display = 'none';
    }
}

// Show Error
function showError(error){
    // Check if error is created
    const existingError = document.querySelector(".alert");
    
    if (existingError) {
        existingError.innerHTML = error;
        existingError.style.opacity = 1;
        return;
    }
    
    // Create div
    const errorDiv = document.createElement('div');

    // Get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger'

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error 
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    clearError(document.querySelector('.alert'), 1000);
} 

// Clear error
function clearError(el, speed){
    var seconds = speed/1000;
    el.style.opacity = 1;
    el.style.transition = "opacity "+seconds+"s ease";
    
    setTimeout(function() {
        el.style.opacity = 0;
        setTimeout(function() {
            el.parentNode.removeChild(el);
        }, speed);
    }, speed);
}

