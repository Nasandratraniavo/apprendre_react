export default function Color({ value }) {
  return value ? (
    <div className="colorbox" style={{ backgroundColor: value }}>
      {value}
    </div>
  ) : (
    <div>Erreur</div>
  );
}
