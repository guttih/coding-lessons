import {Request, Response} from "express";
import express from "express";
var path     = require('path');
//import {HeimilisfangDeleteById} from "../controllers/HeimilisfangController";
import {MakePage} from "./libs/InfoPage";
import {getJavaScriptLessons } from "./controllers/lessonController";

class Routes {

    constructor() {
        console.log('Routes.console');
    }

    public routes(app:any): void {
        app.use('/lessons',     express.static(path.join(__dirname, '../public')));
        app.route('/api')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send(MakePage('Kennsla í Javascript', 'Forritunarkennsla fyrir krakkana mína'));
            });

        app.route('/api/javascriptlessons')
            .get(getJavaScriptLessons);
        // app.route('/einstaklingar')
        //     .get(einstaklingarGet)
        //     .post(einstaklingurSave);

            
    }
    
}

export {Routes};