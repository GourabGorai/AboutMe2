export interface Project {
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  details: string;
}

export const projects: Project[] = [
  {
    title: "Image Recognition System",
    category: "Logistic Regression, Machine Learning",
    description: "Advanced image recognition system using machine learning techniques",
    videoUrl: "/videos/image_recog.mp4",
    details: `
      <h2>Image Recognition System</h2>
      <p>A sophisticated image recognition system built using logistic regression and machine learning principles.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time image classification</li>
        <li>Multiple category support</li>
        <li>High accuracy rates</li>
        <li>Optimized performance</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Python</li>
        <li>TensorFlow</li>
        <li>OpenCV</li>
        <li>Scikit-learn</li>
      </ul>
    `
  },
  {
    title: "Crypto Prediction",
    category: "Linear Regression, Machine Learning",
    description: "Cryptocurrency price prediction using ML algorithms",
    videoUrl: "/videos/crypto_prediction.mp4",
    details: `
      <h2>Cryptocurrency Price Prediction</h2>
      <p>An advanced cryptocurrency price prediction system using linear regression and machine learning.</p>
      <h3>Features:</h3>
      <ul>
        <li>Real-time price analysis</li>
        <li>Historical data processing</li>
        <li>Multiple currency support</li>
        <li>Trend visualization</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Python</li>
        <li>Pandas</li>
        <li>Scikit-learn</li>
        <li>Matplotlib</li>
      </ul>
    `
  },
  {
    title: "Stock Price Prediction",
    category: "Random Forest, Machine Learning",
    description: "Stock market prediction system using Random Forest",
    videoUrl: "/videos/stock_price_prediction.mp4",
    details: `
      <h2>Stock Price Prediction</h2>
      <p>A comprehensive stock market prediction system utilizing Random Forest algorithms.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Market trend analysis</li>
        <li>Portfolio optimization</li>
        <li>Risk assessment</li>
        <li>Automated trading signals</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Python</li>
        <li>Pandas</li>
        <li>Scikit-learn</li>
        <li>Yahoo Finance API</li>
      </ul>
    `
  }
];