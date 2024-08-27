import Search from '@/app/ui/search';
import CustomersTable from "@/app/ui/customers/table";
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchCustomersPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page( {
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const filter = "&search="
  const filterquery = searchParams?.query || '';
  const query = filterquery? filter + filterquery : '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);


  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );  
}