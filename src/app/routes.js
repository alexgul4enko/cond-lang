import { lazy } from 'react';
const Layout = lazy(() => import('layout').then((module) => ({ default: module.Layout })));
const Intl = lazy(() => import('pages/intl').then((module) => ({ default: module.Int })));
const GNU = lazy(() => import('pages/gnu').then((module) => ({ default: module.GNU })));

const routes = [
    {
        path: '/',
        layout: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                name: 'root',
                redirectTo: 'gnu'
            },
            {
                path: '/gnu',
                component: GNU,
                name: 'gnu',
                exact: true
            },
            {
                path: '/intl',
                component: Intl,
                name: 'intl',
                exact: true
            }
        ]
    }
];

export default routes;
