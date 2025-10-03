import lady1 from '../assets/about-us-image-1.jpg'
import lady2 from '../assets/about-us-image-2.jpg'
const About = () => {
    return (
        <div>
            

        </div>
    )
}

export default About


// {/* <button aria-label="Play video" className="play-btn">
//   <div className="ring-wrap">
//     {/* Rotating text ring */}
//     <svg width="200" height="200" viewBox="0 0 200 200" className="rotate-slow">
//       <defs>
//         <path id="ringPath" d="M100,12 a88,88 0 1,1 0,176 a88,88 0 1,1 0,-176" />
//       </defs>
//       <text className="ring-text">
//         <textPath href="#ringPath" startOffset="0%">
//           • Health Coaching Video • Health Coaching Video • Health Coaching Video •
//         </textPath>
//       </text>
//       <circle cx="100" cy="100" r="84" className="fill-none" />
//     </svg>

//     <span className="play-pill">
//       <FiPlay className="h-8 w-8" />
//     </span>
//   </div>
// </button> */}



 /* === Play button container (Tailwind: group absolute right-[12%] top-1/2 -translate-y-1/2 z-20) === */
// .play-btn {
//   position: absolute;
//   right: 12%;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 20;
//   cursor: pointer;
// }

// /* === Wrapper size (Tailwind: relative w-[200px] h-[200px]) === */
// .ring-wrap {
//   position: relative;
//   width: 200px;
//   height: 200px;
// }

// /* === Rotating SVG (Tailwind: rotate-slow) === */
// .rotate-slow {
//   animation: spin 12s linear infinite;
// }
// @keyframes spin {
//   to { transform: rotate(360deg); }
// }

// /* === SVG text styling (Tailwind: fill-white text-[12px] tracking-[2px]) === */
// .ring-text {
//   fill: #ffffff;
//   font-size: 12px;
//   letter-spacing: 2px;
// }

// /* === Utility: no fill (Tailwind: fill-none) === */
// .fill-none { fill: none; }

// /* === Center play pill (Tailwind: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 p-7 text-gray-900 shadow-lg transition group-hover:bg-amber-300) === */
// .play-pill {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   border-radius: 9999px;
//   background: #f59e0b;            /* amber-400 */
//   padding: 1.75rem;                /* p-7 */
//   color: #111827;                  /* gray-900 */
//   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
//   transition: background-color 150ms ease, box-shadow 150ms ease;
// }

// /* group-hover effect */
// .play-btn:hover .play-pill {
//   background: #fbbf24;            /* amber-300 */
// }