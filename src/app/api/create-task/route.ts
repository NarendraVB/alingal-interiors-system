import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {

  const body = await req.json()

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title: body.title,
        project_id: body.project_id,
        status: "pending"
      }
    ])
    .select()

  console.log("Insert result:", data)
  console.log("Insert error:", error)

  return Response.json({ data, error })
}