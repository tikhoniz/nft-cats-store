import AdminHeader from '@/components/admin/admin-header/admin-header'

export const metadata = {
  title: '',
  description: '',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <AdminHeader />
      {children}
    </main>
  )
}
