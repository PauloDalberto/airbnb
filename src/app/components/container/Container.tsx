interface ContainerProps{
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps){
  return(
    <main className="px-20 bg-white w-full h-full">
      {children}
    </main>
  )
}