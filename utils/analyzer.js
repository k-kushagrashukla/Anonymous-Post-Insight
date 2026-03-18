function analyzeText(text) {
  const words = text.trim().split(" ");
  const wordCount = words.length;

  let engagementScore = Math.min(100, wordCount * 3);

  let clarityScore = text.includes("?") ? 85 : 70;

  const toxicWords = ["hate", "idiot", "stupid", "useless"];

  let toxicity = "Low";

  toxicWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      toxicity = "High";
    }
  });

  const suggestedTitle = words.slice(0, 6).join(" ") + "...";

  const improvedVersion =
    text +
    "\n\nTip: Try adding a clear question to increase engagement.";

  return {
    engagementScore,
    clarityScore,
    toxicity,
    suggestedTitle,
    improvedVersion
  };
}

module.exports = analyzeText;