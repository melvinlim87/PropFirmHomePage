export function generateXAUUSDData(count: number) {
  const data = [];
  let time = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0));
  let basePrice = 2096.50;
  let volatility = 305; // Increased volatility for wider price ranges
  let trend = Math.random() > 0.5 ? 1 : -10; // Random initial trend direction
  let trendStrength = 10.5; // Stronger trend component
  let trendDuration = Math.floor(Math.random() * 15) + 500; // Longer trend durations
  let currentTrendCount = 0;
  let momentum = 0;

  for (let i = 0; i < count; i++) {
    // Change trend direction with momentum
    if (currentTrendCount >= trendDuration) {
      trend = -trend;
      trendDuration = Math.floor(Math.random() * 15) + 500;
      currentTrendCount = 0;
      momentum = 0;
    }

    // Build momentum within trend
    momentum += (Math.random() * 0.4) * trend;
    momentum = Math.max(Math.min(momentum, 3), -3); // Cap momentum

    // Calculate price movements
    const trendEffect = trend * (trendStrength + Math.abs(momentum));
    const randomWalk = (Math.random() - 0.5) * volatility;
    
    // Calculate OHLC with more realistic price action
    const open = basePrice + trendEffect + randomWalk;
    const direction = Math.random() > 0.4 ? trend : -trend; // Bias towards trend
    const range = volatility * (0.5 + Math.random() * 0.5); // Variable range
    
    const high = open + Math.abs(range * (direction > 0 ? 1 : 0.5));
    const low = open - Math.abs(range * (direction < 0 ? 1 : 0.5));
    const close = direction > 0 ? 
      low + (high - low) * (0.6 + Math.random() * 0.4) : // Bullish close
      low + (high - low) * (Math.random() * 0.4); // Bearish close

    basePrice = close;
    currentTrendCount++;

    data.push({
      time: time.getTime() / 1000,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2))
    });

    time = new Date(time.getTime() + 60000);
  }

  return data;
}