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
          Hello! My name is Parham. I am a Former Marine, Florida International University alumni,
          and recent graduate of Wyncode out of Miami, FL. South Florida is my home and programming
          is my passion.
        </div>
        <div className="text-center font-mono text-gray-800 dark:text-white">
          When I'm not navigating through a sea of browser tabs, I spend my time keeping up with my
          sports, sports analytic, hanging out with friends, and feeding my very dangerous Yoohoo
          addiction.
        </div>
      </motion.div>
    </Layout>
  )
}
