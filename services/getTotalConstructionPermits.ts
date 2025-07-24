const GetTotalConstructionPermits = async (): Promise<number | null> => {
  const incidentsWhereClause = `issueDate >= CURRENT_TIMESTAMP - INTERVAL '7' DAY`;

  const baseUrl = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/CCS_Permits/FeatureServer/0/query`;

  const interpolatedUrl = `${baseUrl}?where=${encodeURIComponent(
    incidentsWhereClause
  )}&outFields=VALUE&f=json`;

  console.log(interpolatedUrl);

  let res = null;

  try {
    res = await fetch(interpolatedUrl)
      .then((res) => res.json())
      .then((data) => {
        let permitTotal = 0;
        for (let i = 0; i < data.features.length; i++) {
          permitTotal += data.features[i].attributes.value;
        }
        return permitTotal;
      });
  } catch (error) {
    console.log(error);
  }

  return res;
};

export default GetTotalConstructionPermits;
