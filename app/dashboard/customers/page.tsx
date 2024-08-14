/*
import CustomersTable from "@/app/ui/customers/table";
export default async function Page() {
  const res = await fetch("https://vps-4233212-x.dattaweb.com/items/Clientes");
  const data = await res.json();

  
  const customers = Array.isArray(data) ? data : [data];
  console.log("Customer Page Aqui",customers);

    return (
      <main>
        <p>Customer Page</p>
      {data && <CustomersTable customers={customers} />}
        
      </main>
    );
    }
    */


import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { fetchCustomers, fetchCustomersSICC } from "@/app/lib/data";  

export default async function Page() {
  const customers = await fetchCustomers();
  console.log("Customer Page fechCustomer",customers);

  const customersSICC = await fetchCustomersSICC();
  console.log("Customer Page fechAPISICC",customersSICC);
  return (
    <main>
      <CustomersTable customers={customersSICC.map((customer) => ({
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