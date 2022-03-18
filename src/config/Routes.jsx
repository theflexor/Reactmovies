import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Detail from '../pages/detail/Detail'
import Home from '../pages/Home'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/:category/search/:keyword' component={Catalog}/>
                <Route path='/:category/:id' component={Detail}/>
                <Route path='/:category' component={Catalog}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default Routes