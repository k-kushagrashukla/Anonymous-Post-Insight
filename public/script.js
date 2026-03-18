async function analyzePost() {
  const text = document.getElementById("inputText").value;

  const response = await fetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await response.json();

  document.getElementById("results").innerHTML = `
    <h3>Results</h3>
    <p><b>Engagement:</b> ${data.engagementScore}</p>
    <p><b>Clarity:</b> ${data.clarityScore}</p>
    <p><b>Toxicity:</b> ${data.toxicity}</p>
    <p><b>Title:</b> ${data.suggestedTitle}</p>
    <p><b>Improved Version:</b><br>${data.improvedVersion}</p>
  `;
}