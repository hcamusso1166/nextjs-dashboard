"use client"

import { useEffect, useState } from "react"
import { getCustomers, deleteCustomer } from "@/app/lib/data"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CustomerForm from "./CustomerForm"

export default function CustomersPage() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    const data = await getCustomers("", 1)
    setCustomers(data)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDelete = async (id: number) => {
    if (confirm("¿Seguro que querés eliminar este cliente?")) {
      await deleteCustomer(id)
      loadData()
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <CustomerForm mode="create" onSuccess={loadData} />
      </div>

      {loading ? (
        <p>Cargando clientes...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>CUIT</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((cliente: any) => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.name}</TableCell>
                <TableCell>{cliente.CUIT}</TableCell>
                <TableCell>{cliente.contacto}</TableCell>
                <TableCell>{cliente.mail}</TableCell>
                <TableCell className="flex gap-2">
                  <CustomerForm mode="edit" data={cliente} onSuccess={loadData} />
                  <Button variant="destructive" onClick={() => handleDelete(cliente.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
