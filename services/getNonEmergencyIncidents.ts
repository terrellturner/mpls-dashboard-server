import { log } from "console";

const NonEmergencyIncidents = async (): Promise<number> => {
  const incidentsWhereClause = `OPENEDDATETIME >= CURRENT_TIMESTAMP - INTERVAL '7' DAY`;

  const baseUrl = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Public_311_${new Date().getFullYear()}/FeatureServer/0/query`;

  const interpolatedUrl = `${baseUrl}?where=${encodeURIComponent(
    incidentsWhereClause
  )}&returnCountOnly=true&f=json`;

  console.log(interpolatedUrl);

  const res = fetch(interpolatedUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  const amtOfReports = res;

  return amtOfReports;
};

export default NonEmergencyIncidents;
