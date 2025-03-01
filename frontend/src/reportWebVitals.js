// import { reportWebVitals } from 'web-vitals';

// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/frontend/src/reportWebVitals.js
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;

// const sendToAnalytics = (metric) => {
//     console.log(metric);
//     // You can send the metric to your analytics endpoint here
// };

// reportWebVitals(sendToAnalytics);