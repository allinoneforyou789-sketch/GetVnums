export default async function handler(req, res) {
  try {
    // Example endpoint: get list of countries from SMSBower
    const response = await fetch("https://api.smsbower.com/api/v1/countries", {
      headers: {
        "Authorization": `Bearer ${process.env.SMSBOWER_API_KEY}`
      }
    });

    const data = await response.json();

    // Send the response back to your frontend
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch SMSBower data",
      details: error.message,
    });
  }
}
