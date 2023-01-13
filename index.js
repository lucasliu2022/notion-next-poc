import { Client } from "@notionhq/client";

const NOTION_KEY = "secret_V9uPJzEiwaRdZS10KH0iRdbeWpS9LxkwZswLZ0mrh7A";
const NOTION_DATABASE_ID = "ce592fffd6cb4159ad2c78b1e63cf9f7";

const notion = new Client({ auth: NOTION_KEY });

const databaseId = NOTION_DATABASE_ID;

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}

async function queryPage() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response);
  } catch (error) {}
}

queryPage();
