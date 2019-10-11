export function getParamFromEngineUrl(paramToFetch) {
  let param = new URLSearchParams(document.location.search).get(paramToFetch);
  if (!param) {
    const params = new URLSearchParams(document.location.search).get('engine_url');
    if (params) {
      const urlObject = new URL(new URLSearchParams(document.location.search).get('engine_url'));
      param = new URLSearchParams(urlObject.search).get(paramToFetch);
    }
  }
  return param;
}

export function getWebIntegrationId() {
  return 'ID';
}

export function getTenantUrl() {
  return "Tenant";
}