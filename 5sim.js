export default async function handler(req, res) {
  const response = await fetch("https://5sim.net/v1/countries", {
    headers: { "Authorization": `Bearer ${process.env.FIVESIM_API_KEY}` }
  });
  const data = await response.json();
  res.status(200).json(data);
}
