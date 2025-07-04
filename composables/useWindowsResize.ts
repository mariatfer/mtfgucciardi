import { MOBILE_RESOLUTION } from '@/constants/resolutions'

const PADDING_MOBILE = 32
const PADDING_DESKTOP = 256

export function useWindowsResize() {
  const slidesPerView = shallowRef(0)
  const isResponsiveResolution = ref(false)

  const updateWindowsResize = () => {
    let padding = 0
    isResponsiveResolution.value = window.innerWidth < MOBILE_RESOLUTION
    padding = isResponsiveResolution.value ? PADDING_MOBILE : PADDING_DESKTOP
    slidesPerView.value = (window.innerWidth - padding) / 4 / 100
  }
  onMounted(() => {
    updateWindowsResize()
    window.addEventListener('resize', updateWindowsResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowsResize)
  })

  return { slidesPerView, isResponsiveResolution }
}
