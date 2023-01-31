import PodiumStep from "./PodiumStep";

export default function Podium({ winners }) {
  const podium = [8, 6, 4, 2, 0, 1, 3, 5, 7, 9]
    .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
    .filter(Boolean);

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column dense",
        gap: ".5rem",
        marginTop: "2rem",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "flex-end",
        alignItems: "flex-end",
        borderBottom: "1px solid #e5e7eb",
      }}
      id="podium"
    >
      {podium.map((winner) => (
        <PodiumStep key={winner.name} podium={podium} winner={winner} />
      ))}
    </div>
  );
}
