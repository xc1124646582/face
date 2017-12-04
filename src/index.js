import 'babel-polyfill';
import React  from 'react';
import { render } from 'react-dom';
import { Router , browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import storeFactory from './util/store';
import { App,Login,Index,FFace,FSystem,FDevice,FDeploy} from './view';
import { Fou,Fdepartment,Fuser} from './component';
import { Identification,Fanalysis,Fnetcamera,FStatus} from './component';
import { FaceVideo} from './component';
import {FFaceq,FFacec} from './component';
import { FSetup,FPolice,FWarning} from './component';
import { Fpeoplese,Fpeoplesecord} from './component';
import 'antd/dist/antd.css';
const store = storeFactory.getInstantiate(initState, browserHistory);
const requireAuth = (nextState, replace) => {

    const falg= false ;

    if (falg) {

        // Redirect to Home page if not an Admin
        replace({ pathname: '/login' });
    
    }
    //TODO 权限验证

};

 

const initState = {

};

console.log(JSON.stringify(store));
const history = syncHistoryWithStore(browserHistory, store);

const routes = {
    component: App,
    path: '',
    childRoutes: [{
        path: 'login',
        component: Login
    },
    {
        path: 'faceVideo',
        component: FaceVideo
    },
    {
        path: '/',
        component: Index,
        childRoutes:[
            {
                path:'face',
                component:FFace,
                onEnter:requireAuth,
                childRoutes:[
                    {
                        path:'query',
                        component:FFaceq,
                        onEnter:requireAuth
                    },
                    {
                        path:'control',
                        component:FFacec,
                        onEnter:requireAuth
                    }
                ]
            },
            {
                path:'system',
                component:FSystem,
                onEnter:requireAuth,
                childRoutes:[
                    {
                        path:'ou',
                        component:Fou,
                        onEnter:requireAuth
                    },
                    {
                        path:'department',
                        component:Fdepartment,
                        onEnter:requireAuth
                    },
                    {
                        path:'user',
                        component:Fuser,
                        onEnter:requireAuth
                    }
                ]
            },{
                path:'device',
                component:FDevice,
                onEnter:requireAuth,
                childRoutes:[
                    {
                        path:'Identification',
                        component:Identification,
                        onEnter:requireAuth
                    },
                    {
                        path:'analysis',
                        component:Fanalysis,
                        onEnter:requireAuth
                    },
                    {
                        path:'netcamera',
                        component:Fnetcamera,
                        onEnter:requireAuth
                    },
                    {
                        path:'status',
                        component:FStatus,
                        onEnter:requireAuth
                    }
                ]
            },{
                path:'deploy',
                component:FDeploy,
                onEnter:requireAuth,
                childRoutes:[
                    {
                        path:'setup',
                        component:FSetup,
                        onEnter:requireAuth
                    },
                    {
                        path:'police',
                        component:FPolice,
                        onEnter:requireAuth
                    },
                    {
                        path:'warning',
                        component:FWarning,
                        onEnter:requireAuth
                    }
                ]
            },{
                path:'people',
                component:FDeploy,
                onEnter:requireAuth,
                childRoutes:[
                    {
                        path:'peoplese',
                        component:Fpeoplese,
                        onEnter:requireAuth
                    },
                    {
                        path:'peoplerecord',
                        component:Fpeoplesecord,
                        onEnter:requireAuth
                    }
                ]
            }]
    }
    ]
};


render(
    <Provider store={store} >
        <Router history={history} routes={routes} />
    </Provider>,
    document.querySelector('.container')
);

