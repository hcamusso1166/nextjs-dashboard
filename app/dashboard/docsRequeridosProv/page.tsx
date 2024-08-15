import DocsRequeridosProvTable from "@/app/ui/docsRequeridosProv/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { fetchDocRequeridosProveedor } from "@/app/lib/data";  

export default async function Page() {
  const docsRequeridosProv = await fetchDocRequeridosProveedor();
  console.log("Customer Page fechCustomer",docsRequeridosProv);

  return (
    <main>
      <DocsRequeridosProvTable docsRequeridos={docsRequeridosProv.map((doc: any) => ({
        ...doc,

      }))} />
    </main>
  );  
}