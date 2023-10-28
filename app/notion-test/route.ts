import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export interface NotionError {
  code: string;
  message: string;
}

export async function GET() {
  const auth = process.env.NOTION_TOKEN;

  const notion = new Client({
    auth,
  });
  const musicDatabaseId = "14277df52414430f967940559a83159f";
  try {
    const getMusicDatabaseData = await notion.databases.query({
      database_id: musicDatabaseId,
    });
    return getMusicDatabaseData;
  } catch (error) {
    console.log(error);
    const notionError = error as NotionError;
    return new NextResponse(notionError.message, {
      status: 500,
    });
  }
}
