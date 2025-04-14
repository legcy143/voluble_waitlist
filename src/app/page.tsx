
"use client"
import Img from '@/components/ui/img'
import WaitlistForm from './_components/WaitListForm'
import { motion } from "motion/react"

export default function Home() {
  return (
    <main className='bg-gradient-to-tr  from-primary/50 via-background to-background h-full w-screen overflow-auto relative flex flex-col'>
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -top-1/2 pointer-events-none z-1"></div>
      <nav className='p-5 w-fit flex items-center gap-2 fixed'>
        <Img className='size-10 object-contain' src='/logo.svg' />
        <p className='font-bold text-2xl'>Voluble</p>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=' p-2 pb-[5rem]  max-w-xl z-40 m-auto  flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[20vw] sm:text-[15vw] md:text-[10vw] lg:text-10xl font-bold'>Voluble</h1>
        <p className='text-base sm:text-xl md:text-2xl font-semibold text-center'>The next generation of conversation</p>
        <p className='text-center text-xs opacity-80'>experience seamless communication with our revoolutionary chat platform . connect with friends , famiy aand colleagues in a whole new way.</p>
        <WaitlistForm />
        <p className='text-[0.6rem] opacity-80'>be the first to experience voluble when we launch</p>
      </motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-primary/50 fixed bottom-0 w-screen object-contain"
        viewBox="0 0 1440 320"
      >
        <path fillOpacity="1">
          <animate
            attributeName="d"
            dur="24s"
            repeatCount="indefinite"
            values="
        M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L0,320Z;
        
        M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L0,320Z;
        
        M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L0,320Z;
        
        M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L0,320Z
      "
          />
        </path>
      </svg>


    </main>
  )
}
