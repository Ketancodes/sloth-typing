// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function Dashgraph({ history, errorHistory }) {
//   const data = history.map((wpm, index) => ({
//     second: index + 1,
//     wpm,
//     errors: errorHistory ? errorHistory[index] : 0,
//   }));

//   return (
//     <div className="w-full h-[92%]">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <XAxis
//             dataKey="second"
//             stroke="#8d8b8b"
//             fontFamily="mono"
//             tick={{ fontSize: 14 }}
//           />
//           <YAxis stroke="#8d8b8b" tick={{ fontSize: 14 }} />
//           <Tooltip
//             contentStyle={{
//               background: "#333",
//               border: "none",
//               color: "#fff",
//             }}
//           />

//           {/* Main WPM line */}
//           <Line
//             type="monotone"
//             dataKey="wpm"
//             stroke="#f8b809"
//             strokeWidth={2}
//             dot={false}
//           />
//           <Line
//             type="monotone"
//             dataKey="errors"
//             stroke="#ff4d4d" // red
//             strokeWidth={1.8}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Scatter,
  CartesianGrid,
} from "recharts";

// Red X marker
function XMark({ cx, cy }) {
  const size = 6;
  const half = size / 2;
  return (
    <g>
      <line
        x1={cx - half}
        y1={cy - half}
        x2={cx + half}
        y2={cy + half}
        stroke="#ff4d4d"
        strokeWidth="2"
      />
      <line
        x1={cx + half}
        y1={cy - half}
        x2={cx - half}
        y2={cy + half}
        stroke="#ff4d4d"
        strokeWidth="2"
      />
    </g>
  );
}

export default function Dashgraph({ history = [], errorHistory = [] }) {
  // Data for WPM line
  const data = history.map((wpm, i) => ({
    second: i + 1,
    wpm,
  }));

  // Markers
  // const markers = history
  //   .map((wpm, i) => {
  //     if (errorHistory[i] === 1) {
  //       return {
  //         second: i + 1,
  //         wpm,
  //         marker: Math.max(wpm + 7, 15),
  //       };
  //     }
  //     return null;
  //   })
  //   .filter(Boolean);
  const markers = history
    .map((wpm, i) => {
      return errorHistory[i] === 1 ? { x: i + 1, y: wpm + 5 } : null;
    })
    .filter(Boolean);

  return (
    <div className="w-full h-[92%]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#2f2f2f" strokeDasharray="3 3" />
          <XAxis dataKey="second" stroke="#8d8b8b" tick={{ fontSize: 12 }} />
          <YAxis stroke="#8d8b8b" tick={{ fontSize: 12 }} />

          <Tooltip
            contentStyle={{
              background: "#333",
              border: "none",
              color: "#fff",
            }}
          />

          {/* WPM line */}
          <Line
            type="monotone"
            dataKey="wpm"
            stroke="#f8b809"
            strokeWidth={2}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />

          {/* X markers */}
          <Scatter
            data={markers}
            dataKey="y"
            xAxisId={0}
            yAxisId={0}
            shape={({ cx, cy }) => <XMark cx={cx} cy={cy} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
