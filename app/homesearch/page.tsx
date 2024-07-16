import { useRouter, useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return <div className="h-screen grid place-content-center">{name}</div>;
}
