import { fetchDocReqPersonas } from "@/app/lib/data";
import DocsReqPersonasTable from "@/app/ui/docsReqPersonas/table";


export default async function Page() {
  const docReqPersonas = await fetchDocReqPersonas();
  console.log("Customer Page fechCustomer",docReqPersonas);

  return (
    <main>
      <DocsReqPersonasTable docsReqPersonas={docReqPersonas.map((doc: any) => ({
        ...doc,

      }))} />
    </main>
  );  
}