import { columns } from "./table/columns";
import { Payment, payments } from "./table";
import { DataTable } from "./table/data-table";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData(): Promise<Payment[]> {
  await sleep(1000);

  return payments;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
