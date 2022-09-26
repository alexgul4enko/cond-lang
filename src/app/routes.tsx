import { lazy } from 'react';
import { MFERoute } from 'cond-app-core/router';
const SomePage = lazy(() => import('pages/some-page').then((module) => ({ default: module.SomePage })));

const routes: MFERoute[] = [
    {
        path: '/',
        component: SomePage,
        name: 'some-page',
        // IMPORTANT:
        // Before deploying your app to production for users,
        // please make sure that switch account functionality works correctly
        // for all your routes.
        //
        // How to switch account:
        // click on profile icon and then click on some account from account list,
        // after that you will be redirected to some page for clicked account.
        //
        // Docs: http://cond-js-docs.infra.us-east-1.conductor.sh/cond-app-core/docs/router/router_configs#switchaccountdestination
        switchAccountDestination: '/:accountId/insight-stream'
    }
];

export default routes;
