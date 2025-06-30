'use client';

import { useState } from 'react';
import { Button } from '@/app/ui/button';

// Basic types for nested structures
interface Vehicle {
  dominio: string;
}

interface Person {
  nombre: string;
}

interface Provider {
  nombre: string;
  personas: Person[];
  vehiculos: Vehicle[];
}

interface Requirement {
  nombre: string;
  proveedores: Provider[];
}

interface Site {
  nombre: string;
  requerimientos: Requirement[];
}

interface CustomerFormState {
  name: string;
  CUIT: string;
  sites: Site[];
}

export default function CreateCustomerForm() {
  const [form, setForm] = useState<CustomerFormState>({
    name: '',
    CUIT: '',
    sites: [],
  });

  const addSite = () => {
    setForm((prev) => ({
      ...prev,
      sites: [...prev.sites, { nombre: '', requerimientos: [] }],
    }));
  };

  const addRequirement = (siteIndex: number) => {
    setForm((prev) => {
      const sites = [...prev.sites];
      sites[siteIndex].requerimientos.push({ nombre: '', proveedores: [] });
      return { ...prev, sites };
    });
  };

  const addProvider = (siteIndex: number, reqIndex: number) => {
    setForm((prev) => {
      const sites = [...prev.sites];
      sites[siteIndex].requerimientos[reqIndex].proveedores.push({
        nombre: '',
        personas: [],
        vehiculos: [],
      });
      return { ...prev, sites };
    });
  };

  const addPerson = (siteIndex: number, reqIndex: number, provIndex: number) => {
    setForm((prev) => {
      const sites = [...prev.sites];
      sites[siteIndex].requerimientos[reqIndex].proveedores[provIndex].personas.push({ nombre: '' });
      return { ...prev, sites };
    });
  };

  const addVehicle = (siteIndex: number, reqIndex: number, provIndex: number) => {
    setForm((prev) => {
      const sites = [...prev.sites];
      sites[siteIndex].requerimientos[reqIndex].proveedores[provIndex].vehiculos.push({ dominio: '' });
      return { ...prev, sites };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting client', form);
    // TODO: replace console with API call
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-md bg-gray-50 p-4 md:p-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Nombre</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">CUIT</label>
          <input
            type="text"
            value={form.CUIT}
            onChange={(e) => setForm({ ...form, CUIT: e.target.value })}
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {form.sites.map((site, sIndex) => (
          <div key={sIndex} className="rounded-md border p-4 space-y-2">
            <input
              type="text"
              placeholder="Nombre del Site"
              value={site.nombre}
              onChange={(e) => {
                const sites = [...form.sites];
                sites[sIndex].nombre = e.target.value;
                setForm({ ...form, sites });
              }}
              className="block w-full rounded-md border border-gray-200 py-1 px-2 text-sm"
            />

            {site.requerimientos.map((req, rIndex) => (
              <div key={rIndex} className="ml-4 rounded-md border p-2 space-y-2">
                <input
                  type="text"
                  placeholder="Requerimiento"
                  value={req.nombre}
                  onChange={(e) => {
                    const sites = [...form.sites];
                    sites[sIndex].requerimientos[rIndex].nombre = e.target.value;
                    setForm({ ...form, sites });
                  }}
                  className="block w-full rounded-md border border-gray-200 py-1 px-2 text-sm"
                />

                {req.proveedores.map((prov, pIndex) => (
                  <div key={pIndex} className="ml-4 rounded-md border p-2 space-y-2">
                    <input
                      type="text"
                      placeholder="Proveedor"
                      value={prov.nombre}
                      onChange={(e) => {
                        const sites = [...form.sites];
                        sites[sIndex].requerimientos[rIndex].proveedores[pIndex].nombre = e.target.value;
                        setForm({ ...form, sites });
                      }}
                      className="block w-full rounded-md border border-gray-200 py-1 px-2 text-sm"
                    />
                    {prov.personas.map((per, perIndex) => (
                      <input
                        key={perIndex}
                        type="text"
                        placeholder="Persona"
                        value={per.nombre}
                        onChange={(e) => {
                          const sites = [...form.sites];
                          sites[sIndex].requerimientos[rIndex].proveedores[pIndex].personas[perIndex].nombre = e.target.value;
                          setForm({ ...form, sites });
                        }}
                        className="ml-4 block w-full rounded-md border border-gray-200 py-1 px-2 text-sm"
                      />
                    ))}
                    <Button type="button" className="ml-4" onClick={() => addPerson(sIndex, rIndex, pIndex)}>
                      + Persona
                    </Button>

                    {prov.vehiculos.map((veh, vIndex) => (
                      <input
                        key={vIndex}
                        type="text"
                        placeholder="Vehículo"
                        value={veh.dominio}
                        onChange={(e) => {
                          const sites = [...form.sites];
                          sites[sIndex].requerimientos[rIndex].proveedores[pIndex].vehiculos[vIndex].dominio = e.target.value;
                          setForm({ ...form, sites });
                        }}
                        className="ml-4 block w-full rounded-md border border-gray-200 py-1 px-2 text-sm"
                      />
                    ))}
                    <Button type="button" className="ml-4" onClick={() => addVehicle(sIndex, rIndex, pIndex)}>
                      + Vehículo
                    </Button>
                  </div>
                ))}
                <Button type="button" onClick={() => addProvider(sIndex, rIndex)}>
                  + Proveedor
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => addRequirement(sIndex)}>
              + Requerimiento
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addSite}>
          + Site
        </Button>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Guardar Cliente</Button>
      </div>
    </form>
  );
}