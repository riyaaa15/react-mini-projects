export default function DiceDisplay({ number }) {
    const diceEmojis = { 1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅" };

    if (!number) return null;

    return (
        <span className={`dice-emojie ${number === 6 ? "licky" : ""}`}>
            {diceEmojis[number]}
        </span>
    );
};