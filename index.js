import { Client } from "@notionhq/client"


let NOTION_KEY_HELLOWORLD='secret_oaKryu2rMrVmKPwbJEatdCLf3IObj9gcJdlUSj86tYF'
let NOTION_DATABASE_ID_LIFE='9f493263cffa44dead6c570b61362d7f'


// console.log(process.env.NOTION_KEY_HELLOWORLD);
// console.log(process.env.NOTION_DATABASE_ID_LIFE);


// const notion = new Client({ auth: process.env.NOTION_KEY_HELLOWORLD })
// console.log(notion);
// const databaseId = process.env.NOTION_DATABASE_ID_LIFE

const notion = new Client({ auth: NOTION_KEY_HELLOWORLD })
const databaseId = NOTION_DATABASE_ID_LIFE

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    },20000)
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error)
  }
}

addItem("Yurts in Big Sur, California_1")
