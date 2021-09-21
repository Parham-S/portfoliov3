import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-40 h-40 mb-8 rounded-full" src="/parham.png" alt="( ͡° ͜ʖ ͡°)" />
          <h1 className="mx-auto text-2xl font-semibold font-mono tracking-widest text-center sm:text-3xl">
            Parham Saniei
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest font-mono text-center">SOFTWARE ENGINEER</h2>
        </div>
      </motion.div>
    </Layout>
  )
}
