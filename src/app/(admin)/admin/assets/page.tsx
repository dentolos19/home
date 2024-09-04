import AssetItem from "@/app/(admin)/_components/asset-item";
import { getAssets } from "@/lib/data/assets";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const assets = await getAssets();
  return (
    <main className={"space-y-2 p-4"}>
      <Link className={"btn btn-primary w-full"} href={`/admin/assets/set`}>
        Set Asset
      </Link>
      {assets.map((asset) => (
        <AssetItem key={asset.id} data={asset} />
      ))}
    </main>
  );
}