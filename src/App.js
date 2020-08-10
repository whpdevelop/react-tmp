import React from 'react';
// import { connect } from 'react-redux'
// import { nameFn } from '@/store/store/global.reducer'

import Main from '@/layout/Main/Main'
import SignIn from '@/views/SignIn/SignIn'
import ScrollToTop from '@/components/ScrollToTop'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
// import viVN from 'antd/es/locale/vi_VN';
// import zhTW from 'antd/es/locale/zh_TW';

function App({name,nameFn}) {
  return (
    // <ConfigProvider locale={locale}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route  path={`/sign/:id`} exact component={SignIn} />
            <Route  component={Main} />
          </Switch>
        </ScrollToTop>
      </Router>
    // </ConfigProvider>
  );
}
export default App;
// export default connect(
//   state=>{
//     let {
//       name
//     } = state.globalReducer
//     return {
//       name
//     }
//   },{nameFn}
// )(App);
