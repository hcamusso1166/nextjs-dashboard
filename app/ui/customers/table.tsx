
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { fetchCustomersSICC } from "@/app/lib/data"; 
import { CustomerSICC } from '@/app/lib/definitions';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customersSICC = await fetchCustomersSICC(query , currentPage);
   return (
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {customersSICC?.map((customer: CustomerSICC) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.mail}
                        </p>
                      </div>
                    </div>
                   <div className="pt-4 text-sm space-y-1">
                      <p>ID: {customer.id}</p>
                      <p>Estado: {customer.status}</p>
                      <p>CUIT: {customer.CUIT}</p>
                      <p>Calle: {customer.calle}</p>
                      <p>Nro: {customer.nro}</p>
                      <p>Piso: {customer.piso}</p>
                      <p>Dpto: {customer.dpto}</p>
                      <p>Contacto: {customer.contacto}</p>
                      <p>Tel: {customer.tel}</p>
                      <p>Mail Notif: {customer.mailNotif}</p>
                      <p>URL Slug: {customer.urlSlug}</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                   <th scope="col" className="px-4 py-5 font-medium sm:pl-6">ID</th>
                    <th scope="col" className="px-4 py-5 font-medium">Nombre</th>
                    <th scope="col" className="px-3 py-5 font-medium">Email</th>
                    <th scope="col" className="px-3 py-5 font-medium">Estado</th>
                    <th scope="col" className="px-3 py-5 font-medium">CUIT</th>
                    <th scope="col" className="px-4 py-5 font-medium">Calle</th>
                    <th scope="col" className="px-4 py-5 font-medium">Nro</th>
                    <th scope="col" className="px-4 py-5 font-medium">Piso</th>
                    <th scope="col" className="px-4 py-5 font-medium">Dpto</th>
                    <th scope="col" className="px-4 py-5 font-medium">Contacto</th>
                    <th scope="col" className="px-3 py-5 font-medium">Tel</th>
                    <th scope="col" className="px-3 py-5 font-medium">Mail Notif</th>
                    <th scope="col" className="px-4 py-5 font-medium">URL Slug</th> 
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customersSICC.map((customer: CustomerSICC) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm sm:pl-6">
                        {customer.id}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.mail}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.status}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.CUIT}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.calle}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.nro}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.piso}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.dpto}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.contacto}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.tel}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.mailNotif}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.urlSlug}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
  );
}
