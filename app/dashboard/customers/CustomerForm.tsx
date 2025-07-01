"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createCustomer, updateCustomer } from "@/app/lib/data"

export default function CustomerForm({ mode = "create", data = null, onSuccess }: {
  mode?: "create" | "edit"
  data?: any
  onSuccess?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: data?.name || "",
    CUIT: data?.CUIT || "",
    calle: data?.calle || "",
    nro: data?.nro || "",
    piso: data?.piso || "",
    dpto: data?.dpto || "",
    contacto: data?.contacto || "",
    mail: data?.mail || "",
    tel: data?.tel || "",
    mailNotif: data?.mailNotif || "",
    urlSlug: data?.urlSlug || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (mode === "create") {
      await createCustomer(formData)
    } else if (mode === "edit" && data?.id) {
      await updateCustomer(data.id, formData)
    }
    setOpen(false)
    onSuccess?.()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={mode === "edit" ? "secondary" : "default"}>
          {mode === "edit" ? "Editar" : "Nuevo Cliente"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === "edit" ? "Editar Cliente" : "Nuevo Cliente"}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Nombre</Label>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label>CUIT</Label>
              <Input name="CUIT" value={formData.CUIT} onChange={handleChange} />
            </div>
            <div>
              <Label>Calle</Label>
              <Input name="calle" value={formData.calle} onChange={handleChange} />
            </div>
            <div>
              <Label>Nro</Label>
              <Input name="nro" value={formData.nro} onChange={handleChange} />
            </div>
            <div>
              <Label>Piso</Label>
              <Input name="piso" value={formData.piso} onChange={handleChange} />
            </div>
            <div>
              <Label>Dpto</Label>
              <Input name="dpto" value={formData.dpto} onChange={handleChange} />
            </div>
            <div>
              <Label>Contacto</Label>
              <Input name="contacto" value={formData.contacto} onChange={handleChange} />
            </div>
            <div>
              <Label>Mail</Label>
              <Input name="mail" value={formData.mail} onChange={handleChange} />
            </div>
            <div>
              <Label>Teléfono</Label>
              <Input name="tel" value={formData.tel} onChange={handleChange} />
            </div>
            <div>
              <Label>Mail Notificación</Label>
              <Input name="mailNotif" value={formData.mailNotif} onChange={handleChange} />
            </div>
            <div className="col-span-2">
              <Label>Slug (opcional)</Label>
              <Input name="urlSlug" value={formData.urlSlug} onChange={handleChange} />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            {mode === "edit" ? "Guardar cambios" : "Crear"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
