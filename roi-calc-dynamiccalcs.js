// scripts.js
document.getElementById("calculateButton").addEventListener("click", function() {
    // Gather Inputs
    const suppliers = parseInt(document.getElementById("suppliers").value);
    const quotes = parseInt(document.getElementById("quotes").value);
    const pos = parseInt(document.getElementById("pos").value);
    const teamSize = parseInt(document.getElementById("teamSize").value);
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const errors = parseInt(document.getElementById("errors").value);
    const costPerError = parseFloat(document.getElementById("costPerError").value);
    const softwareCost = parseFloat(document.getElementById("softwareCost").value);

    // Status Quo Calculations
    const timePerSupplier = 10; // hours
    const timePerQuote = 2; // hours
    const timePerPO = 3; // hours
    const analysisTime = 5; // hours

    const totalTime = (suppliers * timePerSupplier) + (quotes * timePerQuote) + (pos * timePerPO) + analysisTime;
    const statusQuoCost = totalTime * hourlyRate * teamSize + (errors * costPerError);

    // New Way Calculations
    const newTimePerSupplier = 3; // hours
    const newTimePerQuote = 0.5; // hours
    const newTimePerPO = 1; // hours
    const newAnalysisTime = 2; // hours
    const errorReduction = 0.9; // 90% reduction

    const newTotalTime = (suppliers * newTimePerSupplier) + (quotes * newTimePerQuote) + (pos * newTimePerPO) + newAnalysisTime;
    const newCost = (newTotalTime * hourlyRate * teamSize) + (errors * errorReduction * costPerError) + softwareCost;

    // Savings and ROI
    const savings = statusQuoCost - newCost;
    const roi = (savings / softwareCost) * 100;

    // Display Results
    document.getElementById("results").style.display = "block";
    document.getElementById("savings").innerText = `Annual Savings: $${savings.toFixed(2)}`;
    document.getElementById("roiPercentage").innerText = `ROI: ${roi.toFixed(2)}%`;
});
