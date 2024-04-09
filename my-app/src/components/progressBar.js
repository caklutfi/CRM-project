import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
var percentage = 50
const ProgressCircle = ({ percentage }) => {
    return (
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
    );
};

export default ProgressCircle;