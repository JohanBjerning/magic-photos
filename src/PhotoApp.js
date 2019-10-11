import useCsrf from './csrf';
import React from 'react';
import Photo from './PhotoData';
import {getWebIntegrationId, getTenantUrl} from './util';

export default function PhotoApp() {
    const tenant = getTenantUrl();

    const wid = getWebIntegrationId();

    const [csrfToken, error] = useCsrf(tenant, wid);

    if(!csrfToken || error) return null;
    return (
        <Photo csrfToken={csrfToken}></Photo>
    )
}