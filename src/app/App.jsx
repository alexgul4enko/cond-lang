import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppRouter, RouterConfig } from 'cond-app-core/router';
import routes from './routes';

const history = createBrowserHistory({
    basename: '/u'
});

export default function App() {
    return (
        <Router history={history}>
            <RouterConfig routes={routes}>
                <AppRouter />
            </RouterConfig>
        </Router>
    );
}
