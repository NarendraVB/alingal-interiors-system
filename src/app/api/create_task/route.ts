import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {

  const body = await req.json()

  const { error } = await supabase
    .from("tasks")
    .insert([
      {
        title: body.title,
        project_id: body.project_id,
        status: "pending"
      }
    ])

  return Response.json({ error })
}