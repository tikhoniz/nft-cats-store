import AdminHeader from '@/components/admin/admin-header/admin-header'

export const metadata = {
  title: 'Admin page',
  description: 'Administrator',
  robots: {
    index: false,
    follow: false,
  },
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
