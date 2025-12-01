import fetch from 'node-fetch';

export async function getWeather(lat: number, lon: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
  const res = await fetch(url);
  return res.json();
}
