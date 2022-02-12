import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// guardo el path donde estan los posts
const postsDirectory = path.join(process.cwd(), 'src/posts');

// obtengo ordenadamente los datos de las publicaciones
export function getSortedPostsData() {
  // guardo en un arreglo los nombres de los posts en el directorio: posts
  const fileNames = fs.readdirSync(postsDirectory);
  // recorro el arreglo con map
  const allPostsData = fileNames.map((fileName) => {
    // elimino la extension ".md" del nombre del archivo y esto sera el id
    const id = fileName.replace(/\.md$/, '');
    // guardo el path del archivo para leerlo despues
    const fullPath = path.join(postsDirectory, fileName);
    // leo el archivo como un string con codificacion utf-8
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // con gray-matter parseo la metadata del post
    const matterResult = matter(fileContents);
    // combino la metadata con el id
    return {
      id,
      ...matterResult.data,
    };
  });

  // ordeno todos los posts por fecha
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

//obtengo todos los id de los posts
export function getAllPostIds() {
  // guardo en un arreglo los nombres de los posts en el directorio: posts
  const fileNames = fs.readdirSync(postsDirectory);
  // recorro el arreglo con map
  return fileNames.map((fileName) => {
    //retorno el id del post sin la extension .md
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// obtengo la data de un post por id
export async function getPostData(id) {
  // guardo el path del archivo para leerlo despues
  const fullPath = path.join(postsDirectory, `${id}.md`);
  // leo el archivo como un string con codificacion utf-8
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // con gray-matter parseo la metadata del post
  const matterResult = matter(fileContents);
  // con remark convierto el markdown en un string HTML :)
  const processedContent = await remark().use(html).process(matterResult.content);
  // gurado el contenido HTML
  const contentHtml = processedContent.toString();
  // combino los datos con el id y el contenido HTML
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
