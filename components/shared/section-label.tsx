type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="mb-4 text-sm font-medium text-blue-600">{children}</p>;
}
