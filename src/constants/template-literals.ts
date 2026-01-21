export const server_start_format = (port: number, api_version: string) => {
    return `
  GRAPHQL SERVER - http://localhost:${port}/${api_version}/graphql
  `;
};