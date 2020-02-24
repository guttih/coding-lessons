
type PageRouteInfo = {
    path: string,
    method:string,
    description:string
};

const pageRouts:PageRouteInfo[] = [
    {   path: "/api/javascriptlessons",                     method: "get",      description: `Sækir öll javascript lesson objects`                      }
];


export const MakePage = (title: string, description:string):string => {
    const styles = `
    <style>
        .center          {margin: auto;width: 50%;padding: 10px;}
        .container       {padding-top: 40px; padding-right: 40px; max-width:800px}
        .title           {padding-bottom: 10px; font-size: 24px; }
        .description     {padding-bottom: 15px;font-size: 18px;padding-left: 10px;font-style: italic;}
        .td-get          {color: green;font-weight: bold;}
        .td-post         {color:orange;}
        .td-delete       {color:red;}
        td,th            {text-align: left;padding-left: 10px;padding-bottom: 5px;border-bottom: 1px solid gray}
        th               {border-bottom: 2px solid gray}
    </style>
`
    const html = `
    <html>
        <head>${styles}</head>
        <body>
            <div class="container center">
                <div class="title">${title}</div>
                <div class="description">${description}</div>
                ${makeTable(pageRouts)}
            </div>
        </body>
    </html>
    `;
    return html;
}

const makeHref = (path:string, method:string):string => {
    return method ==="get" && !path.includes(':')? `<a href="${path}">${path}</a>`:path;
}

const makeTable = (routes: PageRouteInfo[]):string => {

    const head = `
  <table class="table">
    <thead class="head">
        <tr>
        <th>Slóð</th>
        <th>Aðgerð</th>
        <th>Lýsing</th>
        </tr>
    </thead>

    `;
    let body='<tbody>';
    routes.forEach(element => {
        body+=`\n<tr> <td class="td-path"> ${makeHref(element.path, element.method)} </td> <td class="td-method"> <span class="td-${element.method}">${element.method}</span> </td> <td class="td-description"> ${element.description} </td> </tr>`;
    });
    body+='</body>';

    const footer = `
</table>`;
    return `${head}${body}${footer}`;
}