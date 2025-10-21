/**
 * Scrolls smoothly to a section by its ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Scrolls to the top of the page smoothly
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
