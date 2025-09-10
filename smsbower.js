export default async function handler(req, res) {
  const response = await fetch("https://smsbower.com/api/get-countries", {
    headers: { "Authorization": `Bearer ${process.env.SMSBOWER_API_KEY}` }
  });
  const data = await response.json();
  res.status(200).json(data);
}
