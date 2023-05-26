const apiKey = process.env["DATABASE_API_KEY"] as string;
const apiUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ivioh/endpoint/data/v1";

export async function getRedirect(id: string) {
  return fetch(`${apiUrl}/action/findOne`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      dataSource: "Default",
      database: "main",
      collection: "redirects",
      filter: { id: id },
    }),
    cache: "no-cache",
  })
    .then((response) => response.json())
    .then(
      (data) =>
        data.document as {
          id: string;
          url: string;
        }
    );
}