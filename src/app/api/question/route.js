import {getDocumentFromCollection} from "../../../../utils/firebase"
export async function POST(req) {
  const {question} = await req.json();
  const data = await getDocumentFromCollection("Questions", question.toString());
  return new Response(JSON.stringify(data), {
    status: 200,
  })
}