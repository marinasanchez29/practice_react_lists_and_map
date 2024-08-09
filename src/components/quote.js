function Quote() {
  const quotes = [
    "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down. - Roy T. Bennett",
    "We are here to add what we can to life, not to get what we can from life.  - William Osler",
    "If you change the way you look at things, the things you look at change. - Wayne Dyer",
    "Perfection is not attainable. But if we chase perfection we can catch excellence. - Vince Lombardi",
    "You have succeeded in life when all you really want is only what you really need. - Vernon Howard",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy. - Sai Baba",
  ];

  console.log(quotes);

  return (
    <div
      style={{
        backgroundColor: "paleturquoise",
        padding: "20px",
        fontFamily: "'Georgia', sans-serif",
        border: "2px solid black",
        borderRadius: "10px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "25px",
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        Practicing Lists and Mapping Through Them
      </h1>
      <ul style={{ paddingLeft: "20px" }}>
        {quotes.map((quote, index) => (
          <li key={index} style={{ fontSize: "16px", marginBottom: "15px" }}>
            {quote}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quote;
