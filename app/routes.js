// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {getAsyncInjectors} from 'utils/asyncInjectors';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

export default function createRoutes(store) {
    // Create reusable async injectors using getAsyncInjectors factory
    const {injectReducer, injectSagas} = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

    return [
        {
            path: '/',
            name: 'home',
            getComponent(nextState, cb) {
                const importModules = Promise.all([
                    System.import('containers/HomePage'),
                    System.import('containers/NavigationContainer/reducer'),
                    System.import('containers/NavigationContainer/sagas'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([
                    component,
                    navigationReducer,
                    navigationSagas,
                ]) => {
                    injectReducer('navigationContainer', navigationReducer.default);
                    injectSagas('navigationContainer', navigationSagas.default);

                    renderRoute(component);
                });

                importModules.catch(errorLoading);
            },
        },
        {
            path: '/builder',
            name: 'builderContainer',
            getComponent(nextState, cb) {
                const importModules = Promise.all([
                    System.import('containers/BuilderContainer/reducer'),
                    System.import('containers/BuilderContainer/sagas'),

                    System.import('containers/ExpsContainer/reducer'),
                    System.import('containers/ExpsContainer/sagas'),

                    System.import('containers/SkillsContainer/reducer'),
                    System.import('containers/SkillsContainer/sagas'),

                    System.import('containers/BuilderContainer'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([
                    builderReducer, builderSagas,
                    expsReducer, expsSagas,
                    skillsReducer, skillsSagas,

                    component
                ]) => {
                    injectReducer('builderContainer', builderReducer.default);
                    injectSagas('builderContainer', builderSagas.default);

                    injectReducer('expsContainer', expsReducer.default);
                    injectSagas('expsContainer', expsSagas.default);

                    injectReducer('skillsContainer', skillsReducer.default);
                    injectSagas('skillsContainer', skillsSagas.default);


                    renderRoute(component);
                });

                importModules.catch(errorLoading);
            },
        }, {
            path: '*',
            name: 'notfound',
            getComponent(nextState, cb) {
                System.import('containers/NotFoundPage')
                    .then(loadModule(cb))
                    .catch(errorLoading);
            },
        },
    ];
}
