const TOULOUSE_API =
  "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=parkings-relais&rows=50";

export async function fetchParkings() {
  const response = await fetch(TOULOUSE_API);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les parkings");
  }

  const data = await response.json();


  return data.records.map((record) => ({
    id: record.recordid,
    name: record.fields.nom,
    available: record.fields.places || 0,
    position: record.fields.geo_point_2d,
  }));
}