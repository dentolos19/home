import AssetItem from "@/app/(admin)/_components/asset-item";
import { getAssets } from "@/lib/assets";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const assets = await getAssets();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={"/admin/assets/add"}>
        Add Asset
      </Link>
      {assets.map((asset) => (
        <AssetItem key={asset.id} data={asset} />
      ))}
    </main>
  );
}