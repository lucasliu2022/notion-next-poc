import { Client } from "@notionhq/client";

const NOTION_KEY = "secret_V9uPJzEiwaRdZS10KH0iRdbeWpS9LxkwZswLZ0mrh7A";

const notion = new Client({ auth: NOTION_KEY });

// (async () => {
//   const pageId = "5852f47439464f1b8ae4e67e7fe209cd";
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   console.log(response.properties.title.title);
// })();


(async () => {
    const blockId = '5852f47439464f1b8ae4e67e7fe209cd';
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
    console.log(response);
  })();