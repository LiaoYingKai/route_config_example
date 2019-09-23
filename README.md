# Route Config 配置

- route
    - config.js
        - route 靜態的配置檔，裡面爲引入 component 與設定 router 路徑的地方
    - index.js
        - 只給 layout 使用的，爲第一次載入 renderRoute 與 config 的地方
    - loadable.js
        - code split 的方式，透過 loadable 可以將引入的 component 做代碼分離，需要的時候再載入 component ，並且可以自定義 Loading 的畫面
    - renderRoute.js
        - render route 的檔案，透過使用 RenderRoute ，丟入要 render 的 routes ，就可以將頁面透過路徑 render 出來，而路由下面還有路由的話，可以透過 props 下去的 routes ，一樣使用這一個方法
    ```javascript=
    // 最外層的 layout，直接引入 route 的 index
    import LayoutRouter from '../route';
    
    function Layout() {
        return (
            <Router>
                <LayoutHeader/>
                <div className="home-page__content">
                    <LayoutRouter/>
                </div>
            </Router>
        );
    }
    // 底下有其他子路由的話，引入 RenderRoute ，將 props 下去的 routes 丟進去
    import React, { Component, } from 'react';
    import PropTypes from 'prop-types';
    import { RenderRoute } from '../../route/renderRoute';
    import { NavLink } from 'react-router-dom';

    import './style.scss';

    const propTypes = { 
        routes: PropTypes.array,
    };

    class About extends Component {
        render() {
            const { routes } =this.props;

            return (
                <div className="about">
                    <ul>
                        <li >
                            <NavLink to='/about/me'>me</NavLink>
                        </li>
                        <li >
                            <NavLink to='/about/he'>he</NavLink>
                        </li>
                    </ul>
                    {RenderRoute(routes)}
                </div>
            );
        }
    }

    About.propTypes = propTypes;

    export default About;
    ```