const NOTION_DATABASE_ID='secret_oaKryu2rMrVmKPwbJEatdCLf3IObj9gcJdlUSj86tYF';
const NOTION_KEY='9f493263cffa44dead6c570b61362d7f?v=bd187472900e46eaa9cdd92794b0751e'


import { Client } from "@notionhq/client"

const notion = new Client({ auth: NOTION_KEY })

const databaseId = NOTION_DATABASE_ID;

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
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")