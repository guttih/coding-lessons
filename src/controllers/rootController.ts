import {Request, Response} from "express";
import {scanLessons, LessonInfo} from "./lessonController"

export const rootPage= (req: Request, res: Response) => {

    const languages: LessonInfo[] = [{Title:"JavaScript", Description:"Læra JavaScript og grunn í HTML til að keyra JavaScript", Url:"/javascript"}];
    res.render('root', {languages});
};

export const javascript= (req: Request, res: Response) => {
    const language = "javascript";
    const lessons = scanLessons(`../../public/${language}/`, `/lessons/${language}/`);
    res.render('javascript', {lessons});
};