type Props = {
  title: string;
  subtitle: string;
  mb?: number;
  mt?: number;
};

export default function Header({ title, subtitle, mb, mt }: Props) {
  return (
    <div style={{ marginBottom: `${mb}px`, marginTop: `${mt}px` }}>
      <div className="text-center">
        <p className="text-2xl font-semibold">{title}</p>
        <div className="flex justify-center text-center">
          <p className="w-[600px] text-sm mt-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
