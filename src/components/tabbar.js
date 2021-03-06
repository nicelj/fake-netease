/**
 * Created by Administrator on 2017/8/11.
 */
import React from 'react'
import {TabBar, Icon} from 'antd-mobile'
import hoc from '../redux/wrapcomponent'
import {withRouter} from "react-router-dom";
// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()

@hoc({id: 'currentTab', url: ''})
@withRouter
class TabMenubar extends React.Component {
    render() {
        const {state, actions} = this.props
        return (<TabBar
            unselectedTintColor="#949494"
            tintColor="#f5f5f5"
            barTintColor="#696565"
            // hidden={state.hidden}
        >
            <TabBar.Item
            icon={<div className="tabbar-1 tabbar-icon"/>}
            selectedIcon={<div className="tabbar-1-active tabbar-icon"/>}
            title="发现音乐"
            key="tab1"
            onPress={()=>{actions.activeTab('tab1');this.props.history.push('/')}}
            selected={state === 'tab1'}
            data-seed="logId1"
            />
            <TabBar.Item
                icon={<div className="tabbar-2 tabbar-icon"/>}
                selectedIcon={<div className="tabbar-2-active tabbar-icon"/>}
            title="我的音乐"
            key="tab2"
            selected={state === 'tab2'}
            onPress={()=>{actions.activeTab('tab2');this.props.history.push('/mymusic')}}
            data-seed="logId1"
            />
            <TabBar.Item
                icon={<div className="tabbar-3 tabbar-icon"/>}
                selectedIcon={<div className="tabbar-3-active tabbar-icon"/>}
            title="朋友"
            selected={state === 'tab3'}
            key="tab3"
            onPress={()=>{actions.activeTab('tab3');this.props.history.push('/friends')}}
            data-seed="logId1"
            />
            <TabBar.Item
            selected={state === 'tab4'}
            icon={<div className="tabbar-4 tabbar-icon"/>}
            selectedIcon={<div className="tabbar-4-active tabbar-icon"/>}
            title="账号"
            onPress={()=>{actions.activeTab('tab4');this.props.history.push('/account')}}
            key="tab4"
            />
        </TabBar>)
    }
}
export default TabMenubar