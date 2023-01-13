import { Client } from "@notionhq/client";

const NOTION_KEY = "secret_V9uPJzEiwaRdZS10KH0iRdbeWpS9LxkwZswLZ0mrh7A";
const NOTION_DATABASE_ID = "5852f47439464f1b8ae4e67e7fe209cd";

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
`zxcvb`
addItem("Yurts in Big Sur, California");
