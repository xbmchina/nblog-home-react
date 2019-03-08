import React from 'react'
import Loadable from "react-loadable"

let config = [
    {
        name: '/',
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('../components/pc/pc_blog_content'),
            loading: () => <div />
        })
    },
    {
        name: 'home',
        path: '/home',
        exact: true,
        component: Loadable({
            loader: () => import('../components//pc/pc_blog_content'),
            loading: () => <div />
        })
    },
    {
        name: 'detail',
        path: '/detail/:id',
        exact: false,
        component: Loadable({
            loader: () => import('../components/pc/pc_article_detail'),
            loading: () => <div />
        })
    },
    {
        name: 'timeline',
        path: '/timeline',
        exact: true,
        component: Loadable({
            loader: () => import('../components/pc/pc_timeline_index'),
            loading: () => <div />
        })
    },
    {
        name: 'album',
        path: '/album',
        exact: true,
        component: Loadable({
            loader: () => import('../components/pc/pc_album_index'),
            loading: () => <div />
        })
    },
    {
        name: 'message',
        path: '/message',
        exact: true,
        component: Loadable({
            loader: () => import('../components/pc/pc_message_index'),
            loading: () => <div />
        })
    },
    {
        name: 'about',
        path: '/about',
        exact: true,
        component: Loadable({
            loader: () => import('../components/pc/pc_aboutme_index'),
            loading: () => <div />
        })
    }
    
]

export default config