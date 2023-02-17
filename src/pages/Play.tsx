import { useCards } from "../hooks";

export function PlayPage() {
  const cards = useCards();

  return (
    <div className="container mx-auto flex flex-col justify-center p-6 gap-4">
      {cards.map((card) => (
        <table className="">
          <tbody>
            {[0, 0, 0].map((_, index) => (
              <tr className="">
                {card.map((row) => (
                  <td className="">{row[index]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
