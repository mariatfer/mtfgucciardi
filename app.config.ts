export default defineAppConfig({
  ui: {
    timeline: {
      slots: {
        root: "gap-4",
        indicator:
          "group-data-[state=completed]:bg-[color:var(--c-dark-yellow)] group-data-[state=active]:bg-[color:var(--c-dark-yellow)]",
        separator: "bg-[color:var(--c-primary)]",
        title:
          "font-bold text-[color:var(--c-white)] text-(length:--s-font-h4)",
        date: "text-[color:var(--c-white)] text-[length:var(--s-font-cta)]/10",
        description:
          "text-[color:var(--c-light-graphite)] text-[length:var(--s-font-cta)] font-[family-name:var(--f-font-text)]",
      },
      variants: {
        color: {
          brand: {
            indicator:
              "group-data-[state=completed]:bg-[color:var(--c-dark-yellow)] group-data-[state=active]:bg-[color:var(--c-dark-yellow)]",
          },
        },
      },
      defaultVariants: {
        color: "brand",
      },
    },
  },
});
