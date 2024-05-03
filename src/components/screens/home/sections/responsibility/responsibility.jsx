import React from 'react'
import styles from './responsibility.module.scss'
import SectionHeading from '@/components/ui/section_heading/section_heading'

const ResponsibilitySection = () => {
  return (
    <section className={styles.responsibilitySection}>
      <SectionHeading head='Our Responsibility' variant={1}/>
    </section>
  )
}

export default ResponsibilitySection
