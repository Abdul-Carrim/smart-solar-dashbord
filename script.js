// Fake data simulation (replace later with ESP32/Firebase data)
let solarPower = 120;
let battery = 65;
let consumed = 50;

// Update values dynamically
function updateDashboard() {
  document.getElementById("solarPower").innerText = solarPower + " kW";
  document.getElementById("battery").innerText = battery + "%";
  document.getElementById("consumed").innerText = consumed + " kWh";
}

updateDashboard();

// Function to add log entry
function addLog(event, status) {
  const logsTable = document.getElementById("logs");
  const row = document.createElement("tr");

  const timeCell = document.createElement("td");
  const eventCell = document.createElement("td");
  const statusCell = document.createElement("td");

  const now = new Date().toLocaleTimeString();

  timeCell.textContent = now;
  eventCell.textContent = event;
  statusCell.textContent = status;

  row.appendChild(timeCell);
  row.appendChild(eventCell);
  row.appendChild(statusCell);

  logsTable.prepend(row); // Add new logs at the top
}

// Toggle buttons with logs
document.getElementById("lightBtn").onclick = function() {
  this.classList.toggle("off");
  const status = this.classList.contains("off") ? "OFF" : "ON";
  this.innerText = status === "OFF" ? "💡 Lights OFF" : "💡 Lights ON";
  addLog("Lights", status);
};

document.getElementById("fridgeBtn").onclick = function() {
  this.classList.toggle("off");
  const status = this.classList.contains("off") ? "OFF" : "ON";
  this.innerText = status === "OFF" ? "🧊 Fridge OFF" : "🧊 Fridge ON";
  addLog("Fridge", status);
};

document.getElementById("fanBtn").onclick = function() {
  this.classList.toggle("off");
  const status = this.classList.contains("off") ? "OFF" : "ON";
  this.innerText = status === "OFF" ? "🌀 Fan OFF" : "🌀 Fan ON";
  addLog("Fan", status);
};

document.getElementById("chargeBtn").onclick = function() {
  this.classList.toggle("off");
  const status = this.classList.contains("off") ? "Stopped" : "Charging";
  this.innerText = status === "Stopped" ? "🔋 Resume Charging" : "🔋 Stop Charging";
  addLog("Battery Charging", status);
};

// Chart.js Example
const ctx = document.getElementById('usageChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lights', 'Fridge', 'Fan'],
    datasets: [{
      label: 'Power Usage (W)',
      data: [30, 100, 60],
      borderWidth: 1,
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } }
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});

// Example battery alert log
if (battery >= 100) {
  addLog("Battery", "Full");
}
if (battery <= 20) {
  addLog("Battery", "Low");
}
if (solarPower < consumed) {
  addLog("Solar Power", "Insufficient");
}
if (solarPower > consumed) {
  addLog("Solar Power", "Sufficient");
}
if (consumed > 80) {
  addLog("Power Consumption", "High");
}
if (consumed < 20) {
  addLog("Power Consumption", "Low");
}
if (battery < 20 && solarPower < consumed) {
  addLog("Alert", "Low Battery & Insufficient Solar Power");
}
if (battery > 80 && solarPower > consumed) {
  addLog("Status", "Battery Healthy & Sufficient Solar Power");
}
if (battery > 50 && consumed < 50) {
  addLog("Status", "Battery Good & Low Consumption");
}
if (battery < 30 && consumed > 70) {
  addLog("Alert", "Critical Battery & High Consumption");
}
if (solarPower < 50 && consumed > 70) {
  addLog("Alert", "Low Solar Power & High Consumption");
}
if (solarPower > 100 && consumed < 30) {
  addLog("Status", "High Solar Power & Low Consumption");
}
if (battery < 20 && solarPower < 50) {
  addLog("Alert", "Critical Battery & Low Solar Power");
}
if (battery > 80 && solarPower > 100) {
  addLog("Status", "Battery Full & High Solar Power");
}
if (consumed > 90) {
  addLog("Alert", "Very High Power Consumption");
}
if (consumed < 10) {
  addLog("Status", "Very Low Power Consumption");
}
if (battery < 10) {
  addLog("Alert", "Battery Critically Low");
}
if (battery > 90) {
  addLog("Status", "Battery Almost Full");
}
if (solarPower < 20) {
  addLog("Alert", "Solar Power Critically Low");
}
if (solarPower > 150) {
  addLog("Status", "Solar Power Very High");
}
if (battery < 30 && consumed > 80) {
  addLog("Alert", "Low Battery & Very High Consumption");
}
if (battery > 70 && consumed < 30) {
  addLog("Status", "Good Battery & Low Consumption");
}
if (solarPower < 30 && consumed > 70) {
  addLog("Alert", "Low Solar Power & High Consumption");
}
if (solarPower > 120 && consumed < 20) {
  addLog("Status", "High Solar Power & Very Low Consumption");
}
if (battery < 15 && solarPower < 30) {
  addLog("Alert", "Critical Battery & Very Low Solar Power");
}
if (battery > 85 && solarPower > 120) {
  addLog("Status", "Battery Almost Full & High Solar Power");
}
if (consumed > 95) {
  addLog("Alert", "Extremely High Power Consumption");
}
if (consumed < 5) {
  addLog("Status", "Extremely Low Power Consumption");
}
if (battery < 5) {
  addLog("Alert", "Battery Dangerously Low");
}
if (battery > 95) {
  addLog("Status", "Battery Fully Charged");
}