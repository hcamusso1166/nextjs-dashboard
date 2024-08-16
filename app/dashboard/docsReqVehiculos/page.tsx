import { fetchDocReqVehiculos } from "@/app/lib/data";
import DocsReqVehiculosT from "@/app/ui/docsReqVehiculos/table";

export default async function Page() {
    const docReqVehiculos = await fetchDocReqVehiculos();
    console.log("Customer Page fechCustomer",docReqVehiculos);
    
    return (
        <main>
        <DocsReqVehiculosT docsReqVehiculos={docReqVehiculos.map((doc: any) => ({
            ...doc,
    
        }))} />
        </main>
    );  
    }