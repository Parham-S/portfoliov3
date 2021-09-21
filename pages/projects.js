import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div>Under Construction</div>
      </motion.div>
    </Layout>
  )
}
