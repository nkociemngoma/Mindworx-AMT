import React, {useEffect} from 'react'

import './LearnerLayout.css'

import LearnerSidebar from '../sidebar/LearnerSidebar'
import LearnerTopNav from '../topnav/LearnerTopNav'
import LearnerRoutes from '../LearnerRoutes'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

const LearnerLayout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <LearnerSidebar {...props}/>
                    <div className="layout__content">
                        <LearnerTopNav/>
                        <div className="layout__content-main">
                            <LearnerRoutes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default LearnerLayout
