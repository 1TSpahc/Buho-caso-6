import { FormCreate } from '../../components/formCreate'
import { Subtitle } from '../../components/subtitle'

import { motion } from 'framer-motion'

export function Create () {
  return (
    <motion.section initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Subtitle>Agrega los numeros de tus clientes</Subtitle>
      <FormCreate />
    </motion.section>
  )
}
