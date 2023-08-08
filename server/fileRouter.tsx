
import express from 'express';
import React from 'react';
import Layout from '../app/layout';
import path from 'path'
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import fs from 'fs'
import { cwd } from 'process';
import NotFound from './NotFound';
export default async function fileRouter(req: express.Request, res: express.Response, next: express.NextFunction) {
    const CWD = cwd()
    const pathname = req.path
    const childrenPath = path.join(CWD, 'app',pathname, 'page.js')


    const dirExists = fs.existsSync(childrenPath)
    
    console.log({ childrenPath, pathname })
    if(!dirExists) {
        console.log({ dirExists, childrenPath })
        const App = renderToPipeableStream(<NotFound/>)
        return App.pipe(res)
    }

    try {
        const Component = await import (childrenPath)
        const Child = React.createElement(Component.default ?? Component.page, null)
        const App = renderToPipeableStream(React.createElement(Layout, null, Child));
        App.pipe(res);
        

    } catch (error) {

        const App = renderToPipeableStream(<Layout>500 internal server error { (error as Error).message }</Layout>)
        App.pipe(res)

    } finally {
        next()
    }

    
    

}