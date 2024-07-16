import { SearchProperties } from "@/actions/SearchProperties";
import Base from "@/components/home/_Base";

export default async function Home() {
  const properties = await SearchProperties({
    location: "Oceantown, Fl",
    bath: 2,
    title: "condo",
  })
  console.log(properties)
  return (
    <div>
      <Base />
    </div>
  )
}
