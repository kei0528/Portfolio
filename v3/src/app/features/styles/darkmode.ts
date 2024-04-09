export function isDarkMode(): boolean {
  return document.body.classList.contains('dark')
}

export function toDarkMode(): void {
  if (!isDarkMode()) {
    document.body.classList.add('dark')
  }
}

export function toLightMode(): void {
  if (isDarkMode()) {
    document.body.classList.remove('dark')
  }
}
