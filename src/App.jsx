import { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState(null);

  const handleGenerate = async () => {
    if (!notes.trim()) return;

    // Fake AI output for now
    const fakeQuiz = {
      questions: [
        { q: "What is accessibility?", a: "Making technology usable for everyone" },
        { q: "Name one accessibility feature?", a: "Text-to-speech" },
      ],
      flashcards: [
        { front: "WCAG", back: "Web Content Accessibility Guidelines" },
        { front: "Alt Text", back: "Text describing images for screen readers" },
      ],
    };
    setOutput(fakeQuiz);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", maxWidth: 600, margin: "auto" }}>
      <h1>Quizify My Notes ♿</h1>
      <textarea
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{ width: "100%", height: "120px", marginBottom: "1rem", padding: "1rem" }}
      />
      <button onClick={handleGenerate} style={{ padding: "0.5rem 1rem" }}>
        Generate Quiz & Flashcards
      </button>

      {output && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Quiz Questions</h2>
          <ul>
            {output.questions.map((q, i) => (
              <li key={i}>
                <b>Q:</b> {q.q}
                <br />
                <b>A:</b> {q.a}
              </li>
            ))}
          </ul>

          <h2>Flashcards</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {output.flashcards.map((card, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid gray",
                  padding: "1rem",
                  width: "150px",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <p><b>{card.front}</b></p>
                <p>{card.back}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
