import {getDocumentFromCollection} from "../../../../utils/firebase"
export async function POST(req) {
  const {question, ans} = await req.json();
  const data = await getDocumentFromCollection("Questions", question.toString());
  if (data?.flag == ans) {
    return new Response(JSON.stringify(data), {
      status: 200,
    })
  }
  
  return new Response(JSON.stringify({
    message: "Wrong Answer",
  }), {
    status: 402,
  })
}