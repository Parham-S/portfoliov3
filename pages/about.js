import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center font-mono text-gray-800 dark:text-white">
        My name is Parham. I am a software engineer, Florida International University alumni, and recent graduate of Wyncode out of Miami, FL. I am a Former Marine, and Florida International University graduate. 
        </div>
        <div className="text-center font-mono text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I love sports, sports analytic, hanging with friends, and feeding a dangerous strawberry milk addiction.
        </div>
      </motion.div>
    </Layout>
  )
}
