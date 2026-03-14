import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  title: string
  value: string
}

export default function StatsCard({ title, value }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}