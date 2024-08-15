import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { fetchCustomers, fetchCustomersSICC } from "@/app/lib/data";  

export default async function Page() {
  const customersSICC = await fetchCustomersSICC();
  console.log("Customer Page fechAPISICC",customersSICC);
  
  return (
    <main>
      <CustomersTable customers={customersSICC.map((customer: any) => ({
        ...customer,
        email: "",
        image_url: "",
        total_invoices: 0,
        total_pending: 0,
        total_paid: 0,
      }))} />
    </main>
  );  
}