import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable';
import { Icon } from 'antd'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import './Main.scss'

const  Loading = ()=> {
    return <div style={{height:'400px'}}>
        <Icon type="loading" />
        {/* <img
         className="flex"
         style={{margin:'200px auto'}}
         width="80"
         height = "80"
         src={require('../../assets/imgs/loading.svg')} alt=""/> */}
    </div>
}
const routes = [
    {
        id:1,
        path:'/index',
        component:Loadable({
            loader:() => import('@/views/Index/Index'),
            loading:Loading
        }),
        authed:false
    },
]
const  Main = (props) => {
    let {
        history
    } = props
    return (
        <>
            <div style={{minHeight:'400px'}}>
                <Switch>
                    {
                        routes.map(item=>{
                            return (
                                // item.authed?
                                //     <PrivateRoute 
                                //     isLogin = {isLogin}
                                //     key={item.id} 
                                //     path={item.path}>
                                //         {
                                //             <item.component />
                                //         }
                                //     </PrivateRoute>:
                                    <Route exact key={item.id} path={item.path}>
                                        {
                                            <item.component />
                                        }
                                    </Route>
                            )
                        })
                    }
                    <Redirect to="/index"></Redirect>
                </Switch>
            </div>
        </>
    )
}

// function PrivateRoute({children,isLogin,...rest}){
//     return <Route {...rest} render={({location}) => {
//         return (
//             isLogin?
//             children: 
//             <Redirect
//                 to={{
//                 pathname: "/sign/login",
//                 state: { from: location }
//                 }}
//             />
//         )
//     }} />
// }
export default Main;
// export default connect(
//     state=>{
//         let {
//             isLogin,
//             locale
//         } = state.globalReducer
//         return { isLogin,locale }
//     }
// )(withRouter(Main));
// bitcoinwindata@gmail.com
// 12qwaszx!
