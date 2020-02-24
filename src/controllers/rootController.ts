import {Request, Response} from "express";
import {scanLessons, LessonInfo} from "./lessonController"

export const rootPage= (req: Request, res: Response) => {
    
    let languages: LessonInfo[] = [{Title:"JavaScript", Description:"Læra JavaScript og grunn í HTML til að keyra JavaScript", Url:"/javascript"}];
    res.render('root', {languages});
};

export const javascript= (req: Request, res: Response) => {
    let language = "javascript";
    let lessons = scanLessons(`../../public/${language}/`, `/lessons/${language}/`);
    console.log(lessons);
    lessons.forEach(lesson => {
        console.log("Title", lesson.Title);
        console.log("Description", lesson.Description);
        console.log("Url", lesson.Url);
    });
    res.render('javascript', {lessons});
};