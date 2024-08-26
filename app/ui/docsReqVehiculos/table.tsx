
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { FormDocsReqVehT } from '@/app/lib/definitions';
import { fetchDocReqVehiculos } from '@/app/lib/data';

export default async function DocsReqVehiculosT({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const docsReqVehiculos = await fetchDocReqVehiculos(query , currentPage);
    return (
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {docsReqVehiculos?.map((docs: FormDocsReqVehT) => (
                                    <div
                                        key={docs.id}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">
                                                        <p>{docs.idVehiculo.dominio}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="pt-4 text-sm">
                                            <p>{docs.fechaPresentacion} </p>
                                        </div>
                                        <div className="pt-4 text-sm">
                                            <p>{docs.archivo} </p>
                                        </div>
                                        <div className="pt-4 text-sm">
                                            <p>{docs.status} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden md:block w-full">
                                <thead>
                                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Proveedor
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Dominio
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Tipo
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Documento
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Validez
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Presentación
                    </th>
                    <th scope="col" className="px-6 py-5 font-medium">
                      Prox Fecha
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {docsReqVehiculos?.map((docs: FormDocsReqVehT) => (
                    <tr key={docs.id} className="group">
                        <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{docs.idVehiculo.idProveedor.nombre}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{docs.idVehiculo.dominio}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {docs.idParametro.idTipoEntidad.nombreEntidad}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {docs.idParametro.idTipoDocumento.nombreDocumento}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {docs.validezDias}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {docs.fechaPresentacion}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {docs.archivo}
                      </td>
                      <td className="whitespace-nowrap bg-white px-6 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {docs.proximaFechaPresentacion}
                      </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                            {docs.status} 
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