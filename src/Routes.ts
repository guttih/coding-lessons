import {Request, Response} from "express";
import express from "express";
import  path from "path";
// import {HeimilisfangDeleteById} from "../controllers/HeimilisfangController";
import {MakePage} from "./libs/InfoPage";
import {getJavaScriptLessons } from "./controllers/lessonController";
import { rootPage, javascript } from "./controllers/rootController";

class Routes {

    // constructor() {}
    public routes(app:any): void {
        app.use('/lessons',     express.static(path.join(__dirname, '../public')));

        app.route('/')
            .get(rootPage);
            app.route('/javascript')
            .get(javascript);

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