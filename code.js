function calculateEMI(p, r, t) {
    let monthlyRate = r / 12 / 100;
    let emi = (p * monthlyRate * Math.pow(1 + monthlyRate, t)) / 
              (Math.pow(1 + monthlyRate, t) - 1);
    return emi.toFixed(2);
}

console.log("EMI:", calculateEMI(50000, 5, 24));
