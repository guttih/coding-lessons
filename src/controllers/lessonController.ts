import {Request, Response, response} from "express";
import * as fs from "fs";
import * as path from 'path';
import * as cherrio from 'cheerio';


type LessonInfo = {
    Title: string,
    Description: string,
    Url: string
};

const scanLesson = (fullDiskPath: string, fullRelativeUrl: string) : LessonInfo => {

        let file = fs.readFileSync(fullDiskPath, 'utf8');
        const $ = cherrio.load(file);
        let info:LessonInfo = {Title:"",Description:"",Url:fullRelativeUrl};
        let test = $('h1');
        if (test.length > 0 && test[0].childNodes.length > 0 && test[0].childNodes[0].data !== undefined)  {
            info.Title = test[0].childNodes[0].data;
        }
        test = $('.description');
        if (test.length > 0 && test[0].childNodes.length > 0 && test[0].childNodes[0].data !== undefined)  {
            info.Description = test[0].childNodes[0].data;
        }
        return info;
}

const scanLessons = (diskPath: string, relativeUrl: string) : LessonInfo[] => {
    let ret: LessonInfo[] = [];
    let num = 0;
    let numStr = "";
    while(true) {
        num++;
        numStr = num < 10? '0'+num.toString() : num.toString();
        let subUrl = `lesson${numStr}/index.html`;
        let strPath = path.join(__dirname, `${diskPath}${subUrl}`);
        try {
            ret.push(scanLesson(strPath, `${relativeUrl}${subUrl}`));
            console.log(strPath);
        } catch(e) {
            break;
        }
    }
    return ret;
}
export const getJavaScriptLessons = async (req: Request, res: Response) =>{

    let language = "javascript";
    res.send(scanLessons(`../../public/${language}/`, `/lessons/${language}/`));
};

