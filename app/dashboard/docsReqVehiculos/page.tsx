import Search from '@/app/ui/search';
import DocsReqVehiculosT from "@/app/ui/docsReqVehiculos/table";
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default async function Page(  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const filter = "&filter[idVehiculo][idProveedor][nombre][_eq]="
    const filterquery = searchParams?.query || '';
    const query = filterquery? filter + filterquery : '';
    const currentPage = Number(searchParams?.page) || 1;
    
    return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Documentos Requeridos a Vehículos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <DocsReqVehiculosT query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  ); 
    }