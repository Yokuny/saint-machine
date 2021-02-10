import fs from 'fs'
import path from 'path'
const contentDirectory = path.join(process.cwd(), 'content')
export default function getContentsTitles(){
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map(fileName => {
        return {
          params: {
            title: fileName.replace(/\.js$/, '')
          }
        }
    })
}