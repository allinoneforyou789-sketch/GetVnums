export default async function handler(req, res) {
  try {
    // Call 5sim API to get countries
    const response = await fetch("https://5sim.net/v1/guest/countries", {
      headers: {
        "Authorization": `Bearer ${process.env.FIVESIM_API_KEY}`
      }
    });

    const data = await response.json();

    // Send data back to your frontend
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch 5sim data", details: error.message });
  }
}
