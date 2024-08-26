import DocsRequeridosProvTable from "@/app/ui/docsRequeridosProv/table";
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { fetchDocsReqProvPages } from '@/app/lib/data';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Search from "@/app/ui/search";
import Pagination from '@/app/ui/invoices/pagination';
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';

export default async function Page( {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const filter = "&filter[idProveedor][nombre][_eq]="
    const filterquery = searchParams?.query || '';
    const query = filterquery? filter + filterquery : '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchDocsReqProvPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Documentos Requeridos a Proveedores</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <DocsRequeridosProvTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );  
}