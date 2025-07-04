export function useModal() {
  const showModal = ref(false)
  const dataModal = ref()

  function useOpenModal() {
    showModal.value = true
  }

  function useCloseModal() {
    showModal.value = false
  }

  function useOpenModalWithData<T>(data: T) {
    dataModal.value = data
    useOpenModal()
  }

  const useAutoCloseModal = () => {
    showModal.value = true
    setTimeout(() => {
      showModal.value = false
    }, 5000)
  }

  function useOpenScrollableModal() {
    const root = document.documentElement.style
    root.overflow = 'hidden'
    useOpenModal()
  }

  function useCloseScrollableModal() {
    const root = document.documentElement.style
    root.overflow = 'auto'
    useCloseModal()
  }

  return {
    dataModal,
    showModal,
    useAutoCloseModal,
    useCloseModal,
    useOpenModal,
    useOpenModalWithData,
    useOpenScrollableModal,
    useCloseScrollableModal,
  }
}
