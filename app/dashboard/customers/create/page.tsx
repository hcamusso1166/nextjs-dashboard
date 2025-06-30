import CreateCustomerForm from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/customers' },
          { label: 'Nuevo Cliente', href: '/dashboard/customers/create', active: true },
        ]}
      />
      <CreateCustomerForm />
    </main>
  );
}