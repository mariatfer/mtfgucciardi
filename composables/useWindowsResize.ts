import { MOBILE_RESOLUTION, TABLET_RESOLUTION } from "@/constants/resolutions";

export function useWindowsResize() {
  const isMobileResolution = ref(false);
  const isTabletResolution = ref(false);

  const updateWindowsResize = () => {
    isMobileResolution.value = window.innerWidth < MOBILE_RESOLUTION;
    isTabletResolution.value =
      window.innerWidth >= MOBILE_RESOLUTION &&
      window.innerWidth < TABLET_RESOLUTION;
  };
  onMounted(() => {
    updateWindowsResize();
    window.addEventListener("resize", updateWindowsResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateWindowsResize);
  });

  return { isMobileResolution, isTabletResolution };
}
