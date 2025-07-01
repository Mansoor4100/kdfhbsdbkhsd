import React, { useState } from 'react';

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    const mockData = [
      { id: 1, item: 'Casual Denim Jacket', color: 'Blue' },
      { id: 2, item: 'Formal Black Blazer', color: 'Black' },
      { id: 3, item: 'Summer Floral Dress', color: 'Red' },
    ];
    setTimeout(() => setRecommendations(mockData), 1000);
  };

  return (
    <main style={{ padding: '2rem', background: 'linear-gradient(135deg, #f7971e, #ffd200)' }}>
      <h2>Outfit Recommendations</h2>
      <button onClick={fetchRecommendations} style={{ marginBottom: '1rem' }}>
        Fetch Recommendations
      </button>
      <ul>
        {recommendations.length === 0 ? (
          <p>No recommendations yet.</p>
        ) : (
          recommendations.map((rec) => (
            <li key={rec.id}>{rec.item} - Color: {rec.color}</li>
          ))
        )}
      </ul>
    </main>
  );
}
