import type { FormData, FormErrors } from "@/interfaces/forms";

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(data.name.trim())) {
    errors.name = "El nombre solo puede contener letras.";
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = "El apellido debe tener al menos 2 caracteres.";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(data.lastName.trim())) {
    errors.lastName = "El apellido solo puede contener letras.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export function validateField(
  field: keyof FormData,
  value: string
): string | undefined {
  const dummyData = {
    name: "",
    lastName: "",
    email: "",
    message: "",
    [field]: value,
  } as FormData;

  const errors = validateForm(dummyData);
  return errors[field];
}
