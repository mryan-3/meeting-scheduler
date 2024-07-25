const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex flex-col max-w-screen min-h-screen antialiased '>
      {children}
    </main>
  )
}

export default Layout
