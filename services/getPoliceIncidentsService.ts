import { log } from "console";

const policeIncidents = async (): Promise<number> => {
  const incidentsWhereClause = `reportedDate >= CURRENT_TIMESTAMP - INTERVAL '7' DAY`;

  const baseUrl =
    "https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Police_Incidents_2025/FeatureServer/0/query";

  const interpolatedUrl = `${baseUrl}?where=${encodeURIComponent(
    incidentsWhereClause
  )}&outFields=*&f=json`;

  const res = fetch(interpolatedUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.features.length;
    });

  const amtOfReports = res;

  return amtOfReports;
};

export default policeIncidents;
